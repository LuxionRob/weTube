import React from 'react'
import { Link } from 'react-router-dom'
import { Typography, Card, CardContent, CardMedia, Box } from '@mui/material'
import { CheckCircle } from '@mui/icons-material'
import './style.scss'

import {
  demoThumbnailUrl,
  demoChannelUrl,
  demoVideoTitle,
  demoVideoUrl,
  demoChannelTitle,
} from '../../utils/constant'

const VideoCard = ({
  video: {
    id: { videoId },
    snippet,
  },
}) => {
  return (
    <Card className="video-grid-card">
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        <CardMedia
          className="video-thumbnail"
          image={snippet?.thumbnails?.high?.url || demoThumbnailUrl}
          alt={snippet?.title}
          component="div"
        />
      </Link>
      <CardContent className="video-content">
        <Box>
          <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
            <Typography variant="subtitle1" fontWeight="bold" color="#eee">
              {snippet?.title}
            </Typography>
          </Link>
        </Box>
        <Box className="channel-info">
          <Box className="channel-title">
            {snippet?.channelTitle}
            <CheckCircle className="channel-icon" />
          </Box>
        </Box>
      </CardContent>
    </Card>
  )
}

export default VideoCard
