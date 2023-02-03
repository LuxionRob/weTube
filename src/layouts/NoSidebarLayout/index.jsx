import React from 'react'
import { Outlet } from 'react-router-dom'
import { Box } from '@mui/material'
import { Navbar, Sidebar } from '../../components'
import './style.scss'

const NoSidebarLayout = () => {
  return (
    <Box id="no-sidebar-layout">
      <Navbar />
      <Box className="main-section">
        <Outlet />
      </Box>
    </Box>
  )
}

export default NoSidebarLayout
