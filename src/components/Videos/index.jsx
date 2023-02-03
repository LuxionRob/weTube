import React from 'react'
import { Stack, Box } from '@mui/material'
import { VideoCard, ChannelCard } from '../'
import './style.scss'
const Videos = ({ videos }) => {
  return (
    <Box className="feed-grid">
      {videos.map((item, index) => (
        <React.Fragment key={index + 1}>
          {item.id.videoId && <VideoCard video={item} />}
          {item.id.channelId && <ChannelCard channel={item} />}
        </React.Fragment>
      ))}
    </Box>
  )
}
export default Videos