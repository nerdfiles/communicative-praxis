import t from 'tcomb'
export const Ensemble = () => (t.maybe(t.list(t.String)))
