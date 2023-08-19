import React, { useState } from 'react'
import {dummyData} from "../../utils/dummyData"
import { dummyDataType, filterMatrixType } from '../../types/types'
import Card from './Card';

interface setFilterMatrixType {
    filterMatrix:filterMatrixType,
}

const PropertyCards : React.FC<setFilterMatrixType> = ({filterMatrix}) => {

    const filterData = dummyData.filter((ele,ind)=> ele.Location === filterMatrix.Location);

  return (
    <div style={propertyCardStyle}>
        <div style={subPropertyStyle}>
            {
                filterData.map((ele:dummyDataType,ind:number)=>(
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
