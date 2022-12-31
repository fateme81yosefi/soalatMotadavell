import React , {createContext, useState} from "react";
export const FilterContext=createContext()

export const FilterProvider=(props)=>{
    const [FilterId,setFilterId]=useState([])

    return(
        <FilterContext.Provider value={[FilterId,setFilterId]}>
            {props.children}
        </FilterContext.Provider>
    )
}

