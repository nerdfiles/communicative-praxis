import t from 'tcomb'
import { NeedfulString } from './NeedfulString'

/**
 * NeedfulList.
 */
export const NeedfulList = () => (t.list(NeedfulString()))

// EOF
