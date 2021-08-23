import { mutationField, nonNull } from 'nexus'

export const CounterUpdateOneMutation = mutationField('updateOneCounter', {
  type: nonNull('Counter'),
  args: {
    where: nonNull('CounterWhereUniqueInput'),
    data: nonNull('CounterUpdateInput'),
  },
  resolve(_parent, { data, where }, { prisma, select }) {
    return prisma.counter.update({
      where,
      data,
      ...select,
    })
  },
})
