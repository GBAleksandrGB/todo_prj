import React from 'react'

const ToDoUserItem = ({ user }) => {
  return (
    <tbody>
      <tr>
        <td>{ user.username }</td>
        <td>{ user.first_name }</td>
        <td>{ user.last_name }</td>
        <td>{ user.email }</td>
      </tr>
    </tbody>
  )
}

const ToDoUserLst = ({ users }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Username</th>
          <th>Firstname</th>
          <th>Lastname</th>
          <th>Email</th>
        </tr>
     </thead>
     { users.map((user) => <ToDoUserItem user={ user } key={ user.username }/>) }
    </table>
  )
}

export default ToDoUserLst;
