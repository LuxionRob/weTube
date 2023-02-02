import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Paper, IconButton } from '@mui/material'
import { Search } from '@mui/icons-material'
import './style.scss'

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('')

  const onSearchTermChange = (e) => {
    setSearchTerm(e.target.value)
  }

  return (
    <Paper id="search" component="form" onSubmit={() => {}}>
      <input
        className="search-bar"
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={onSearchTermChange}
      />
      <Search className="search-icon" />
    </Paper>
  )
}
export default SearchBar
