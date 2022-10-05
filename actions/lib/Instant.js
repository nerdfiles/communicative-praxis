import t from 'tcomb'

/**
 * Instant.
 */
class Instant {
  constructor () {
    return t.maybe(t.struct({
      numericPosition: t.maybe(t.Decimal),
      hasTRS: t.maybe(t.String),
      'rdf:type': t.maybe(t.list(t.String))
    }))
  }
}

export default Instant

// EOF
