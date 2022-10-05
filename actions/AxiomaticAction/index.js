/**
 * @name AxiomaticAction
 * @usage
 * const estimationAction = AxiomaticAction({
 *   name: 'est.1'
 * })
 */
import t from 'tcomb'
import HelpText from '../helpers/HelpText'

const helpText = new HelpText()

const LABEL = 'AxiomaticAction'

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

const GeneralDateTimeDescription = () => ({
  year: t.Date
})

const TemporalEntity = () => ({
  after: t.maybe(TemporalEntity()),
  before: t.maybe(TemporalEntity()),
  hasBeginning: t.maybe(t.list(new Instant())),
  hasDuration: t.maybe(t.list(new Duration())),
  hasEnd: t.maybe(t.list(new Instant()))
})

const VALUE_OBJECT = {
  '@type': new TypedStatus(),
  address: t.maybe(t.list(t.String)),
  additionalType: t.maybe(t.String),
  agent: new Complex(),
  alternateName: t.maybe(t.String),
  description: t.maybe(t.String),
  disambiguatingDescription: t.maybe(t.String),
  error: new TypedConcept(),
  instrument: new Complex(),
  'time:intervalContains': TemporalEntity(),
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
  tags: t.list(t.String),
  target: new Concept(),
  url: t.maybe(t.String)
}

const AxiomaticAction = t.struct(VALUE_OBJECT, LABEL)

helpText.addHelpText(AxiomaticAction, LABEL)

export default AxiomaticAction

// EOF
