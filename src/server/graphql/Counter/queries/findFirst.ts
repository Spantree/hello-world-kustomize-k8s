import { queryField, list } from 'nexus'

export const CounterFindFirstQuery = queryField('findFirstCounter', {
  type: 'Counter',
  args: {
    where: 'CounterWhereInput',
    orderBy: list('CounterOrderByInput'),
    cursor: 'CounterWhereUniqueInput',
    distinct: 'CounterScalarFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.counter.findFirst({
      ...args,
      ...select,
    })
  },
})
