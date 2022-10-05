import t from 'tcomb'

const model = {
  numericDuration: t.maybe(t.Decimal),
  unitType: t.maybe(t.Date),
  'rdf:type': t.maybe(t.list(t.String))
}

/**
 * Duration.
 */
class Duration {
  constructor () {
    return t.maybe(t.struct(model))
  }
}

export default Duration

// EOF
