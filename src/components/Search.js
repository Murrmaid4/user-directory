import React from 'react'

function Search(props) {
    return (
        <form>
        <div className= "input-group mb-3">      
  <input 
  onChange={props.handleInputChange}
  value={props.value}
  type="text"
   class="form-control" 
   placeholder="Search" 
   aria-label="search"
   aria-describedby="basic-addon1">
  </input> 
       <span class="input-group-text" id="basic-addon1">Search</span>  
        </div>
        </form>
    )
}

export default Search
