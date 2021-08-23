import { queryField, list } from 'nexus'

export const CounterAggregateQuery = queryField('aggregateCounter', {
  type: 'AggregateCounter',
  args: {
    where: 'CounterWhereInput',
    orderBy: list('CounterOrderByInput'),
    cursor: 'CounterWhereUniqueInput',
    distinct: 'CounterScalarFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.counter.aggregate({ ...args, ...select }) as any
  },
})
