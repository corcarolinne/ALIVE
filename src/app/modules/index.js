import { combineReducers } from 'redux'
import * as connectivity from './connectivity'
import * as auth from './auth'
import * as router from './router'
import * as home from './home'
import * as following from './following'

export default {
  connectivity,
  auth,
  router,
  home,
  following,
}

export const createRootReducer = (history) =>
  combineReducers({
    connectivity: connectivity.reducers.reducer,
    auth: auth.reducers.reducer,
    router: router.reducers.reducer(history),
    home: home.reducers.reducer,
    following: following.reducers.reducer,
  })
