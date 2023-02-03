import React, { useEffect, useState, useContext } from 'react'
import { Stack, Typography, Box } from '@mui/material'
import { Videos } from '../../components'
import { CategoryContext } from '../../context/Category'
import { getVideos } from '../../api'
import './style.scss'

const Feed = () => {
  const [videos, setVideos] = useState([])
  const { selectedCategory } = useContext(CategoryContext)

  const fetchSuggestedVideos = async () => {
    try {
      const { data } = await getVideos({ maxResults: 50, q: selectedCategory })
      setVideos(data.items)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    fetchSuggestedVideos()
  }, [selectedCategory])

  return (
    <Stack id="feed" direction="column" p={4}>
      <Typography variant="h3" color="white" fontWeight="bold" marginBottom={4}>
        {selectedCategory} <span className="color-red">Videos</span>
      </Typography>
      <Videos videos={videos} />
    </Stack>
  )
}

export default Feed
