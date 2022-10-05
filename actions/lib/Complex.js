import t from 'tcomb'

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

export default Complex

// EOF
