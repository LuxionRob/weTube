import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Stack, Box, Typography } from '@mui/material'
import { CheckCircle, ThumbUpAlt } from '@mui/icons-material'
import ReactPlayer from 'react-player/youtube'
import { Videos } from '../../components'
import { getVideoDetail, getSuggestedVideos } from '../../api/videoDetail'
import { numberWithDot } from '../../utils'
import './style.scss'

const VideoDetail = () => {
  const { id } = useParams()
  const [videoDetail, setVideoDetail] = useState({})
  const [suggestedVideos, setSuggestedVideos] = useState([])

  const fetchVideoDetail = async () => {
    try {
      const { data } = await getVideoDetail({ id })
      setVideoDetail(data.items[0])
    } catch (error) {
      console.error(error)
    }
  }
  const fetchSuggestedVideos = async () => {
    try {
      const { data } = await getSuggestedVideos({ relatedToVideoId: id })
      setSuggestedVideos(data.items)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    fetchVideoDetail()
    fetchSuggestedVideos()
  }, [id])

  return (
    <Box px={8}>
      <Stack id="video-detail-page">
        <Box position="sticky" top="10.6rem" width="100%">
          <ReactPlayer
            url={`https://www.youtube.com/watch?v=${id}&autoplay=1`}
            controls
            className="player"
          />
          <Typography color="#eee" variant="h4" fontWeight="bold" p={2}>
            {videoDetail?.snippet?.title}
          </Typography>
          <Stack direction="row" px={4} py={1} justifyContent="space-between">
            <Link to={`/channel/${videoDetail?.snippet?.channelId}`} className="channel-name">
              {videoDetail?.snippet?.channelTitle}
              <CheckCircle className="channel-icon" />
            </Link>
            <Stack direction="row" justifyContent="space-between">
              <Stack direction="row" alignItems="center" ml={8} justifyContent="space-between">
                <Typography variant="body1" opacity={0.7} color="#eee" fontSize="1.6rem" mr={4}>
                  {numberWithDot(parseInt(videoDetail?.statistics?.viewCount))} views
                </Typography>
                <ThumbUpAlt className="like-icon" />
                <Typography variant="body1" color="#eeed" align="center" fontSize="1.6rem" ml={1}>
                  {numberWithDot(parseInt(videoDetail?.statistics?.viewCount))}
                </Typography>
              </Stack>
            </Stack>
          </Stack>
        </Box>
        <Stack direction="column" className="suggest-video-list">
          {suggestedVideos && <Videos videos={suggestedVideos} direction="column" />}
        </Stack>
      </Stack>
    </Box>
  )
}

export default VideoDetail
