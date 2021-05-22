import React, { useState,useEffect } from 'react'
import Search from  './Search'
import DataArea from './DataArea';

// import "../styles/Main.css"
import api from '../utils/api'

function Main () {
    const [empdata, setEmpdata] = useState([])
    const [sortOrder, setSortOrder] = useState(false);
    const [searchVal, setSearchVal] = useState("");
  
   
      useEffect(()=>{
            api.searchTerms().then((response) => setEmpdata(response.data.results))   
      },[]);

      const handleInputChange = (e) => {
        setSearchVal(e.target.value);
    };


      const handleSort = (e) => {
        setSortOrder(!sortOrder);

        var sorted = (!sortOrder ? empdata.sort((a, b) => a.name.last.localeCompare(b.name.last)) : empdata.sort((a, b ) => b.name.last.localeCompare(a.name.last)))

        console.log(sorted)
        setEmpdata(sorted);
    }

     

        return (
            <div>
                <Search 
                handleInputChange={handleInputChange} value={searchVal}
                />
                <DataArea 
                empdata={empdata}
                handleSort={handleSort} 
                searchVal={searchVal}
                 />
                 </div>
        )
    
}

export default Main
