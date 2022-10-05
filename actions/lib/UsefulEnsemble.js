import t from 'tcomb'
import { NeedfulString } from './NeedfulString'

const UnorderedStrings = t.list(NeedfulString)

const MaybeStrings = t.maybe(UnorderedStrings)

/**
 * Ensemble.
 */
export const Ensemble = () => (MaybeStrings)

// EOF
