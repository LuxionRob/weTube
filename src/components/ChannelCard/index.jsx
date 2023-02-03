import React from 'react'
import { Link } from 'react-router-dom'
import { Box, Typography, Card, CardMedia, CardContent } from '@mui/material'
import { CheckCircle } from '@mui/icons-material'
import './style.scss'

const ChannelCard = ({
  channel: {
    id: { channelId },
    snippet,
  },
}) => {
  return (
    <Card className="channel-grid-card">
      <Link to={channelId && `/channel/${channelId}`}>
        <CardMedia
          className="channel-thumbnail"
          image={snippet?.thumbnails?.high?.url}
          alt={snippet?.title}
          component="img"
        />
      </Link>
      <Box className="channel-content">
        <Box className="channel-title">
          <Link className="channel-name" to={`/channel/${channelId}`}>
            {snippet?.title}
          </Link>
          <CheckCircle className="channel-icon" />
        </Box>
      </Box>
    </Card>
  )
}

export default ChannelCard
