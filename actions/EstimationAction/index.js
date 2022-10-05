/**
 * @name EstimationAction
 * @usage
 * const estimationAction = EstimationAction({
 *   name: 'est.1'
 * })
 */
import t from 'tcomb'
import HelpText from '../helpers/HelpText'

const helpText = new HelpText()

const LABEL = 'EstimationAction'

/**
 * Concept.
 */
class Concept {
  constructor () {
    return t.maybe(t.struct({
      itemtype: t.maybe(t.list(t.String))
    }))
  }
}

/**
 * TypedConcept.
 */
class TypedConcept {
  constructor () {
    return t.maybe(t.struct({
      status: t.maybe(t.Number),
      itemtype: t.maybe(t.list(t.String))
    }))
  }
}

/**
 * TypedStatus.
 */
class TypedStatus {
  constructor () {
    return t.maybe(t.struct({
      '@type': t.list(t.String),
      status: t.Number
    }))
  }
}

/**
 * Complex.
 */
class Complex {
  constructor () {
    return t.maybe(t.struct({
      '@type': t.list(t.String),
      name: t.String
    }))
  }
}

const VALUE_OBJECT = {
  '@type': new TypedStatus(),
  address: t.maybe(t.list(t.String)),
  additionalType: t.maybe(t.String),
  agent: new Complex(),
  alternateName: t.maybe(t.String),
  description: t.maybe(t.String),
  disambiguatingDescription: t.maybe(t.String),
  error: new TypedConcept(),
  endTime: t.maybe(t.DateTime),
  instrument: new Complex(),
  identifier: t.maybe(t.String),
  image: t.maybe(t.String),
  location: new Complex(),
  mainEntityOfPage: t.maybe(t.String),
  name: t.String,
  object: new Complex(),
  potentialAction: t.maybe(t.String),
  provider: new Concept(),
  participant: new Complex(),
  result: new TypedConcept(),
  sameAs: t.maybe(t.String),
  subjectOf: t.maybe(t.String),
  startTime: t.maybe(t.DateTime),
  tags: t.list(t.String),
  target: new Concept(),
  url: t.maybe(t.String)
}

const EstimationAction = t.struct(VALUE_OBJECT, LABEL)

helpText.addHelpText(EstimationAction, LABEL)

export default EstimationAction

// EOF
