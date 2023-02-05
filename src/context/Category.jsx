import React, { useState } from 'react'

export const CategoryContext = React.createContext({})

export default function Category({ children }) {
  const [selectedCategory, setSelectedCategory] = useState('New')
  const [isLoading, setIsLoading] = useState(false)
  return (
    <CategoryContext.Provider
      value={{ selectedCategory, setSelectedCategory, isLoading, setIsLoading }}
    >
      {children}
    </CategoryContext.Provider>
  )
}
