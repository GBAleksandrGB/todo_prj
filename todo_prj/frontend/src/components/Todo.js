import React from 'react'

const TodoItem = ({ todo }) => {
  return (
    <tr>
      <td>{ todo.project }</td>
      <td>{ todo.content }</td>
      <td>{ todo.created_at }</td>
      <td>{ todo.updated_at }</td>
      <td>{ todo.author }</td>
      <td>{ todo.is_active }</td>
    </tr>
  )
}

const TodoLst = ({ todos }) => {
  return (
    <table>
      <th>PROJECT</th>
      <th>CONTENT</th>
      <th>CREATED_AT</th>
      <th>UPDATED_AT</th>
      <th>AUTHOR</th>
      <th>IS_ACTIVE</th>
      { todos.map((todo) => <TodoItem todo={ todo } key={ todo.id }/>) }
    </table>
  )
}

export default TodoLst;