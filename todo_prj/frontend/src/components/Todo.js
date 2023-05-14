import React from 'react'

const TodoItem = ({ todo }) => {
  return (
    <tbody>
      <tr>
        <td>{ todo.project }</td>
        <td>{ todo.content }</td>
        <td>{ todo.created_at }</td>
        <td>{ todo.updated_at }</td>
        <td>{ todo.author }</td>
        <td>{ todo.is_active ? 'yes' : 'no' }</td>
      </tr>
    </tbody>
  )
}

const TodoLst = ({ todos }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>PROJECT</th>
          <th>CONTENT</th>
          <th>CREATED_AT</th>
          <th>UPDATED_AT</th>
          <th>AUTHOR</th>
          <th>IS_ACTIVE</th>
        </tr>
      </thead>
      { todos.map((todo) => <TodoItem todo={ todo } key={ todo.id }/>) }
    </table>
  )
}

export default TodoLst;