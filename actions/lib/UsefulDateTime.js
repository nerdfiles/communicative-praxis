import t from 'tcomb'

const NovelDateTime = t.DateTime

const MaybeDateTime = t.maybe(NovelDateTime)

/**
 * UsefulDateTime.
 */
export const UsefulDateTime = () => (MaybeDateTime)

// EOF
