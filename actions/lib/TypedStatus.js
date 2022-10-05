import t from 'tcomb'

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

export default TypedStatus

// EOF
