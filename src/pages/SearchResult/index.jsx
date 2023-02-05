import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Stack, Typography } from '@mui/material'
import { Videos, Loading } from '../../components'
import { getVideos } from '../../api'
import './style.scss'

const SearchResult = () => {
  const [videos, setVideos] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const { searchTerm } = useParams()

  const fetchSuggestedVideos = async () => {
    try {
      setIsLoading(true)
      const { data } = await getVideos({ maxResults: 50, q: searchTerm })
      setVideos(data.items)
      setIsLoading(false)
    } catch (error) {
      setIsLoading(false)
      console.error(error)
    }
  }

  useEffect(() => {
    fetchSuggestedVideos()
  }, [searchTerm])

  return isLoading ? (
    <Loading />
  ) : (
    <Stack id="feed" direction="column" p={4}>
      <Typography variant="h3" color="white" fontWeight="bold" marginBottom={4}>
        Search for <span className="color-red">{searchTerm}</span> videos
      </Typography>
      <Videos videos={videos} />
    </Stack>
  )
}

export default SearchResult
