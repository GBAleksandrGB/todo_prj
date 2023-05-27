import React from 'react';
import axios from 'axios';
import './App.css';
import ToDoUserLst from './components/ToDoUser.js';
import ProjectLst from './components/Project.js';
import TodoLst from './components/Todo.js';
import ProjectFilter from './components/ProjectFilter.js';
import NotFound from './components/NotFound.js';
import LoginForm from './components/Auth.js';
import Cookies from 'universal-cookie';
import TodoForm from './components/TodoForm.js';
import { BrowserRouter, Routes, Route, Link, Navigate } from 'react-router-dom';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      'users': [],
      'projects': [],
      'todos': [],
      'token': ''
    }
  }

  componentDidMount() {
    this.get_token_from_storage();
  }

  is_auth() {
    return !!this.state.token;
  }

  get_headers() {
    let headers = { 'content-type': 'application/json; version=2.0' }
    if (this.is_auth()) {
      headers['Authorization'] = 'Token ' + this.state.token;
    };
    return headers
  }

  load_data () {
    const headers = this.get_headers();

    axios.get('http://127.0.0.1:8000/users/', { headers })
      .then(response => {
        const users = response.data.results
        this.setState({ 'users': users })
      }).catch(error => {
        console.log(error);
        this.setState({ users: [] });
      })

    axios.get('http://127.0.0.1:8000/projects/', { headers })
      .then(response => {
        const projects = response.data.results
        this.setState({ 'projects': projects })
      }).catch(error => {
        console.log(error);
        this.setState({ projects: [] });
      })

    axios.get('http://127.0.0.1:8000/todos/', { headers })
      .then(response => {
        const todos = response.data.results
        this.setState({ 'todos': todos })
      }).catch(error => {
        console.log(error);
        this.setState({ todos: [] });
      })
  }

  deleteTodo(id) {
    const headers = this.get_headers();
    axios.delete(`http://127.0.0.1:8000/todos/${ id }/`, { headers })
      .then(response => {
        this.load_data();
      }).catch(error => console.log(error))
  }

  createTodo(project, content, author) {
    const headers = this.get_headers();
    const data = { project: project, content: content, author: author };
    axios.post('http://127.0.0.1:8000/todos/', data, { headers })
      .then(response => {
        this.load_data();
      }).catch(error => console.log(error))
  }

  get_token(username, password) {
    axios.post('http://127.0.0.1:8000/api-token-auth/',
              {username: username, password: password})
      .then(response => {
        this.set_token(response.data['token'])
      }).catch(error => alert('Wrong login or password'));
  }

  get_token_from_storage() {
    const cookies = new Cookies();
    const token = cookies.get('token');
    this.setState({ 'token': token }, () => this.load_data());
  }

  set_token(token) {
    const cookies = new Cookies();
    cookies.set('token', token);
    this.setState({ 'token': token }, () => this.load_data());
  }

  logout() {
    this.set_token(null);
  }

  render () {
    return (
      <div className="App container">
        <BrowserRouter>
          <nav className="my-4">
            <ul className="nav justify-content-center">
              <li>
                <Link to='/users' className="nav-link">Users</Link>
              </li>
              <li>
                <Link to='/projects' className="nav-link">Projects</Link>
              </li>
              <li>
                <Link to='/todos' className="nav-link">Todos</Link>
              </li>
              <li>
                { this.is_auth()
                  ? <button type="button"
                            className="btn btn-success"
                            onClick={ () => this.logout() }>
                      Logout
                    </button>
                  : <Link to="/login"
                          type="button"
                          className="btn btn-primary">
                      Login
                    </Link> }
              </li>
            </ul>
          </nav>
          <Routes>
            <Route path='/'
                   element={<Navigate to='/users/' />} />
            <Route path="/users/"
                   element={ <ToDoUserLst users={ this.state.users } />} />
            <Route path="/projects/"
                   element={ <ProjectLst projects={ this.state.projects } />} />
            <Route path="/todos/"
                   element={ <TodoLst todos={ this.state.todos }
                   deleteTodo={ (id) => this.deleteTodo(id) } />} />
            <Route path='/todos/create/'
                   element={ <TodoForm users = { this.state.users } projects = { this.state.projects }
                               createTodo={ (project, content, author) =>
                                 this.createTodo(project, content, author) } />} />
            <Route path="projects/:name/"
                   element={ <ProjectFilter projects={ this.state.projects } />} />
            <Route path="/login/"
                   element={ <LoginForm get_token={ (username, password) =>
                     this.get_token(username, password) } />} />
            <Route path="*"
                   element={ <NotFound />} />
          </Routes>
        </BrowserRouter>
      </div>
    )
  }
}

export default App;
