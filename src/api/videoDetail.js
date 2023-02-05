import instance from './init'

export const getVideoDetail = (params) =>
  instance.get('videos', { params: { part: 'contentDetails,snippet,statistics', ...params } })

export const getSuggestedVideos = (params) =>
  instance.get('search', { params: { part: 'id,snippet', type: 'video', ...params } })
