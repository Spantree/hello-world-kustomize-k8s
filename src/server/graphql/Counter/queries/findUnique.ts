import { queryField, nonNull } from 'nexus'

export const CounterFindUniqueQuery = queryField('findUniqueCounter', {
  type: 'Counter',
  args: {
    where: nonNull('CounterWhereUniqueInput'),
  },
  resolve(_parent, { where }, { prisma, select }) {
    return prisma.counter.findUnique({
      where,
      ...select,
    })
  },
})
