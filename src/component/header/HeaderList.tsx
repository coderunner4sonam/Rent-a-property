import React, { useState } from 'react';
import '../../App.css';

const HeaderList = () => {
  const [showManageProperty, setShowManageProperty] = useState(false);
  const [showResources, setShowResources] = useState(false);

  const toggleManageProperty = () => {
    setShowManageProperty(!showManageProperty);
  };

  const toggleResources = () => {
    setShowResources(!showResources);
  };

  return (
    <div style={headerListStyle} >
      <div style={toggleStyle} className='hoverStyle'>Rent</div>
      <div style={toggleStyle} className='hoverStyle'>Buy</div>
      <div style={toggleStyle} className='hoverStyle'>Sell</div>
      <div onClick={toggleManageProperty} style={toggleStyle}>
        <div>
          Manage Property <i className={`fa ${showManageProperty ? 'fa-angle-up' : 'fa-angle-down'}`}></i>
        </div>
        {showManageProperty && (
          <div style={dropdownManageStyle}>
            <span>Add Property</span>
            <span>Edit Property</span>
          </div>
        )}
      </div>
      <div onClick={toggleResources} style={toggleStyle}>
        <div>
          Resources <i className={`fa ${showResources ? 'fa-angle-up' : 'fa-angle-down'}`}></i>
        </div>
        {showResources && (
          <div style={dropdownResourceStyle}>
            <span>Guides</span>
            <span>FAQs</span>
          </div>
        )}
      </div>
    </div>
  );
};

const headerListStyle: React.CSSProperties = {
    width: "40%",
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    position: "relative", 
};
export const toggleStyle: React.CSSProperties = {
    cursor: "pointer",
};
export const dropdownManageStyle: React.CSSProperties = {
    background: "#fff",
    width: "120px", 
    position: "absolute",
    top: "100%",
    left: "250px",
    display: "flex",
    flexDirection: "column",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", 
    borderRadius: "4px",
    padding: "10px",

};
const dropdownResourceStyle: React.CSSProperties = {
    ...dropdownManageStyle,
    left: "420px",
};
  
export default HeaderList;

