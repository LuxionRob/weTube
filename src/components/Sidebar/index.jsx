import React, { useState } from 'react'
import { Stack, Box, Typography } from '@mui/material'
import { categories } from '../../utils/constant'
import './style.scss'

const SideBar = () => {
  const [selected, setSelected] = useState('New')

  const onSidebarItemClick = (name) => {
    setSelected(name)
  }

  return (
    <Box id="sidebar">
      <Stack className="list-item">
        {categories.map((category) => (
          <button
            className={`category-btn ${selected === category.name ? 'selected' : ''}`}
            key={category.name}
            onClick={() => {
              onSidebarItemClick(category.name)
            }}
          >
            <span>{category.icon}</span>
            <span>{category.name}</span>
          </button>
        ))}
      </Stack>
      <Typography className="copyright" variant="body2">
        Copyright 2023 Luxion
      </Typography>
    </Box>
  )
}

export default SideBar
