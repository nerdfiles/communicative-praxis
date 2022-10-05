/**
 * @name EstimationAction
 * @usage
 * const user = EstimationAction({
 *   name: 'Houston'
 * })
 */
import t from 'tcomb'
import HelpText from '../helpers/HelpText'

const helpText = new HelpText()

const CONCEPT_NAME = 'EstimationAction'

const concept = {
  '@type': t.maybe(t.list(t.String)),
  actionStatus: t.maybe(t.struct({
    itemtype: t.maybe(t.list(t.String)),
    status: t.Number
  })),
  address: t.maybe(t.list(t.String)),
  additionalType: t.maybe(t.String),
  agent: t.maybe(t.struct({
    '@type': t.list(t.String),
    name: t.String
  })),
  alternateName: t.maybe(t.String),
  description: t.maybe(t.String),
  disambiguatingDescription: t.maybe(t.String),
  error: t.maybe(t.struct({
    status: t.maybe(t.Number),
    itemtype: t.maybe(t.list(t.String))
  })),
  endTime: t.maybe(t.DateTime),
  instrument: t.maybe(t.struct({
    '@type': t.list(t.String),
    name: t.String
  })),
  identifier: t.maybe(t.String),
  image: t.maybe(t.String),
  location: t.maybe(t.struct({
    '@type': t.list(t.String),
    name: t.String
  })),
  mainEntityOfPage: t.maybe(t.String),
  name: t.String,
  object: t.maybe(t.struct({
    '@type': t.list(t.String),
    name: t.String
  })),
  potentialAction: t.maybe(t.String),
  provider: t.maybe(t.struct({
    itemtype: t.maybe(t.list(t.String))
  })),
  participant: t.maybe(t.struct({
    '@type': t.list(t.String),
    name: t.String
  })),
  result: t.maybe(t.struct({
    itemtype: t.maybe(t.list(t.String))
  })),
  sameAs: t.maybe(t.String),
  subjectOf: t.maybe(t.String),
  startTime: t.maybe(t.DateTime),
  tags: t.list(t.String),
  target: t.maybe(t.struct({
    itemtype: t.maybe(t.list(t.String))
  })),
  url: t.maybe(t.String)
}

const EstimationAction = t.struct(concept, CONCEPT_NAME)

helpText.addHelpText(EstimationAction, CONCEPT_NAME)

export default EstimationAction

// EOF
