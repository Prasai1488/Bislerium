
// import React from 'react'

// export const UserManagement = () => {
//   return (
//     <div>UserManagement</div>
//   )
// }


import React, { useEffect, useState } from 'react';
import $axios from '../../lib/axios/axios.instance';

function UserManagement() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    $axios.get("/api/admin/get-all-users")
      .then(response => {
        setUsers(response.data.result);
      })
      .catch(error => {
        console.error('Error fetching users', error);
      });
  }, []);

  return (
    <div>
      <h1>User Management</h1>
      {users.map(user => (
        <div key={user.id}>
          <p>{user.name} ({user.emailAddress}) - {user.roleName}</p>
        </div>
      ))}
    </div>
  );
}

export default UserManagement;
