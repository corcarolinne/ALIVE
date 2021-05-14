export function getData() {
  return fetch('https://immense-castle-69184.herokuapp.com/users')
    .then((response) => response.json())
    .then((data) => {
      const a = data.rows.map((item) => ({
        id: item.user_id,
        firstName: item.firstname,
        surname: item.surname,
        displayName: item.displayname,
        password: item.password,
        dob: item.dob,
        avatar: item.avatar,
        bio: item.bio,
        following: item.following,
        live: {
          uri: item.live_uri,
          image: item.live_image,
        },
        obs_config: {
          rmrpLink: item.obs_config_rmrplink,
          streamKey: item.obs_config_streamkey,
        },
      }))
      return a
    })
}

export function followUser({ userId, userToFollow }) {
  return fetch(`https://immense-castle-69184.herokuapp.com/follow/${userId}/${userToFollow}`, {
    method: 'post',
    // body: JSON.stringify(opts)
  })
}

export function unfollowUser({ userId, userToUnfollow }) {
  return fetch(`https://immense-castle-69184.herokuapp.com/unfollow/${userId}/${userToUnfollow}`, {
    method: 'post',
    // body: JSON.stringify(opts)
  })
}

export function createUser({ registerValues }) {
  return fetch('https://immense-castle-69184.herokuapp.com/create-user', {
    method: 'post',
    body: JSON.stringify(registerValues),
  })
}

export function updateUser({ user }) {
  return fetch(`https://immense-castle-69184.herokuapp.com/update-user/${user.id}`, {
    method: 'post',
    body: JSON.stringify(user),
  })
}
