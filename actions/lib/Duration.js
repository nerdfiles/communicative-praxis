import t from 'tcomb'

/**
 * Duration.
 */
class Duration {
  constructor () {
    return t.maybe(t.struct({
      numericDuration: t.maybe(t.Decimal),
      unitType: t.maybe(t.Date),
      'rdf:type': t.maybe(t.list(t.String))
    }))
  }
}

export default Duration

// EOF
