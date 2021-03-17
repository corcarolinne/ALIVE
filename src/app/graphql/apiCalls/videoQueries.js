import { gql } from '@apollo/client'
import defaultClient from '../client'
import { normalizeVideos } from '../normalizers'

const VIDEO_PROPS = `
  id,
  title,
  uri,
  thumbnail,
  description,
  likes,
  dislikes,
  wasLiked,
  wasDisliked,
  views,
  createdAt,
  status,
  visibility,
  numberOfComments,
  uploadUri,
  channel {
    id,
    name,
    avatar,
    isFollowing
  }
`

export function getVideos({ client = defaultClient, searchString, offset = 0, limit = 10 }) {
  return client
    .query({
      variables: {
        searchString,
        offset,
        limit,
      },
      query: gql`
          query getVideos($searchString: String, $offset: Int, $limit: Int) {
            getVideos(searchString: $searchString, offset: $offset, limit: $limit) {
              ${VIDEO_PROPS}
            }
          }
        `,
    })
    .then(({ data }) => normalizeVideos(data.getVideos))
}

export function getTrendingVideos({ client = defaultClient, offset = 0, limit = 10 }) {
  return client
    .query({
      query: gql`
        {
          getTrendingVideos (offset: ${offset}, limit: ${limit}) {
            ${VIDEO_PROPS}
          }
        }
      `,
    })
    .then(({ data }) => normalizeVideos(data.getTrendingVideos))
}

export function getSubscriptionsVideos({ client = defaultClient, offset = 0, limit = 9 }) {
  return client
    .query({
      query: gql`
        {
          getRecentFromSubscriptions (offset: ${offset}, limit: ${limit}) {
            ${VIDEO_PROPS}
          }
        }
      `,
    })
    .then(({ data }) => normalizeVideos(data.getRecentFromSubscriptions))
}

export function getRecommendedVideos({ client = defaultClient, offset = 0, limit = 9 }) {
  return client
    .query({
      query: gql`
        {
          getRecommendedVideos(offset: ${offset}, limit: ${limit}) {
            ${VIDEO_PROPS}
          }
        }
      `,
    })
    .then(({ data }) => normalizeVideos(data.getRecommendedVideos))
}

export function getVideosByChannel({
  client = defaultClient,
  channelId,
  liveVideosOnly = true,
  offset = 0,
  limit = 9,
  orderBy = 'createdAt',
}) {
  return client
    .query({
      query: gql`
        {
          getVideosByChannel(channelId: "${channelId}", liveVideosOnly: ${liveVideosOnly}, offset: ${offset}, limit: ${limit}, orderBy: "${orderBy}") {
            ${VIDEO_PROPS}
          }
        }
      `,
    })
    .then(({ data }) => normalizeVideos(data.getVideosByChannel))
}

export function getVideoInfo({ client = defaultClient, videoId }) {
  return client
    .query({
      query: gql`
    {
      getVideo(id: "${videoId}") {
        ${VIDEO_PROPS}
      }
    }
  `,
    })
    .then(({ data }) => data.getVideo)
}

export function addView({ client = defaultClient, videoId }) {
  return client
    .mutate({
      mutation: gql`
    mutation {
      addView( videoId: "${videoId}")
    }
  `,
    })
    .then(({ data }) => data.addView)
}

export function addWatchTime({ client = defaultClient, videoId, watchTime }) {
  return client
    .mutate({
      variables: {
        videoId,
        watchTime,
      },
      mutation: gql`
        mutation addWatchTime($videoId: String!, $watchTime: Int!) {
          addWatchTime(videoId: $videoId, watchTime: $watchTime)
        }
      `,
    })
    .then(({ data }) => data.addView)
}

export function likeVideo({ client = defaultClient, videoId }) {
  return client
    .mutate({
      mutation: gql`
        mutation {
          likeVideo( videoId: "${videoId}")
        }
      `,
    })
    .then(({ data }) => data.likeVideo)
}

export function dislikeVideo({ client = defaultClient, videoId }) {
  return client
    .mutate({
      mutation: gql`
    mutation {
      dislikeVideo( videoId: "${videoId}")
    }
  `,
    })
    .then(({ data }) => data.dislikeVideo)
}

export function createVideo({ client = defaultClient, channelId, videoToUpload }) {
  return client
    .mutate({
      variables: {
        channelId,
        contentType: videoToUpload.type,
      },
      mutation: gql`
        mutation createVideo($channelId: String, $contentType: String!){
          createVideo( channelId: $channelId, contentType: $contentType) {
            ${VIDEO_PROPS}
          }
        }
      `,
    })
    .then(({ data: { createVideo: createdVideo } }) => ({ createdVideo, videoToUpload }))
}

export function uploadVideo({ uploadUri, videoToUpload }) {
  return new Promise((resolve, reject) => {
    const req = new XMLHttpRequest()
    req.open('PUT', uploadUri)
    req.setRequestHeader('Content-Type', videoToUpload.type)
    req.onload = () => {
      resolve(req.response)
    }
    req.onerror = () => {
      reject(req.response)
    }
    req.send(videoToUpload)
  })
}

export function updateVideo({ client = defaultClient, id, title, description, thumbnail, visibility = 'PUBLIC' }) {
  return client
    .mutate({
      variables: {
        id,
        title,
        description,
        thumbnail,
        visibility,
      },
      mutation: gql`
        mutation updateVideo(
          $id: String
          $title: String
          $description: String
          $thumbnail: String
          $visibility: String
        ) {
          updateVideo(
            id: $id
            title: $title
            visibility: $visibility
            thumbnail: $thumbnail
            description: $description
          ) {
            ${VIDEO_PROPS}
          }
        }
      `,
    })
    .then(({ data }) => data.updateVideo)
}
