import React from 'react'
import {dummyData} from "../../utils/dummyData"
import { dummyDataType } from '../../types/types'
import Card from './Card'

const PropertyCards = () => {
  return (
    <div style={propertyCardStyle}>
        <div style={subPropertyStyle}>
            {
                dummyData.map((ele:dummyDataType,ind:number)=>(
                    <Card key={ind} {...ele}/>
                ))
            }
        </div>
    </div>
  )
}
const propertyCardStyle: React.CSSProperties = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
}
const subPropertyStyle: React.CSSProperties = {
    width: "80%",
    display: "flex",
    justifyContent: "space-around",
    flexWrap: "wrap"
}
export default PropertyCards
