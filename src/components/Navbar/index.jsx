import React from 'react'
import { Stack } from '@mui/material'
import { Link } from 'react-router-dom'
import { logo } from '../../utils/constant'

import './style.scss'

const Navbar = () => (
  <Stack className="navbar" direction="row" alignItems="center" p={2}>
    <Link to="/">
      <img src={logo} alt="Logo" height={45} />
    </Link>
  </Stack>
)

export default Navbar
