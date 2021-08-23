import { mutationField, nonNull } from 'nexus'

export const CounterUpdateManyMutation = mutationField('updateCounters', {
  type: nonNull('BatchPayload'),
  args: {
    where: 'CounterWhereInput',
    data: nonNull('CounterUpdateManyMutationInput'),
  },
  resolve(_parent, args, { prisma }) {
    return prisma.counter.updateMany(args as any)
  },
})
