import t from 'tcomb'
import { NeedfulList } from './NeedfulList'

const Schema = {
  '@type': NeedfulList,
  status: t.Number
}

/**
 * TypedStatus.
 */
class TypedStatus {
  constructor () {
    return t.maybe(t.struct(Schema))
  }
}

export default TypedStatus

// EOF
