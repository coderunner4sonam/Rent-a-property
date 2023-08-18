import React from 'react'
import { dummyDataType } from '../../types/types'

const Card = (cardProperties:dummyDataType) => {
    const {propertyImage, price, isPopular, propertyType, isAvailable, Location, propertyName, propertyAddress, beds, bathrooms, size} = cardProperties
  return (
    <div style={cardStyle}>
      <div style={{height:"180px",border:"1px solid black"}}>{propertyImage}</div>
      <div style={{height:"40px",border:"1px solid black", display: "flex",justifyContent: "space-around",alignItems:"center"}}>
        <div style={{border:"1px solid black"}}><h5>{price}</h5></div>
        <div style={{border:"1px solid black"}}><h5>Like</h5></div>
      </div>
      <div style={{height:"40px",border:"1px solid black"}}><h5>{propertyType}</h5></div>
      <div style={{height:"48px",border:"1px solid black"}}><h5>{propertyAddress}</h5></div>
      <div style={{height:"40px",border:"1px solid black", display: "flex",justifyContent: "space-around",alignItems:"center"}}>
      <div style={{height:"40px",border:"1px solid black", display: "flex",justifyContent: "space-around",alignItems:"center"}}>
        <div style={{border:"1px solid black"}}><h5>BedIcon</h5></div>
        <div style={{border:"1px solid black"}}><h5>{beds}</h5></div>
      </div>
      <div style={{height:"40px",border:"1px solid black", display: "flex",justifyContent: "space-around",alignItems:"center"}}>
        <div style={{border:"1px solid black"}}><h5>BathroomIcon</h5></div>
        <div style={{border:"1px solid black"}}><h5>{bathrooms}</h5></div>
      </div>
      <div style={{height:"40px",border:"1px solid black", display: "flex",justifyContent: "space-around",alignItems:"center"}}>
        <div style={{border:"1px solid black"}}><h5>SizeIcon</h5></div>
        <div style={{border:"1px solid black"}}><h5>{size}</h5></div>
      </div>
      </div>
    </div>
  )
}

const cardStyle: React.CSSProperties = {
    width: "340px",
    height: "350px",
    border: "1px solid green",
    borderRadius: "5px",
    marginTop: "20px",
    marginBottom: "20px"
}

export default Card
