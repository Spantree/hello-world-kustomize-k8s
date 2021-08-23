import { mutationField, nonNull } from 'nexus'

export const CounterUpsertOneMutation = mutationField('upsertOneCounter', {
  type: nonNull('Counter'),
  args: {
    where: nonNull('CounterWhereUniqueInput'),
    create: nonNull('CounterCreateInput'),
    update: nonNull('CounterUpdateInput'),
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.counter.upsert({
      ...args,
      ...select,
    })
  },
})
