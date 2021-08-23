import { mutationField, nonNull } from 'nexus'

export const CounterDeleteManyMutation = mutationField('deleteManyCounter', {
  type: nonNull('BatchPayload'),
  args: {
    where: 'CounterWhereInput',
  },
  resolve: async (_parent, { where }, { prisma }) => {
    return prisma.counter.deleteMany({ where } as any)
  },
})
