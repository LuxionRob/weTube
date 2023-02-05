import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Box, Stack, CardMedia, Typography } from '@mui/material'
import { CheckCircle } from '@mui/icons-material'
import { Videos, Loading } from '../../components'
import { numberWithDot } from '../../utils'
import { getChannelDetail, getChannelVideo } from '../../api/channelDetail'
import './style.scss'

const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState({})
  const [channelVideo, setChannelVideo] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const { id } = useParams()

  const fetchChannelDetail = async () => {
    try {
      setIsLoading(true)
      const { data } = await getChannelDetail({ id })
      setChannelDetail(data.items[0])
      setIsLoading(false)
    } catch (error) {
      setIsLoading(false)
      console.error(error)
    }
  }
  const fetchChannelVideo = async () => {
    try {
      setIsLoading(true)
      const { data } = await getChannelVideo({ channelId: id })
      setChannelVideo(data.items)
      setIsLoading(false)
    } catch (error) {
      setIsLoading(false)
      console.error(error)
    }
  }
  useEffect(() => {
    fetchChannelDetail()
    fetchChannelVideo()
  }, [id])

  return isLoading ? (
    <Loading />
  ) : (
    <Stack id="channel-page">
      <Box className="channel">
        <div className="channel-banner" />
      </Box>
      <Box className="channel-sign">
        <CardMedia
          className="channel-thumbnail"
          image={channelDetail?.snippet?.thumbnails?.high?.url}
          alt={channelDetail?.snippet?.title}
          component="img"
        />
        <Box className="channel-content">
          <Box className="channel-title">
            {channelDetail?.snippet?.title}
            <CheckCircle className="channel-icon" />
          </Box>
          <Typography color="#eee" fontSize="1.6rem" align="center">
            {numberWithDot(parseInt(channelDetail?.statistics?.subscriberCount))} Subscribers
          </Typography>
        </Box>
      </Box>
      <Videos videos={channelVideo}></Videos>
    </Stack>
  )
}

export default ChannelDetail
