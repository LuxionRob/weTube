import React from 'react'
import { Stack } from '@mui/material'
import { Link } from 'react-router-dom'
import { logo } from '../../utils/constant'
import SearchBar from '../SearchBar'
import './style.scss'

const Navbar = () => (
  <Stack id="navbar" direction="row" alignItems="center" p={2}>
    <Link to="/">
      <img src={logo} alt="Logo" height={45} />
    </Link>
    <SearchBar />
  </Stack>
)

export default Navbar
