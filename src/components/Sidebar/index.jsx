import React, { useContext } from 'react'
import { Stack, Box, Typography } from '@mui/material'
import { CategoryContext } from '../../context/Category'
import { categories } from '../../utils/constant'
import './style.scss'

const SideBar = () => {
  const { selectedCategory, setSelectedCategory } = useContext(CategoryContext)

  const onSidebarItemClick = (name) => {
    setSelectedCategory(name)
  }

  return (
    <Box id="sidebar">
      <Stack className="list-item">
        {categories.map((category) => (
          <button
            className={`category-btn ${selectedCategory === category.name ? 'selected' : ''}`}
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
