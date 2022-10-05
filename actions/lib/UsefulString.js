import t from 'tcomb'
import { NeedfulString } from './NeedfulString'

const MaybeString = t.maybe(NeedfulString)

/**
 * UsefulString.
 */
export const UsefulString = () => (MaybeString)

// EOF
