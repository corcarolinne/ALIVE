import { put, takeEvery } from 'redux-saga/effects'
import api from '../graphql'
import modules from '../modules'

function* uploadVideo(action) {
  const { createdVideo, videoToUpload } = action.payload.data
  yield put(
    modules.connectivity.actions.requestApiCall(
      api.callNames.uploadVideo,
      { uploadUri: createdVideo.uploadUri, videoToUpload },
      modules.studio.actions.UPLOAD_VIDEO
    )
  )
}

function* watchCallRequests() {
  yield takeEvery(modules.studio.actions.CREATE_VIDEO.SUCCEEDED, uploadVideo)
}

// single entry point to start all Sagas at once
function* connectivitySaga() {
  yield watchCallRequests()
}

export default connectivitySaga
