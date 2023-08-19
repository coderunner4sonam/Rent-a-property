import React, { useState } from 'react'
import { dropdownManageStyle, toggleStyle } from '../header/HeaderList';

const SearchBar = () => {
  const [showInputProperty, setShowInputProperty] = useState(false);
  
  const toggleInputProperty = () => {
    setShowInputProperty(!showInputProperty);
  };

  return (
    <div style={searchParentStyle}>
      <div style={searchBarStyle}>
        <div>
          <h1>Search properties to rent</h1>
        </div>
        <div onClick={toggleInputProperty} style={toggleStyle}>
          <input style={searchInputStyle} type="text" placeholder='search with search bar'/><i style={inputIconStyle} className={`fa ${showInputProperty ? 'fa-angle-up' : 'fa-angle-down'}`}></i>
          {showInputProperty && (
            <div style={dropdownInputStyle}>
              <span>Add Property</span>
              <span>Edit Property</span>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

const searchParentStyle: React.CSSProperties = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}
const searchBarStyle: React.CSSProperties = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  height: "15vh",
  width:"80%",
}
const searchInputStyle: React.CSSProperties = {
  height: "38px",
  width:"200px",
  borderRadius: "4px",
}
const inputIconStyle:  React.CSSProperties = {
  position: "relative",
  right: "20px",
  
}
const dropdownInputStyle: React.CSSProperties = {
  top: "130px",
  left: "1010px",
  background: "#fff",
  width: "196px", 
  position: "absolute",
  display: "flex",
  flexDirection: "column",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", 
  borderRadius: "4px",
  padding: "10px",
}
export default SearchBar
