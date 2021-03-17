import { gql } from '@apollo/client'
import defaultClient from '../client'

export function getComments({ client = defaultClient, videoId, commentId = '', offset = 0, limit = 10 }) {
  return client
    .query({
      query: gql`
    {
      getComments(videoId:"${videoId}", commentId:"${commentId}", offset: ${offset}, limit: ${limit}) {
        id,
        text,
        replies,
        likes,
        dislikes,
        videoId,
        commentId,
        wasLiked,
        wasDisliked,
        user {
          displayName,
          avatar,
          role
        }
      }
    }
  `,
    })
    .then(({ data }) => data.getComments)
}

export function getCommentsByChannel({ client = defaultClient, channelId, offset = 0, limit = 10 }) {
  return client
    .query({
      query: gql`
    {
      getCommentsByChannel(channelId:"${channelId}", offset: ${offset}, limit: ${limit}) {
        id,
        text,
        replies,
        likes,
        dislikes,
        videoId,
        commentId,
        wasLiked,
        wasDisliked,
        video {
          id
          title
          uri
          thumbnail
          views
          channel {
            id
            name
          }
        },
        user {
          displayName,
          avatar,
          role
        }
      }
    }
  `,
    })
    .then(({ data }) => data.getCommentsByChannel)
}

export function createComment({ client = defaultClient, videoId, commentId, text }) {
  return client
    .mutate({
      variables: {
        videoId,
        commentId,
        text,
      },
      mutation: gql`
        mutation createComment($videoId: String, $commentId: String, $text: String) {
          createComment(videoId: $videoId, commentId: $commentId, text: $text) {
            id
            text
            replies
            likes
            dislikes
            videoId
            commentId
            wasLiked
            wasDisliked
            user {
              displayName
              avatar
              role
            }
          }
        }
      `,
    })
    .then(({ data }) => data.createComment)
}

export function likeComment({ client = defaultClient, commentId }) {
  return client.mutate({
    variables: {
      commentId,
    },
    mutation: gql`
      mutation likeComment($commentId: String!) {
        likeComment(commentId: $commentId)
      }
    `,
  })
}

export function dislikeComment({ client = defaultClient, commentId }) {
  return client.mutate({
    variables: {
      commentId,
    },
    mutation: gql`
      mutation dislikeComment($commentId: String!) {
        dislikeComment(commentId: $commentId)
      }
    `,
  })
}
