import { mutationField, nonNull } from 'nexus'

export const CounterDeleteOneMutation = mutationField('deleteOneCounter', {
  type: 'Counter',
  args: {
    where: nonNull('CounterWhereUniqueInput'),
  },
  resolve: async (_parent, { where }, { prisma, select }) => {
    return prisma.counter.delete({
      where,
      ...select,
    })
  },
})
