import React from 'react'
import { Stack, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import { logo } from '../../utils/constant'
import SearchBar from '../SearchBar'
import './style.scss'

const Navbar = () => (
  <Stack id="navbar" direction="row" alignItems="center" p={2}>
    <Link to="/">
      <img src={logo} alt="Logo" height={45} />{' '}
      <Typography color="#fc1503" fontSize="3.5rem" ml={2} fontWeight="bold">
        WeTube
      </Typography>
    </Link>
    <SearchBar />
  </Stack>
)

export default Navbar
