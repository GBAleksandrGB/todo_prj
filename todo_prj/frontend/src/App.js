import React from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';
import ToDoUserLst from './components/ToDoUser.js';
import ProjectLst from './components/Project.js';
import TodoLst from './components/Todo.js';
import ProjectFilter from './components/ProjectFilter.js';
import NotFound from './components/NotFound.js';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      'users': [],
      'projects': [],
      'todos': []
    }
  }

  componentDidMount() {
    axios.get('http://127.0.0.1:8000/users')
      .then(response => {
        const users = response.data.results
        console.log(users)
        this.setState({
          'users': users
        })
      }).catch(error => console.log(error))

    axios.get('http://127.0.0.1:8000/projects')
      .then(response => {
        const projects = response.data.results
        console.log(projects)
        this.setState({
          'projects': projects
        })
      }).catch(error => console.log(error))

    axios.get('http://127.0.0.1:8000/todos')
      .then(response => {
        const todos = response.data.results
        console.log(todos)
        this.setState({
          'todos': todos
        })
      }).catch(error => console.log(error))
  }

  render () {
    return (
      <div className="App">
        <BrowserRouter>
          <nav>
            <ul>
              <li>
                <Link to='/users'>Users</Link>
              </li>
              <li>
                <Link to='/projects'>Projects</Link>
              </li>
              <li>
                <Link to='/todos'>Todos</Link>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route path="/users" element={<ToDoUserLst users={ this.state.users } />} />
            <Route path="/projects" element={<ProjectLst projects={ this.state.projects } />} />
            <Route path="/todos" element={<TodoLst todos={ this.state.todos } />} />
            <Route path="projects/:name" element={<ProjectFilter projects={ this.state.projects } />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </div>
    )
  }
}

export default App;
