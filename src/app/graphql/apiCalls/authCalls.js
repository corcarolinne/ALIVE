import { gql } from '@apollo/client'
import format from 'date-fns/format'
import defaultClient from '../client'

export function getUser({ client = defaultClient }) {
  return client
    .query({
      query: gql`
        {
          getUser {
            id
            email
            firstName
            surname
            gender
            displayName
            avatar
            paymentType
            role
            dob
          }
        }
      `,
    })
    .then(({ data }) => data.getUser)
}

export function login({ client = defaultClient, email, password }) {
  return client
    .query({
      variables: {
        email,
        password,
      },
      query: gql`
        query login($email: String, $password: String) {
          login(email: $email, password: $password) {
            token
            expiresIn
            refreshToken
            user {
              id
              email
              firstName
              surname
              gender
              displayName
              avatar
              paymentType
              role
              dob
            }
          }
        }
      `,
    })
    .then(({ data }) => {
      if (data.login.user == null) {
        // eslint-disable-next-line
        throw new Error('Invalid login or password')
      }
      return data.login
    })
}

export function renew({ client = defaultClient, refreshToken }) {
  return client
    .query({
      query: gql`
    {
      renew(refreshToken: "${refreshToken}") {
        token,
        expiresIn,
        refreshToken,
        user {
          id
          email
          firstName
          surname
          gender
          displayName
          avatar
          paymentType
          role
          dob
        } 
      }
    }
  `,
    })
    .then(({ data }) => {
      if (data.renew.user == null) {
        // eslint-disable-next-line
        throw new Error('Invalid login or password')
      }

      return data.renew
    })
}

export function signup({ client = defaultClient, email, password }) {
  return client
    .mutate({
      variables: {
        email,
        password,
      },
      mutation: gql`
        mutation signup($email: String, $password: String) {
          signup(email: $email, password: $password) {
            token
            refreshToken
            expiresIn
            user {
              id
              email
              firstName
              surname
              gender
              displayName
              paymentType
              role
              dob
            }
          }
        }
      `,
    })
    .then(({ data }) => data.signup)
}

export function updateProfile({ client = defaultClient, firstName, surname, displayName, dob, gender, avatar }) {
  return client.mutate({
    variables: {
      firstName,
      surname,
      displayName,
      dob: format(dob, 'yyyy-MM-dd'),
      gender,
      avatar,
    },
    mutation: gql`
      mutation updateProfile(
        $firstName: String
        $surname: String
        $displayName: String
        $gender: String
        $avatar: String
        $dob: Date
      ) {
        updateProfile(
          firstName: $firstName
          surname: $surname
          displayName: $displayName
          gender: $gender
          avatar: $avatar
          dob: $dob
        ) {
          id
          email
          firstName
          surname
          gender
          displayName
          paymentType
          role
          dob
        }
      }
    `,
  })
}

export function updatePayment({ client = defaultClient, paymentType }) {
  return client.mutate({
    variables: {
      paymentType,
    },
    mutation: gql`
      mutation updatePayment($paymentType: String) {
        updatePayment(paymentType: $paymentType) {
          paymentType
        }
      }
    `,
  })
}

export function createImage({ client = defaultClient, picture }) {
  return client.mutate({
    variables: { contentType: picture.type },
    mutation: gql`
      mutation createImageUrl($contentType: String!) {
        createImageUrl(contentType: $contentType)
      }
    `,
  })
}

export function uploadPicture({ uploadUri, picture }) {
  return new Promise((resolve, reject) => {
    const req = new XMLHttpRequest()
    req.open('PUT', uploadUri)
    req.setRequestHeader('x-amz-acl', 'public-read')
    req.setRequestHeader('Content-Type', picture.type)
    req.onload = () => {
      resolve(req.response)
    }
    req.onerror = () => {
      reject(req.response)
    }
    req.send(picture)
  })
}

export function logout({ client = defaultClient }) {
  return client.mutate({
    mutation: gql`
      mutation {
        logout(nothing: "")
      }
    `,
  })
}
