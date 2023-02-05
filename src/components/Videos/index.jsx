import React from 'react'
import { Stack, Box } from '@mui/material'
import { VideoCard, ChannelCard } from '../'
import './style.scss'
const Videos = ({ videos, direction }) => {
  return (
    <Box className={`feed-grid ${direction === 'column' && 'column'}`}>
      {videos.map((item, index) => {
        return (
          <React.Fragment key={index + 1}>
            {item?.id?.videoId && <VideoCard video={item} />}
            {item?.id?.channelId && <ChannelCard channel={item} />}
          </React.Fragment>
        )
      })}
    </Box>
  )
}
export default Videos
