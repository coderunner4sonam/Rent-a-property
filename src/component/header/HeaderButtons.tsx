import React from 'react';
import '../../App.css';

const HeaderButtons = () => {
  return (
    <div style={headerButtonsStyle}>
        <div style={buttonDivStyle}>
            <button style={buttonStyle} className='signupButton'>Login in</button>
            <button style={buttonStyle} className='signupButton'>Sign up</button>
        </div>
    </div>
  )
}

const headerButtonsStyle: React.CSSProperties = {
    width: "40%",
    display: "flex",
    justifyContent:"flex-end",
    alignItems:"center",
}
const buttonDivStyle: React.CSSProperties = {
    width: "45%",
    display: "flex",
    justifyContent:"space-evenly",
    alignItems:"center",
}
const buttonStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '10px 20px',
    color: '#6F66EA',
    backgroundColor:"white",
    borderRadius: '5px',
    border: '1px solid grey',
    cursor: 'pointer',
    transition: 'background-color 0.3s, transform 0.2s, border 0.3s',
};
  
export default HeaderButtons
