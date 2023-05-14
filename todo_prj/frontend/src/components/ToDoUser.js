import React from 'react'

const ToDoUserItem = ({ user }) => {
  return (
    <tbody>
      <tr>
        <td>{ user.username }</td>
        <td>{ user.first_name }</td>
        <td>{ user.last_name }</td>
        <td>{ user.email }</td>
        <td>{ user.is_staff ? 'yes' : 'no' }</td>
        <td>{ user.is_superuser ? 'yes' : 'no' }</td>
      </tr>
    </tbody>
  )
}

const ToDoUserLst = ({ users }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>USERNAME</th>
          <th>FIRSTNAME</th>
          <th>LASTNAME</th>
          <th>EMAIL</th>
          <th>STAFF</th>
          <th>SUPERUSER</th>
        </tr>
     </thead>
     { users.map((user) => <ToDoUserItem user={ user } key={ user.username }/>) }
    </table>
  )
}

export default ToDoUserLst;
