import { objectType } from 'nexus'

export const Counter = objectType({
  nonNullDefaults: {
    output: true,
    input: false,
  },
  name: 'Counter',
  definition(t) {
    t.string('id')
    t.string('name')
    t.bigint('value')
    t.field('createdAt', { type: 'DateTime' })
    t.field('updatedAt', { type: 'DateTime' })
  },
})
