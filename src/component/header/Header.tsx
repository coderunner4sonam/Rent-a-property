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
    height: "10vh",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
}
export default Header
