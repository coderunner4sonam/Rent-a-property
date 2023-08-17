import React from 'react'
import HeaderLogo from './HeaderLogo'
import HeaderList from './HeaderList'
import HeaderButtons from './HeaderButtons'

const Header = () => {
  return (
    <div style={headerStyle}>
      <HeaderLogo/>
      <HeaderList/>
      <HeaderButtons/>
    </div>
  )
}

const headerStyle: React.CSSProperties = {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    border: "1px solid black",
    height: "10vh"
}
export default Header
