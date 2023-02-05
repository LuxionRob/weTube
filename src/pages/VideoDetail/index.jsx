import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Stack, Box, Typography } from '@mui/material'
import { CheckCircle, ThumbUpAlt } from '@mui/icons-material'
import ReactPlayer from 'react-player/youtube'
import { Videos, Loading } from '../../components'
import { getVideoDetail, getSuggestedVideos } from '../../api/videoDetail'
import { numberWithDot } from '../../utils'
import './style.scss'

import {
  demoChannelUrl,
  demoVideoUrl,
  demoChannelTitle,
  demoVideoTitle,
} from '../../utils/constant.js'

const VideoDetail = () => {
  const [videoDetail, setVideoDetail] = useState({})
  const [suggestedVideos, setSuggestedVideos] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const { id } = useParams()

  const fetchVideoDetail = async () => {
    try {
      setIsLoading(true)
      const { data } = await getVideoDetail({ id })
      setVideoDetail(data.items[0])
      setIsLoading(false)
    } catch (error) {
      setIsLoading(false)
      console.error(error)
    }
  }

  const fetchSuggestedVideos = async () => {
    try {
      setIsLoading(true)
      const { data } = await getSuggestedVideos({ relatedToVideoId: id })
      setSuggestedVideos(data.items)
      setIsLoading(false)
    } catch (error) {
      setIsLoading(false)
      console.error(error)
    }
  }

  useEffect(() => {
    fetchVideoDetail()
    fetchSuggestedVideos()
  }, [id])

  return isLoading ? (
    <Loading />
  ) : (
    <Box id="video-detail-page">
      <Stack className="container">
        <Box className="player-container">
          <ReactPlayer
            url={`https://www.youtube.com/watch?v=${id}&autoplay=1`}
            controls
            className="player"
          />
          <Typography color="#eee" variant="h4" fontWeight="bold" p={2}>
            {videoDetail?.snippet?.title || demoVideoTitle}
          </Typography>
          <Stack direction="row" px={4} py={1} justifyContent="space-between">
            <Link
              to={
                videoDetail?.snippet?.channelId
                  ? `/channel/${videoDetail?.snippet?.channelId}`
                  : demoChannelUrl
              }
              className="channel-name"
            >
              {videoDetail?.snippet?.channelTitle || demoChannelTitle}
              <CheckCircle className="channel-icon" />
            </Link>
            <Stack direction="row" justifyContent="space-between">
              <Stack direction="row" alignItems="center" ml={8} justifyContent="space-between">
                <Typography variant="body1" opacity={0.7} color="#eee" fontSize="1.6rem" mr={4}>
                  {numberWithDot(parseInt(videoDetail?.statistics?.viewCount || 10000))} views
                </Typography>
                <ThumbUpAlt className="like-icon" />
                <Typography variant="body1" color="#eeed" align="center" fontSize="1.6rem" ml={1}>
                  {numberWithDot(parseInt(videoDetail?.statistics?.viewCount || 1000))}
                </Typography>
              </Stack>
            </Stack>
          </Stack>
        </Box>
        <Stack direction="column" className="suggest-video-list">
          {suggestedVideos.length > 0 ? (
            <Videos videos={suggestedVideos} direction="column" />
          ) : (
            <Videos videos={[2, 3, 4, 5, 6, 7]} direction="column" />
          )}
        </Stack>
      </Stack>
    </Box>
  )
}

export default VideoDetail
