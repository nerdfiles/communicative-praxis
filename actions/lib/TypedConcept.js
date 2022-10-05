import t from 'tcomb'
import { UsefulEnsemble } from './UsefulEnsemble'
import { UsefulNumber } from './UsefulNumber'

const Schema = {
  status: UsefulNumber(),
  itemtype: UsefulEnsemble()
}

/**
 * TypedConcept.
 */
class TypedConcept {
  constructor () {
    return t.maybe(t.struct(Schema))
  }
}

export default TypedConcept

// EOF
