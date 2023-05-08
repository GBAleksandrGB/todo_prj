import React from 'react'

const ToDoUserItem = ({ user }) => {
  return (
    <tr>
      <td>{ user.username }</td>
      <td>{ user.first_name }</td>
      <td>{ user.last_name }</td>
      <td>{ user.email }</td>
    </tr>
  )
}

const ToDoUserLst = ({ users }) => {
  return (
    <table>
      <th>Username</th>
      <th>Firstname</th>
      <th>Lastname</th>
      <th>Email</th>
      { users.map((user) => <ToDoUserItem user={ user } />) }
    </table>
  )
}

export default ToDoUserLst;
