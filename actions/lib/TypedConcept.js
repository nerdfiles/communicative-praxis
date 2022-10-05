import t from 'tcomb'

const Schema = {
  status: t.maybe(t.Number),
  itemtype: t.maybe(t.list(t.String))
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
