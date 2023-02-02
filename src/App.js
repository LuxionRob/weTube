import { Box } from '@mui/material'
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Navbar, Feed, VideoDetail, ChannelDetail, SearchResult } from './components'

const App = () => (
  <BrowserRouter>
    <Box sx={{ backgroundColor: '#222' }}>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Feed />} />
        <Route path="/video/:id" element={<VideoDetail />} />
        <Route path="/channel/:id" element={<ChannelDetail />} />
        <Route path="/search/:searchTerm" element={<SearchResult />} />
      </Routes>
    </Box>
  </BrowserRouter>
)

export default App
