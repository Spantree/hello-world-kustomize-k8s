import { PrismaClient } from '@prisma/client';
import pino from 'pino';

const prisma = new PrismaClient();
const log = pino({ prettyPrint: true });

const counterNames = ['The first counter'];

const seed = async () => {
  for (const name of counterNames) {
    const result = await prisma.counter.upsert({ where: { name }, create: { name }, update: {} });
    log.info(result, `Upserted counter with name '${name}'`);
  }
};

seed()
  .catch((error) => {
    // eslint-disable-next-line no-console
    log.error(error, 'An error occurred seeding data');
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

export default seed;
