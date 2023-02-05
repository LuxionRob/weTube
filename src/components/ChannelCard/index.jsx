import React from 'react'
import { Link } from 'react-router-dom'
import { Box, Typography, Card, CardMedia, CardContent } from '@mui/material'
import { CheckCircle } from '@mui/icons-material'
import './style.scss'
import { demoChannelUrl, demoProfilePicture, demoChannelTitle } from '../../utils/constant'
const ChannelCard = ({ channel }) => {
  return (
    <Card className="channel-grid-card">
      <Link to={channel?.id?.channelId ? `/channel/${channel?.id?.channelId}` : demoChannelUrl}>
        <CardMedia
          className="channel-thumbnail"
          image={channel?.snippet?.thumbnails?.high?.url || demoProfilePicture}
          alt={channel?.snippet?.title}
          component="img"
        />
      </Link>
      <Box className="channel-content">
        <Box className="channel-title">
          <Link
            className="channel-name"
            to={channel?.id?.channelId ? `/channel/${channel?.id?.channelId}` : demoChannelUrl}
          >
            {channel?.snippet?.title || demoChannelTitle}
          </Link>
          <CheckCircle className="channel-icon" />
        </Box>
      </Box>
    </Card>
  )
}

export default ChannelCard
