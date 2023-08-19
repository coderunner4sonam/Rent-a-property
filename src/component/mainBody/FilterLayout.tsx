import React from 'react'
import { LocationData } from '../../utils/dummyData'
import { priceRanges } from '../../utils/dummyData'
import { propertyTypes } from '../../utils/dummyData'
import {buttonStyle} from "../header/HeaderButtons"
import { filterMatrixType } from '../../types/types'

interface SetFilterMatrixType {
    filterMatrix:filterMatrixType,
    setFilterMatrix:React.Dispatch<React.SetStateAction<filterMatrixType>>
}

const FilterLayout: React.FC<SetFilterMatrixType> = ({filterMatrix, setFilterMatrix }) => {
   
  return (
    <div style={FilterLayoutStyle}>
        <div style={FilterSubLayoutStyle}>
            <div style={FilterChildLayoutStyle}>
                <div style={subFilterStyle}>
                    <div>
                        <p style={filterHeadingStyle}>Location</p>
                    </div>
                    <div>
                        <select onChange={(e)=>setFilterMatrix({...filterMatrix,Location:e.target.value})} style={selectFilterStyle}>
                            {
                                LocationData.map((ele:string,ind:number)=>(
                                    <option>{ele}</option>
                                ))
                            }
                        </select>
                    </div>
                </div>
                <div style={subFilterStyle}>
                    <p style={filterHeadingStyle}> When</p>
                    <div style={DateFilterStyle}>
                    <h5>Select Move-in Date </h5>  
                    <input type='date' style={DateFilterChildStyle}/>    
                    </div>
                </div>
                <div style={subFilterStyle}>
                    <p style={filterHeadingStyle}>Price</p>
                    <select style={selectFilterStyle}>
                        {
                            priceRanges.map((ele:string,ind:number)=>(
                                <option>{ele}</option>
                            ))
                        }
                    </select>
                </div>
                <div style={subFilterStyle}>
                    <p style={filterHeadingStyle}>Property Type</p>
                    <select style={selectFilterStyle}>
                        {
                            propertyTypes.map((ele:string,ind:number)=>(
                                <option>{ele}</option>
                            ))
                        }
                    </select>
                </div>
                <div style={buttonStyle} className='hoverStyle'>
                    Search
                </div>
            </div>
        </div>
    </div>
  
  )
}

const FilterLayoutStyle: React.CSSProperties = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "12vh",
}
const FilterSubLayoutStyle: React.CSSProperties = {
    width: "90%", 
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
}
const FilterChildLayoutStyle: React.CSSProperties = {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    height: "12vh",
    width: "90%",
    background: "white",       
    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)",
}
const subFilterStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    width: "30%",
    padding:"20px",
  
}
const filterHeadingStyle: React.CSSProperties = {
    color: "grey"
}
const selectFilterStyle: React.CSSProperties = {
    border: "none",
    fontWeight: "bold"
}
const DateFilterStyle: React.CSSProperties = {
    border: "none",
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
}
const DateFilterChildStyle: React.CSSProperties = {
    border: "none",
}
export default FilterLayout
