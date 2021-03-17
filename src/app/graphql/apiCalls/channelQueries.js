import { gql } from '@apollo/client'
import defaultClient from '../client'

export function getChannels({ client = defaultClient }) {
  return client
    .query({
      query: gql`
        {
          getChannels {
            id
            name
            description
            subscribers
            avatar

            youtube
            twitter
            facebook
            instagram
            mainVideo {
              id
              title
              uri
              thumbnail
              description
              wasLiked
              wasDisliked
            }
          }
        }
      `,
    })
    .then(({ data }) => data.getChannels)
  // .then(({ data }) => data.getVideos.reduce((acc, item) => ({ ...acc, [item.id]: item }), {}))
}

export function getChannel({ client = defaultClient, channelId = '' }) {
  return client
    .query({
      query: gql`
        {
          getChannel(id:"${channelId}") {
            mainVideo {
                id
                title,
                uri,
                thumbnail,
                description,
                wasLiked,
                wasDisliked
            },
            id,
            name,
            description,
            subscribers,
            avatar,
            isFollowing,

            youtube,
            twitter,
            facebook,
            instagram
          }
        }
      `,
    })
    .then(({ data }) => data.getChannel)
}

export function followChannel({ client = defaultClient, channelId }) {
  return client.mutate({
    variables: {
      channelId,
    },
    mutation: gql`
      mutation subscribeToChannel($channelId: String!) {
        subscribeToChannel(channelId: $channelId) {
          id
        }
      }
    `,
  })
}

export function unfollowChannel({ client = defaultClient, channelId }) {
  return client.mutate({
    variables: {
      channelId,
    },
    mutation: gql`
      mutation unsubscribeFromChannel($channelId: String!) {
        unsubscribeFromChannel(channelId: $channelId)
      }
    `,
  })
}

export function createChannel({ client = defaultClient, name, description, youtube, twitter, facebook, instagram, avatar }) {
  return client
    .mutate({
      variables: {
        name,
        description,
        youtube,
        twitter,
        facebook,
        instagram,
        avatar,
      },
      mutation: gql`
        mutation createChannel(
          $name: String!
          $description: String!
          $youtube: String
          $twitter: String
          $facebook: String
          $instagram: String
          $avatar: String
        ) {
          createChannel(
            name: $name
            description: $description
            youtube: $youtube
            twitter: $twitter
            facebook: $facebook
            instagram: $instagram
            avatar: $avatar
          ) {
            id
            name
            description
            subscribers
            avatar
            isFollowing

            youtube
            twitter
            facebook
            instagram
          }
        }
      `,
    })
    .then(({ data: { createChannel: createdChannel } }) => createdChannel)
}

export function updateChannel({
  client = defaultClient,
  id,
  name,
  description,
  youtube,
  twitter,
  facebook,
  instagram,
  avatar,
  mainVideoId,
}) {
  return client
    .mutate({
      variables: {
        id,
        name,
        description,
        youtube,
        twitter,
        facebook,
        instagram,
        avatar,
        mainVideoId,
      },
      mutation: gql`
        mutation updateChannel(
          $id: String!
          $name: String
          $description: String
          $youtube: String
          $twitter: String
          $facebook: String
          $instagram: String
          $avatar: String
          $mainVideoId: String
        ) {
          updateChannel(
            id: $id
            name: $name
            description: $description
            youtube: $youtube
            twitter: $twitter
            facebook: $facebook
            instagram: $instagram
            avatar: $avatar
            mainVideoId: $mainVideoId
          ) {
            id
            name
            description
            subscribers
            avatar
            isFollowing
            mainVideo {
              id
              title
              uri
              thumbnail
              description
              wasLiked
              wasDisliked
            }

            youtube
            twitter
            facebook
            instagram
          }
        }
      `,
    })
    .then(({ data: { updateChannel: updatedChannel } }) => updatedChannel)
}
