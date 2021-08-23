import { mutationField, nonNull } from 'nexus'

export const CounterCreateOneMutation = mutationField('createCounter', {
  type: nonNull('Counter'),
  args: {
    data: nonNull('CounterCreateInput'),
  },
  resolve(_parent, { data }, { prisma, select }) {
    return prisma.counter.create({
      data,
      ...select,
    })
  },
})
