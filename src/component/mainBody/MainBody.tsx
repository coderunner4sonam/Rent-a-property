import React from 'react'
import SearchBar from './SearchBar'
import FilterLayout from './FilterLayout'
import PropertyCards from './PropertyCards'
import { filterMatrixType } from '../../types/types'
import { useState } from 'react';

const MainBody = () => {
  const [ filterMatrix ,setFilterMatrix] = useState<filterMatrixType>({
    Location:"",
    When:"",
    Price:"",
    PropertyType:"",
  });
  
  return (
    <div>
      <SearchBar/>
      <FilterLayout filterMatrix={filterMatrix} setFilterMatrix={setFilterMatrix}/>
      <PropertyCards filterMatrix={filterMatrix}/>
    </div>
  )
}

export default MainBody

