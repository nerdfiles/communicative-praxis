import t from 'tcomb'

const Schema = {
  numericPosition: t.maybe(t.Decimal),
  hasTRS: t.maybe(t.String),
  'rdf:type': t.maybe(t.list(t.String))
}

/**
 * Instant.
 */
class Instant {
  constructor () {
    return t.maybe(t.struct(Schema))
  }
}

export default Instant

// EOF
