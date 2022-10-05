import t from 'tcomb'

const model = {
  numericPosition: t.maybe(t.Decimal),
  hasTRS: t.maybe(t.String),
  'rdf:type': t.maybe(t.list(t.String))
}

/**
 * Instant.
 */
class Instant {
  constructor () {
    return t.maybe(t.struct(model))
  }
}

export default Instant

// EOF
