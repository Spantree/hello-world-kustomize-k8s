import { omitBy, pickBy } from 'lodash'
import { objectType, queryField } from 'nexus'

export const SystemInfo = objectType({
  name: 'SystemInfo',
  definition: (t) => {
    t.string('databaseType')
    t.string('greeting')
    t.field('env', { type: 'Json' })
  },
})

const secretsPattern = new RegExp('(^|[_-]+)(pass|secret)', 'i')

const getSantitizedEnvVars = () => omitBy(process.env, (_value, key) => secretsPattern.test(key))

export const SystemInfoQuery = queryField('systemInfo', {
  type: 'SystemInfo',
  resolve: () => {
    const { DATABASE_TYPE, GREETING } = process.env
    return {
      databaseType: DATABASE_TYPE ?? 'Mysterious',
      greeting: GREETING ?? 'Hello world!',
      env: getSantitizedEnvVars(),
    }
  },
})
