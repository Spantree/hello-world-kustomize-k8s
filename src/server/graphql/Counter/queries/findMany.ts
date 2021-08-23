import { queryField, nonNull, list } from 'nexus'

export const CounterFindManyQuery = queryField('counters', {
  type: nonNull(list(nonNull('Counter'))),
  args: {
    where: 'CounterWhereInput',
    orderBy: list('CounterOrderByInput'),
    cursor: 'CounterWhereUniqueInput',
    distinct: 'CounterScalarFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.counter.findMany({
      ...args,
      ...select,
    })
  },
})
