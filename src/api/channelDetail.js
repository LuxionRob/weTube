import instance from './init'

export const getChannelDetail = (params) =>
  instance.get('channels', { params: { part: 'snippet,statistics', ...params } })

export const getChannelVideo = (params) =>
  instance.get('search', { params: { part: 'snippet,id', ...params } })
