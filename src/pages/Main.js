import React, { useState,useEffect } from 'react'
import DataArea from '../components/DataArea';
// import "../styles/Main.css"
import api from '../utils/api'

function Main () {
    const [empdata, setEmpdata] = useState([])
   
      useEffect(()=>{
            api.searchTerms().then(response => setEmpdata(response.data.results))   
      },[])


        return (
            <div>
                
                <DataArea empdata={empdata} />
            </div>
        )
    
}

export default Main
