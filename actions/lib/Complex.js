import t from 'tcomb'
import { NeedfulList } from './NeedfulList'
import { NeedfulString } from './NeedfulString'

const Schema = {
  '@type': NeedfulList(),
  name: NeedfulString()
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
