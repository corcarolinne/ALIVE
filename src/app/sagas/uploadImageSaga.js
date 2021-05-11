import { put, takeEvery } from 'redux-saga/effects'
import api from '../graphql'
import modules from '../modules'

function* setImage(action) {
  const {
    args: { uploadType, imageUrl },
  } = action.payload

  if (uploadType === 'avatar_update') {
    yield put(modules.auth.actions.setUser({ avatar: imageUrl }))
  } else if (uploadType === 'video_thumbnail') {
    yield put(modules.studio.actions.setVideoBeingConfiguredThumbnail(imageUrl))
  } else if (uploadType === 'channel_avatar_update') {
    yield put(modules.studio.actions.setSelectedChannelAvatar(imageUrl))
  }
}

function* uploadPicture(action) {
  const {
    args: { picture, uploadType },
    data: {
      data: { createImageUrl: imageUrls },
    },
  } = action.payload

  const [uploadUrl, imageUrl] = imageUrls

  yield put(
    modules.connectivity.actions.requestApiCall(
      api.callNames.uploadPicture,
      { uploadUri: uploadUrl, picture, uploadType, imageUrl },
      modules.auth.actions.UPLOAD_IMAGE
    )
  )
}

function* uploadImageSaga() {
  yield takeEvery(modules.auth.actions.CREATE_IMAGE.SUCCEEDED, uploadPicture)
  yield takeEvery(modules.auth.actions.UPLOAD_IMAGE.SUCCEEDED, setImage)
}

export default uploadImageSaga
