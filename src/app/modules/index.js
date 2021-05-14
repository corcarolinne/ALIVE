import { combineReducers } from 'redux'
import * as connectivity from './connectivity'
import * as state from './state'
import * as router from './router'

export default {
  connectivity,
  state,
  router,
}

export const createRootReducer = (history) =>
  combineReducers({
    connectivity: connectivity.reducers.reducer,
    state: state.reducers.reducer,
    router: router.reducers.reducer(history),
  })
