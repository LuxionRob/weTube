import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Box } from '@mui/material'
import { Feed, VideoDetail, ChannelDetail, SearchResult } from './pages'
import { DefaultLayout } from './layouts'

const App = () => (
  <BrowserRouter>
    <Box sx={{ backgroundColor: '#222' }}>
      <Routes>
        <Route path="" element={<DefaultLayout />}>
          <Route path="/" exact element={<Feed />} />
          <Route path="/video/:id" element={<VideoDetail />} />
          <Route path="/channel/:id" element={<ChannelDetail />} />
          <Route path="/search/:searchTerm" element={<SearchResult />} />
        </Route>
      </Routes>
    </Box>
  </BrowserRouter>
)

export default App
