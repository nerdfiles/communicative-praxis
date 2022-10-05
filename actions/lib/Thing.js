import t from 'tcomb'
import { NeedfulString } from './NeedfulString'

const Schema = {
  subClassOf: NeedfulString()
}

/**
 * Thing.
 */
export const Thing = () => (Schema)

// EOF
