import React, { useState, createRef, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Paper, Box } from '@mui/material'
import { Search, CloseRounded } from '@mui/icons-material'
import './style.scss'

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [isMobile, setIsMobile] = useState(0)
  const [isSearching, setIsSearching] = useState(false)
  const router = useNavigate()

  const onSearchTermChange = (e) => {
    setSearchTerm(e.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    if (searchTerm) {
      router(`/search/${searchTerm}`)
    }
    if (isMobile) {
      setIsSearching(false)
    }
  }

  useEffect(() => {
    console.log(window.innerWidth < 480)
    setIsMobile(window.innerWidth < 480)
    window.onresize = () => {
      console.log(window.innerWidth)
      setIsMobile(window.innerWidth < 480)
    }
  }, [])

  const handleClickOnMobile = () => {
    setIsSearching(true)
  }
  const handleCancelOnMobile = () => {
    setIsSearching(false)
  }
  return (
    <React.Fragment>
      <Paper
        id="search"
        className={`${isMobile && 'mobile'} ${isSearching && 'searching'}`}
        component="form"
        onSubmit={handleSubmit}
      >
        {(!isMobile || isSearching) && (
          <input
            className="search-bar"
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={onSearchTermChange}
          />
        )}
        {isSearching ? (
          <CloseRounded className="close-icon" onClick={handleCancelOnMobile} />
        ) : (
          <Search className="search-icon" onClick={handleClickOnMobile} />
        )}
      </Paper>
    </React.Fragment>
  )
}
export default SearchBar
