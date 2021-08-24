import { UserInputError } from 'apollo-server-micro'
import { mutationField, nonNull, nullable, stringArg } from 'nexus'

export const IncrementCounterMutation = mutationField('incrementCounter', {
  type: nullable('Counter'),
  args: {
    id: nonNull(stringArg()),
  },
  resolve: async (_parent, { id }, { prisma, select }) => {
    const existing = await prisma.counter.findUnique({
      where: { id },
      select: { value: true },
    })
    if (!existing) {
      throw new UserInputError(`Could not find Counter with id ${id}`)
    }
    const { value } = existing
    const updated = await prisma.counter.update({ where: { id }, data: { value: value + 1n }, ...select })
    return updated
  },
})
