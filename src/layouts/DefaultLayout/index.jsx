import React from 'react'
import { Outlet } from 'react-router-dom'
import { Box } from '@mui/material'
import { Navbar, Sidebar } from '../../components'
import './style.scss'

const DefaultLayout = () => {
  return (
    <Box id="default-layout">
      <Navbar />
      <Box className="main-section">
        <Sidebar />
        <Outlet />
      </Box>
    </Box>
  )
}

export default DefaultLayout
