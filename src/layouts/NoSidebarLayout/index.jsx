import React from 'react'
import { Outlet } from 'react-router-dom'
import { Box } from '@mui/material'
import { Navbar, Sidebar } from '../../components'
import './style.scss'

const NoSidebarLayout = () => {
  return (
    <Box id="no-sidebar-layout" height="100%" minHeight="100vh">
      <Navbar />
      <Box className="main-section" height="100%">
        <Outlet />
      </Box>
    </Box>
  )
}

export default NoSidebarLayout
