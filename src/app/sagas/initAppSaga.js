import { put, select, takeEvery } from 'redux-saga/effects'
import { LOCATION_CHANGE } from 'connected-react-router'
import modules from '../modules'
import api from '../graphql'

function* loadVideos() {
  yield put(
    modules.connectivity.actions.requestApiCall(api.callNames.getTrendingVideos, {}, modules.video.actions.GET_TRENDING_VIDEOS)
  )
}

function* watchLocationToSetIsPlayerOpen({ payload }) {
  const previousPathName = yield select(modules.router.selectors.getPreviousPathName)

  if (payload.location.pathname.includes('/view/')) {
    const location = yield select(modules.router.selectors.getLocation)
    const videoId = location.pathname.replace('/view/', '')
    const playlistId = location?.query?.playlist
    if (playlistId) {
      yield put(
        modules.connectivity.actions.requestApiCall(
          api.callNames.getPlaylistVideos, //
          { playlistId, limit: 30 },
          modules.playlist.actions.GET_CURRENT_PLAYLIST_VIDEOS
        )
      )
    }
    yield put(
      modules.connectivity.actions.requestApiCall(
        api.callNames.getVideoInfo, //
        { videoId },
        modules.video.actions.GET_VIDEO_INFO
      )
    )
    yield put(modules.player.actions.openViewPlayer(videoId))
    yield put(modules.video.actions.selectVideo(videoId))
  } else if (previousPathName !== '/') {
    yield put(modules.player.actions.closeViewPlayer())
    yield put(modules.video.actions.selectVideo(null))
  }
}

function* initAppSaga() {
  yield loadVideos()
  yield takeEvery(LOCATION_CHANGE, watchLocationToSetIsPlayerOpen)
}

export default initAppSaga
