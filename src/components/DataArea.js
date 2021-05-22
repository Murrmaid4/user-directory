import React from "react";

function DataArea(props) {
  return (
    <div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Image</th>
            <th scope="col">
              {" "}
              <span id="srtBtn" onClick={props.handleSort}>
                Name:
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-caret-down-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                </svg>{" "}
              </span>{" "}
            </th>
            <th scope="col">Phone</th>
            <th scope="col">Email</th>
            <th scope="col">Location</th>
          </tr>
        </thead>
        <tbody>
          {props.empdata.map((person) => {
                return person.name.first.includes(props.searchVal) ? (
                  <tr>
                    <th scope="row">
                      <img src={person.picture.thumbnail} alt="empId" />
                    </th>
                    <td>
                      {person.name.title} {person.name.first} {person.name.last}
                    </td>
                    <td>{person.phone}</td>
                    <td>{person.email}</td>
                    <td>
                      {person.location.state}, {person.location.country}
                    </td>
                  </tr>
                ) : null;
              })}
            
        </tbody>
      </table>
    </div>
  );
}

export default DataArea;
