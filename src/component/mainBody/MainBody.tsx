import React from 'react'
import SearchBar from './SearchBar'
import FilterLayout from './FilterLayout'
import PropertyCards from './PropertyCards'

const MainBody = () => {
  return (
    <div>
      <SearchBar/>
      <FilterLayout/>
      <PropertyCards/>
    </div>
  )
}

export default MainBody
