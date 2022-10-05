import t from 'tcomb'
import { NeedfulList } from './NeedfulList'
import { NeedfulNumber } from './NeedfulNumber'

const Schema = {
  '@type': NeedfulList(),
  status: NeedfulNumber()
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
