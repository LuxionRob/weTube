import React, { useEffect, useState, useContext } from 'react'
import { Stack, Typography } from '@mui/material'
import { Videos, Loading } from '../../components'
import { CategoryContext } from '../../context/Category'
import { getVideos } from '../../api'
import './style.scss'

const Feed = () => {
  const [videos, setVideos] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const { selectedCategory } = useContext(CategoryContext)

  const fetchSuggestedVideos = async () => {
    try {
      setIsLoading(true)
      const { data } = await getVideos({ maxResults: 50, q: selectedCategory })
      setVideos(data.items)
      setIsLoading(false)
    } catch (error) {
      setIsLoading(false)
      console.error(error)
    }
  }

  useEffect(() => {
    fetchSuggestedVideos()
  }, [selectedCategory])

  return isLoading ? (
    <Loading />
  ) : (
    <Stack id="feed" direction="column">
      <Typography variant="h3">
        {selectedCategory} <span className="color-red">Videos</span>
      </Typography>
      <Videos videos={videos} />
    </Stack>
  )
}

export default Feed
