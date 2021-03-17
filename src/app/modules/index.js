import { combineReducers } from 'redux'
import * as connectivity from './connectivity'
import * as auth from './auth'
import * as router from './router'

export default {
  connectivity,
  auth,
  router,
}

export const createRootReducer = (history) =>
  combineReducers({
    connectivity: connectivity.reducers.reducer,
    auth: auth.reducers.reducer,
    router: router.reducers.reducer(history),
  })
