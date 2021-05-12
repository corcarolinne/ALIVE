import tail from 'lodash/tail'

export const getMainLive = (state) => state.home.lives[0]
export const getLives = (state) => tail(state.home.lives)
