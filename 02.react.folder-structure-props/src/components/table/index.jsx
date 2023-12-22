import React from "react";
import "./index.css";
const UsersTable = ({ users }) => {
  return (
    <div>
<h1 className="text">Home Page</h1>
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>User Name</th>
          <th>Email</th>
          <th>City</th>
          <th>Phone</th>
          <th>Company Name</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => {
          return ( 
            <tr>
              <td>{user.id}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.address.city}</td>
              <td>{user.phone}</td>
              <td>{user.company.name}</td>  
            </tr>
          );
        })}
      </tbody>
    </table>
    </div>
        
  );
};

export default UsersTable;