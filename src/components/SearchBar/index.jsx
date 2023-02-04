import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Paper, IconButton } from '@mui/material'
import { Search } from '@mui/icons-material'
import './style.scss'

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const router = useNavigate()

  const onSearchTermChange = (e) => {
    setSearchTerm(e.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    if (searchTerm) {
      router(`/search/${searchTerm}`)
    }
  }
  return (
    <Paper id="search" component="form" onSubmit={handleSubmit}>
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
