import { gql } from '@apollo/client'
import defaultClient from '../client'
import { normalizePlaylists, normalizePlaylist } from '../normalizers'

export function getPlaylists({ client = defaultClient, channelId, offset = 0, limit = 5, videoLimit = 6 }) {
  return client
    .query({
      variables: {
        channelId,
        offset,
        limit,
        videoLimit,
      },
      query: gql`
        query getPlaylists($channelId: String, $offset: Int, $limit: Int, $videoLimit: Int) {
          getPlaylists(channelId: $channelId, offset: $offset, limit: $limit, videoLimit: $videoLimit) {
            id
            title
            description
            numberOfVideos
            videos {
              id
              title
              uri
              thumbnail
              description
              channel {
                id
                name
                avatar
                isFollowing
              }
            }
          }
        }
      `,
    })
    .then(({ data }) => normalizePlaylists(data.getPlaylists))
}

export function getPlaylistVideos({ client = defaultClient, playlistId, offset = 0, limit = 6 }) {
  return client
    .query({
      query: gql`
        {
          getVideosByPlaylist(channelPlaylistId: "${playlistId}", offset: ${offset}, limit: ${limit}) {
            id
            title
            description
            numberOfVideos
            videos {
              id,
              title,
              uri,
              thumbnail,
              description,
              channel {
                id,
                name,
                avatar,
                isFollowing
              }
            }
          }
        }
      `,
    })
    .then(({ data }) => normalizePlaylist(data.getVideosByPlaylist))
}

// Mutations

export function createChannelPlaylist({ client = defaultClient, channelId, title, videos }) {
  return client
    .mutate({
      variables: {
        channelId,
        title,
        videoIds: videos,
      },
      mutation: gql`
        mutation createChannelPlaylist($channelId: String!, $title: String!, $videoIds: [String]) {
          createChannelPlaylist(channelId: $channelId, title: $title, videoIds: $videoIds) {
            id
            title
            description
            numberOfVideos
            videos {
              id
              title
              uri
              thumbnail
              description
              channel {
                id
                name
                avatar
                isFollowing
              }
            }
          }
        }
      `,
    })
    .then(({ data }) => normalizePlaylist(data.createChannelPlaylist))
}

export function updateChannelPlaylist({ client = defaultClient, id, title, description, videos }) {
  return client
    .mutate({
      variables: {
        id,
        title,
        description,
        videoIds: videos,
      },
      mutation: gql`
        mutation updateChannelPlaylist($id: String!, $title: String, $description: String, $videoIds: [String]) {
          updateChannelPlaylist(id: $id, title: $title, description: $description, videoIds: $videoIds) {
            id
            title
            description
            numberOfVideos
            videos {
              id
              title
              uri
              thumbnail
              description
              channel {
                id
                name
                avatar
                isFollowing
              }
            }
          }
        }
      `,
    })
    .then(({ data }) => normalizePlaylist(data.updateChannelPlaylist))
}
