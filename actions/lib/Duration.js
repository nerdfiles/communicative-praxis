import t from 'tcomb'
import UsefulEnsemble from './UsefulEnsemble'

const Schema = {
  numericDuration: t.maybe(t.Decimal),
  unitType: t.maybe(t.Date),
  'rdf:type': UsefulEnsemble()
}

/**
 * Duration.
 */
class Duration {
  constructor () {
    return t.maybe(t.struct(Schema))
  }
}

export default Duration

// EOF
