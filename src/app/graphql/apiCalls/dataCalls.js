// import data from './data'

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
