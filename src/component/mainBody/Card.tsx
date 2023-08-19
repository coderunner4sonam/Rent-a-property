import React, { useState } from 'react'
import { dummyDataType } from '../../types/types'

const Card = (cardProperties:dummyDataType) => {
    const {propertyImage, price, isPopular, propertyType, isAvailable, Location, propertyName, propertyAddress, beds, bathrooms, size} = cardProperties

    const [isLiked, setIsLiked] = useState(false);
    const handleIconClick = () => {
      setIsLiked(prevState => !prevState);
    };

    const iconStyles: React.CSSProperties = {
      height: "35px",
      width: "36px",
      borderRadius: "25px",
      border: "0.2px solid grey",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      fontSize: "24px",
      color: isLiked ? "#7069F0" : "black", 
      cursor: "pointer",
    };
  

  return (
    <div style={cardStyle}>
      <div style={propertyImageStyle}>
        <img src={propertyImage} style={propertyImageStyle} alt='Property Image' />
        {isPopular && <div style={propertyPopularStyle}>Popular</div>}
      </div>
      <div style={cardPropertieStyles}>
        <div style={propertyPriceStyle}>
          <div style={priceStyle}>
            <h2 style={priceTitleStyle}>${price}</h2>
            <p>/month</p>
          </div>
          <div><i style={iconStyles} onClick={handleIconClick} className="fa fa-heart-o" aria-hidden="true"></i></div>
        </div>
        <div style={propertyTypeStyle}><h2>{propertyType}</h2></div>
        <div style={propertyAddressStyle}><h5>{propertyAddress}</h5></div>
        <div style={propertyFooterStyle}>
          <div style={bedStyle}>
            <div><i className="fa fa-bed" aria-hidden="true"></i></div>
            <div><h5>{beds}Beds</h5></div>
          </div>
          <div style={bathroomsStyle}>
            <div><i className="fa fa-bath" aria-hidden="true"></i></div>
            <div><h5>{bathrooms}Bathrooms</h5></div>
          </div>
          <div style={sizeStyle}>
            <div><i className="fa fa-area-chart" aria-hidden="true"></i></div>
            <div ><h5>{size}</h5></div>
          </div>
        </div>
      </div>
    </div>
  )
}

const cardStyle: React.CSSProperties = {
  width: "340px",
  height: "350px",
  border: "0.2px solid grey",
  borderRadius: "5px",
  marginTop: "20px",
  marginBottom: "20px",
  boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.4)",
}
const propertyImageStyle: React.CSSProperties ={
  height:"180px",
  width:"100%",
}
const propertyPopularStyle: React.CSSProperties ={
  height:"30px",
  width:"80px",
  border:"0.5 solid #7268F3",
  color: "white",
  backgroundColor: "#7268F3",
  position: "relative",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  bottom: "12%",
  borderRadius: "5px",
  marginLeft: "-5px"
}
const cardPropertieStyles: React.CSSProperties ={
  padding: "10px"
}
const propertyPriceStyle: React.CSSProperties ={
  height:"40px",
  display: "flex",
  justifyContent: "space-between",
  alignItems:"center"
}
const priceStyle: React.CSSProperties ={
  height:"40px", 
  display: "flex",
  justifyContent: "space-around",
  alignItems:"center"
}
const priceTitleStyle: React.CSSProperties ={
  color:"#7069F0"
}
const iconStyle: React.CSSProperties = {
  bottom: "40px", 
  left: "100px",
}
const propertyTypeStyle: React.CSSProperties ={
  height:"40px",
}
const propertyAddressStyle: React.CSSProperties ={
  height:"38px",
}
const propertyFooterStyle: React.CSSProperties ={
  height:"30px",
  display: "flex",
  justifyContent: "space-around",
  alignItems:"center"
}
const bedStyle: React.CSSProperties ={
  height:"40px",
  display: "flex",
  justifyContent: "space-around",
  alignItems:"center"
}
const bedIconStyle: React.CSSProperties ={
  width:"10%"
}
const bedTitleStyle: React.CSSProperties ={
  border:"1px solid black",
}
const bathroomsStyle: React.CSSProperties ={
  height:"40px",
  display: "flex",
  justifyContent: "space-around",alignItems:"center"
}
const bathroomsIconStyle: React.CSSProperties ={
  border:"1px solid black"
}
const bathroomsTitleStyle: React.CSSProperties ={
  border:"1px solid black"
}
const sizeStyle: React.CSSProperties ={
  height:"40px",
  display: "flex",
  justifyContent: "space-around",
  alignItems:"center"
}

const sizeTitleStyle: React.CSSProperties ={
  border:"1px solid black"
}
export default Card

