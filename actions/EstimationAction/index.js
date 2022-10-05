/**
 * @name EstimationAction
 * @description # EstimationAction
 * @usage
 * const estimationAction = (new?) EstimationAction({
 *   name: 'est.1'
 * })
 */

// ## includes

import t from 'tcomb'
import HelpText from '../helpers/HelpText'
import Complex from '../lib/Complex'
import Concept from '../lib/Concept'
import TypedConcept from '../lib/TypedConcept'
import TypedStatus from '../lib/TypedStatus'
import { NeedfulList } from '../lib/NeedfulList'
import { NeedfulString } from '../lib/NeedfulString'
import { UsefulString } from '../lib/UsefulString'
import { UsefulEnsemble } from '../lib/UsefulEnsemble'
import { UsefulDateTime } from '../lib/UsefulDateTime'

// ## tools

const helpText = new HelpText()

// ## constants

const LABEL = 'EstimationAction'

// ## program

const ActionSchema = {
  '@type': new TypedStatus(),
  name: NeedfulString(),
  tags: NeedfulList(),
  address: UsefulEnsemble(),
  additionalType: UsefulString(),
  agent: new Complex(),
  alternateName: UsefulString(),
  description: UsefulString(),
  disambiguatingDescription: UsefulString(),
  error: new TypedConcept(),
  endTime: UsefulDateTime(),
  instrument: new Complex(),
  identifier: UsefulString(),
  image: UsefulString(),
  location: new Complex(),
  mainEntityOfPage: UsefulString(),
  object: new Complex(),
  potentialAction: UsefulString(),
  provider: new Concept(),
  participant: new Complex(),
  result: new TypedConcept(),
  sameAs: UsefulString(),
  subjectOf: UsefulString(),
  startTime: UsefulDateTime(),
  target: new Concept(),
  url: UsefulString()
}

const EstimationAction = t.struct(ActionSchema, LABEL)

helpText.addHelpText(EstimationAction, LABEL)

// ## try

export default EstimationAction

// EOF
