import { put, select, takeEvery, call, delay } from 'redux-saga/effects'
import { push, LOCATION_CHANGE } from 'connected-react-router'
import jwtDecode from 'jwt-decode'
import api from '../graphql'
import modules from '../modules'

const pageRequiresAuthentication = (pathname) => !!['/view/', '/studio', '/manageAccount', '/subscriptions', '/becomeCreator'].find((page) => pathname.includes(page))

function* reAuth() {
  yield put(
    modules.connectivity.actions.requestApiCall(
      api.callNames.renew,
      {
        refreshToken: localStorage.getItem('refreshToken'),
      },
      modules.auth.actions.RENEW
    )
  )
}

function* waitReAuth({ payload }) {
  const user = payload?.data?.user || (yield select(modules.auth.selectors.getUser))

  if (!user.firstName || !user.surname || !user.displayName || !user.gender || !user.dob) {
    yield put(push('/login'))
    yield put(modules.auth.actions.setLoginTab(1))
    yield put(modules.auth.actions.setSignUpStep(1))
  } else if (!user.paymentType) {
    yield put(push('/login'))
    yield put(modules.auth.actions.setLoginTab(1))
    yield put(modules.auth.actions.setSignUpStep(2))
  } else {
    const expiresIn = yield select(modules.auth.selectors.getExpiresIn)
    yield delay(expiresIn * 15)
    yield call(reAuth)
  }
}

function* checkAuth(action) {
  // const user = yield select(modules.auth.selectors.getUser)
  const { payload } = action
  const previousLocations = yield select(modules.router.selectors.getPreviousLocations)
  const isUserCommingback = previousLocations.length === 1 && localStorage.getItem('refreshToken')

  if (isUserCommingback) {
    const decodedToken = jwtDecode(localStorage.getItem('authToken'))

    if (decodedToken.exp < (new Date().getTime() + 1) / 1000) {
      yield call(reAuth)
    } else {
      yield put(modules.connectivity.actions.requestApiCall(api.callNames.getUser, {}, modules.auth.actions.GET_USER))
      yield takeEvery(modules.auth.actions.GET_USER.SUCCEEDED, waitReAuth)
    }
  }
  if (pageRequiresAuthentication(payload.location.pathname)) {
    if (!localStorage.getItem('authToken')) {
      yield put(push('/login'))
    }
    // TODO: that's not working (if user is on free plan offer change of payment if video requires payment)
    // else if (!user.paymentType || user.paymentType === 'free') {
    //   yield put(push('/login'))
    //   yield put(modules.auth.actions.setLoginTab(1))
    //   yield put(modules.auth.actions.setSignUpStep(2))
    // }
  }
}

function* completeLogin(action) {
  const previousPathName = yield select(modules.router.selectors.getPreviousPathName)
  const location = yield select(modules.router.selectors.getLocation)
  const {
    data: { user },
  } = action.payload

  if (!user.firstName || !user.surname || !user.displayName || !user.gender || !user.dob) {
    yield put(modules.auth.actions.setLoginTab(1))
    yield put(modules.auth.actions.setSignUpStep(1))
  } else if (!user.paymentType) {
    yield put(modules.auth.actions.setLoginTab(1))
    yield put(modules.auth.actions.setSignUpStep(2))
  } else {
    yield put(push(location?.state || previousPathName))
    yield call(waitReAuth, action)
  }
}

function clearStorage() {
  // localStorage.removeItem('authToken')
  // localStorage.removeItem('refreshToken')
  localStorage.clear()
  // eslint-disable-next-line
  location.reload()
}

function* authenticationSaga() {
  yield takeEvery(LOCATION_CHANGE, checkAuth)
  yield takeEvery(modules.auth.actions.LOGIN.SUCCEEDED, completeLogin)
  yield takeEvery(modules.auth.actions.RENEW.SUCCEEDED, waitReAuth)
  yield takeEvery(
    [
      modules.auth.actions.RENEW.FAILED, //
      modules.auth.actions.GET_USER.FAILED,
      modules.auth.actions.LOGOUT.SUCCEEDED,
    ],
    clearStorage
  )
}

export default authenticationSaga
