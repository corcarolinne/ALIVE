import { gql } from '@apollo/client'
import defaultClient from '../client'

export function checkAlphaKey({ client = defaultClient, alphaKey }) {
  return client
    .query({
      variables: { alphaKey },
      query: gql`
        query CheckAlphaKeyQuery($alphaKey: String) {
          checkAlphaKey(alphaKey: $alphaKey)
        }
      `
    })
}

export function bindAlphaKeyToUser({ client = defaultClient, key, userId }) {
  return client
    .query({
      variables: { key, userId },
      query: gql`
        mutation BindAlphaKeyToUserMutation($key: String!, $userId: String!) {
          bindAlphaKeyToUser(key:$key, userId:$userId)
        }
      `
    })
}
