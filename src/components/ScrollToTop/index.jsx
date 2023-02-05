import React from 'react'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import './style.scss'

const ScrollToTop = () => {
  const handleClick = () => {
    document.querySelector('#top').scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
  return (
    <button onClick={handleClick} className="scroll-button">
      <KeyboardArrowUpIcon className="scroll-to-top-icon" />
    </button>
  )
}

export default ScrollToTop
