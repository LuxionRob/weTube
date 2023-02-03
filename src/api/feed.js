import instance from './init'

const requiredParams = {
  part: 'id,snippet',
  type: 'video',
  regionCode: 'VI',
}

export const getNewVideos = (url, options = {}) =>
  instance.get(url, { params: { ...requiredParams, ...options } })
