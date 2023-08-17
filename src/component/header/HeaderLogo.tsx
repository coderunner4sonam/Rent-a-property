import React from 'react';
import home_logo from "../../assets/home_logo.png";

const HeaderLogo = () => {
  return (
    <div style={headerLogoStyle}>
      <div style={headerImage}>
        <img src={home_logo} style={logoStyle} alt='logo'/>  
      </div>
      <div style={headerTitle}>
        <h1>Estatery</h1>
      </div>
    </div>
  );
};

const headerLogoStyle: React.CSSProperties = {
  width: "20%",
  display: "flex",
  justifyContent: "space-evenly",
  alignItems: "center", 
  height: "60px"

};

const logoStyle: React.CSSProperties = {
  height: "60px",
  width: "70px",
};

const headerImage: React.CSSProperties = {
  width: "35%",
  display: "flex",
  justifyContent: "flex-end",
  alignItems: "center"
};

const headerTitle: React.CSSProperties = {
  width: "60%",
  height: "60px",
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center"
};

export default HeaderLogo;

