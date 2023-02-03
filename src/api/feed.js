import instance from './init'

const requiredParams = {
  part: 'id,snippet',
}

export const getVideos = (options = {}) =>
  instance.get('search', { params: { ...requiredParams, ...options } })
