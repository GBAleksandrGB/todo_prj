import React from 'react'
import { Link } from 'react-router-dom'

const TodoItem = ({ todo, deleteTodo }) => {
  return (
    <tbody>
      <tr className={ !todo.is_active ? "d-none" : ""}>
        <td>{ todo.project }</td>
        <td>{ todo.content }</td>
        <td>{ todo.created_at }</td>
        <td>{ todo.updated_at }</td>
        <td>{ todo.author }</td>
        <td>{ todo.is_active ? 'yes' : 'no' }</td>
        <td>
          <button onClick={ () => deleteTodo(todo.id) }
                  type='button'
                  className="btn btn-danger">
            Delete
          </button>
        </td>
      </tr>
    </tbody>
  )
}

const TodoLst = ({ todos, deleteTodo }) => {
  return (
    <div>
      <table className='table table-light table-hover shadow-sm'>
        <thead>
          <tr>
            <th scope="col">PROJECT</th>
            <th scope="col">CONTENT</th>
            <th scope="col">CREATED_AT</th>
            <th scope="col">UPDATED_AT</th>
            <th scope="col">AUTHOR</th>
            <th scope="col">IS_ACTIVE</th>
            <th scope="col">ACTION</th>
          </tr>
        </thead>
        { todos.map((todo) => <TodoItem todo={ todo }
                               deleteTodo={ deleteTodo }
                               key={ todo.id } />) }
      </table>
      <Link to='/todos/create'>CREATE NEW TODO</Link>
    </div>
  )
}

export default TodoLst;