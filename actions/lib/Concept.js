// @see http://id.nlm.nih.gov/mesh/vocab#Concept
import t from 'tcomb'
import { UsefulString } from './UsefulString'
import Ensemble from './Ensemble'
import Thing from './Thing'

const Schema = {
  disjointWith: Ensemble(),
  itemtype: Ensemble(),
  subClassOf: Thing(),
  label: UsefulString(),
  comment: UsefulString(),
  description: UsefulString()
}

/**
 * Concept.
 */
class Concept {
  constructor () {
    return t.maybe(t.struct(Schema))
  }
}

export default Concept

// EOF
