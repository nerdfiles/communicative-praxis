import t from 'tcomb'
import { UsefulEnsemble } from './UsefulEnsemble'

const Schema = {
  status: t.maybe(t.Number),
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
