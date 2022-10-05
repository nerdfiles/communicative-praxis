import t from 'tcomb'
import { NeedfulNumber } from './NeedfulNumber'

const MaybeNumber = t.maybe(NeedfulNumber)

/**
 * UsefulNumber.
 */
export const UsefulNumber = () => (MaybeNumber)

// EOF
