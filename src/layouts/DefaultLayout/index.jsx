import React from 'react'
import { Outlet } from 'react-router-dom'
import { Box } from '@mui/material'
import { Navbar, Sidebar, ScrollToTop } from '../../components'
import './style.scss'

const DefaultLayout = () => {
  return (
    <Box id="default-layout" height="100%" minHeight="100vh">
      <Navbar />
      <Box className="main-section">
        <Sidebar />
        <Box className="main-container">
          <div id="top"></div>
          <Outlet />
        </Box>
      </Box>
      <ScrollToTop />
    </Box>
  )
}

export default DefaultLayout
