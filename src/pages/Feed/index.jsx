import React from 'react'
import { Stack, Typography } from '@mui/material'

import './style.scss'

const Feed = () => {
  return (
    <Stack id="feed">
      <Typography variant="h3" p={4} color="white" fontWeight="bold">
        New <span className="color-red">Videos</span>
      </Typography>
    </Stack>
  )
}

export default Feed
