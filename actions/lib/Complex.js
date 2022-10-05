import t from 'tcomb'

const Schema = {
  '@type': t.list(t.String),
  name: t.String
}

/**
 * Complex.
 */
class Complex {
  constructor () {
    return t.maybe(t.struct(Schema))
  }
}

export default Complex

// EOF
