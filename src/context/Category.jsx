import React, { useState } from 'react'

export const CategoryContext = React.createContext({})

export default function Category({ children }) {
  const [selectedCategory, setSelectedCategory] = useState('New')
  return (
    <CategoryContext.Provider value={{ selectedCategory, setSelectedCategory }}>
      {children}
    </CategoryContext.Provider>
  )
}
