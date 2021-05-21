import React  from "react";

function DataArea (props) {
  
    return (
      <div>
        <table className="table table-striped">
          <thead>
            <tr>
            <th scope="col">Image</th> 
              <th scope="col">Name:</th>
              <th scope="col">Phone</th>
              <th scope="col">Email</th>
              <th scope="col">DOB</th>
            </tr>
          </thead>
          <tbody>
          {props.empdata.length > 0? props.empdata.map(person => {
              return (  <tr>
                <th scope="row"><img src ={person.picture.thumbnail}/></th>
                <td>{person.name.title} {person.name.first} {person.name.last}</td>
                <td>{person.phone}</td>
                <td>{person.email}</td>
                <td>{person.dob.date}</td>
              </tr>)
          }) : 
          
          <tr>
          <th scope="row"></th>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
          
          }
           
           
          </tbody>
        </table>
      </div>
    );
 
}

export default DataArea;
