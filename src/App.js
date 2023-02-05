import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Box } from '@mui/material'
import { Feed, VideoDetail, ChannelDetail, SearchResult } from './pages'
import { DefaultLayout, NoSidebarLayout } from './layouts'
import Category from './context/Category'

const App = () => (
  <Category>
    <BrowserRouter>
      <Box sx={{ backgroundColor: '#222' }}>
        <Routes>
          <Route path="" element={<DefaultLayout />}>
            <Route path="/" exact element={<Feed />} />
          </Route>
          <Route path="" element={<NoSidebarLayout />}>
            <Route path="/search/:searchTerm" element={<SearchResult />} />
            <Route path="/video/:id" element={<VideoDetail />} />
            <Route path="/channel/:id" element={<ChannelDetail />} />
          </Route>
        </Routes>
      </Box>
    </BrowserRouter>
  </Category>
)

export default App
