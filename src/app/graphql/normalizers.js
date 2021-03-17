import merge from 'lodash/merge'

// Video normalizers
export const normalizeVideos = (data) => {
  const videos = {}
  const elements = []

  data.forEach((video) => {
    videos[video.id] = video
    elements.push(video.id)
  })

  return {
    videos,
    elements,
  }
}

// Playlist normalizers
export const normalizePlaylist = (data) => {
  const { elements: videoIds, videos } = normalizeVideos(data.videos)

  return {
    playlist: {
      ...data,
      videos: videoIds,
    },
    videos,
  }
}

export const normalizePlaylists = (data) => {
  const elements = []
  const playlists = {}
  let videos = {}

  data.forEach((playlist) => {
    const { playlist: normalizedPlaylist, videos: playlistVideos } = normalizePlaylist(playlist)

    playlists[playlist.id] = normalizedPlaylist

    elements.push(playlist.id)
    videos = merge(videos, playlistVideos)
  })

  return {
    elements,
    playlists,
    videos,
  }
}
