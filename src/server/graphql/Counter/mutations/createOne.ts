import { mutationField, nonNull } from 'nexus'

export const CounterCreateOneMutation = mutationField('createOneCounter', {
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
