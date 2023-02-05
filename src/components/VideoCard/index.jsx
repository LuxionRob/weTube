import React from 'react'
import { Link } from 'react-router-dom'
import { Typography, Card, CardContent, CardMedia, Box } from '@mui/material'
import { CheckCircle } from '@mui/icons-material'
import './style.scss'

import {
  demoChannelUrl,
  demoVideoUrl,
  demoChannelTitle,
  demoVideoTitle,
  demoThumbnailUrl,
} from '../../utils/constant.js'

const VideoCard = ({ video }) => {
  return (
    <Card className="video-grid-card">
      <Link to={video?.id?.videoId ? `/video/${video?.id?.videoId}` : demoVideoUrl}>
        <CardMedia
          className="video-thumbnail"
          image={video?.snippet?.thumbnails?.high?.url || demoThumbnailUrl}
          alt={video?.snippet?.title}
          component="div"
        />
      </Link>
      <CardContent className="video-content">
        <Box>
          <Link to={video?.id?.videoId ? `/video/${video?.id?.videoId}` : demoVideoUrl}>
            <Typography variant="subtitle1" fontWeight="bold" color="#eee">
              {video?.snippet?.title || demoVideoTitle}
            </Typography>
          </Link>
        </Box>
        <Box className="channel-info">
          <Box className="channel-title">
            {video?.snippet?.channelTitle || demoChannelTitle}
            <CheckCircle className="channel-icon" />
          </Box>
        </Box>
      </CardContent>
    </Card>
  )
}

export default VideoCard
