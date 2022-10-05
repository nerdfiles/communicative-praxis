import t from 'tcomb'
import { NeedfulList } from './NeedfulList'

const Schema = {
  '@type': NeedfulList(),
  name: t.String
}

/**
 * Complex.
 */
class Complex {
  constructor () {
    return t.maybe(t.struct(Schema))
  }
}

export default Complex

// EOF
