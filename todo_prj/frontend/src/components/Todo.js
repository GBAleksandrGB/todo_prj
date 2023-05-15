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
    <table class='table table-light table-hover shadow-sm'>
      <thead>
        <tr>
          <th scope="col">PROJECT</th>
          <th scope="col">CONTENT</th>
          <th scope="col">CREATED_AT</th>
          <th scope="col">UPDATED_AT</th>
          <th scope="col">AUTHOR</th>
          <th scope="col">IS_ACTIVE</th>
        </tr>
      </thead>
      { todos.map((todo) => <TodoItem todo={ todo } key={ todo.id }/>) }
    </table>
  )
}

export default TodoLst;