import { type SchemaTypeDefinition } from 'sanity'

import pageInfo from './schemas/pageInfo'
import experience from './schemas/experience'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [pageInfo, experience],
}
