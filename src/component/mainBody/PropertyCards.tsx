import React, { useState } from 'react'
import {dummyData} from "../../utils/dummyData"
import { dummyDataType, filterMatrixType } from '../../types/types'
import Card from './Card';

interface setFilterMatrixType {
    filterMatrix:filterMatrixType,
}

const PropertyCards : React.FC<setFilterMatrixType> = ({filterMatrix}) => {
    
    let flag = function () {
        for(const [key,value] of Object.entries(filterMatrix)){
            if(value !== "" ){
                return false;
            }
        }
        return true;
    }
    const lowPrice = filterMatrix.Price && filterMatrix.Price.split("-")[0].split("").slice(1).join("").trim();   
    const highPrice = filterMatrix.Price && filterMatrix.Price.split("-")[1].split("").slice(1).join("").trim();
    console.log(dummyData);

    const filterData = dummyData.filter((ele,ind)=> ele.Location === filterMatrix.Location && ele.propertyType === filterMatrix.PropertyType && ele.price && (ele.price >= Number(lowPrice) && ele.price && ele.price<= Number(highPrice)) );

  return (
    <div style={propertyCardStyle}>
        <div style={subPropertyStyle}>
            {flag() ? 
                dummyData.map((ele:dummyDataType,ind:number)=>(
                    <Card key={ind} {...ele}/>
                )) 
            :  
                filterData.length===0 ? 
                    <h1>Nothing found</h1>
                :
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
