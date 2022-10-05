import t from 'tcomb'
import { UsefulEnsemble } from './UsefulEnsemble'
import { UsefulString } from './UsefulString'

const Schema = {
  numericPosition: t.maybe(t.Decimal),
  hasTRS: UsefulString(),
  'rdf:type': UsefulEnsemble()
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
