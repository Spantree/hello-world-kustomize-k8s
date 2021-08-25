FROM node:16.7-buster-slim AS base
RUN apt-get update && apt-get -y install openssl && apt-get clean

# Install dependencies only when needed
FROM base AS deps
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app
COPY . .
COPY --from=deps /app/node_modules ./node_modules

RUN yarn generate
RUN yarn build

# Production image, copy all the files and run next
FROM base AS runner
WORKDIR /app

ENV NODE_ENV production
ENV DATA_DIR /data
ENV SQLITE_DIR ${DATA_DIR}/sqlite
ENV DATABASE_URL file:${SQLITE_DIR}/app.db

# RUN groupadd
# RUN useradd -g 1001 -G nodejs nextjs
RUN addgroup --gid 1024 --system nodejs
RUN adduser --disabled-password --gecos "" --force-badname --ingroup nodejs nextjs

# You only need to copy next.config.js if you are NOT using the default configuration
# COPY --from=builder /app/next.config.js ./
COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/prisma ./prisma

RUN mkdir -p "${DATA_DIR}" \
  && chown -R nextjs:nodejs "${DATA_DIR}" \
	&& chmod 777 "${DATA_DIR}"

VOLUME ["/data"]

USER nextjs

RUN mkdir -p "${SQLITE_DIR}"

EXPOSE 3000

# Next.js collects completely anonymous telemetry data about general usage.
# Learn more here: https://nextjs.org/telemetry
# Uncomment the following line in case you want to disable telemetry.
# ENV NEXT_TELEMETRY_DISABLED 1

CMD ["sh", "-c", "yarn db-deploy && yarn db-seed && yarn start"]
