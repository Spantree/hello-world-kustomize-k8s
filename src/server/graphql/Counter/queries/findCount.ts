import { queryField, nonNull, list } from 'nexus'

export const CounterFindCountQuery = queryField('counterCount', {
  type: nonNull('Int'),
  args: {
    where: 'CounterWhereInput',
    orderBy: list('CounterOrderByInput'),
    cursor: 'CounterWhereUniqueInput',
    distinct: 'CounterScalarFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma }) {
    return prisma.counter.count(args as any)
  },
})
