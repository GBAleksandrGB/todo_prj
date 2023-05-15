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
    <table class='table table-success table-striped table-hover shadow-sm'>
      <thead>
        <tr>
          <th scope="col">USERNAME</th>
          <th scope="col">FIRSTNAME</th>
          <th scope="col">LASTNAME</th>
          <th scope="col">EMAIL</th>
          <th scope="col">STAFF</th>
          <th scope="col">SUPERUSER</th>
        </tr>
     </thead>
     { users.map((user) => <ToDoUserItem user={ user } key={ user.username }/>) }
    </table>
  )
}

export default ToDoUserLst;
