import React from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';
import ToDoUserLst from './components/ToDoUser.js';
import ProjectLst from './components/Project.js';
import TodoLst from './components/Todo.js';
import ProjectFilter from './components/ProjectFilter.js';
import NotFound from './components/NotFound.js';
import LoginForm from './components/Auth.js';
import Cookies from 'universal-cookie';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';

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

  get_headers() {
    let headers = { 'Accept': 'application/json; version=2.0' }
    if (this.is_authenticated()) {
      headers['Authorization'] = 'Token ' + this.state.token;
    };
    console.log(headers);
    return headers
  }

  load_data () {
    const headers = this.get_headers();

    axios.get('http://127.0.0.1:8000/users', { headers })
      .then(response => {
        const users = response.data.results
        console.log(users)
        this.setState({ 'users': users })
      }).catch(error => {
        console.log(error);
        this.setState({ users: [] });
      })

    axios.get('http://127.0.0.1:8000/projects', { headers })
      .then(response => {
        const projects = response.data.results
        console.log(projects)
        this.setState({ 'projects': projects })
      }).catch(error => {
        console.log(error);
        this.setState({ projects: [] });
      })

    axios.get('http://127.0.0.1:8000/todos', { headers })
      .then(response => {
        const todos = response.data.results
        console.log(todos)
        this.setState({ 'todos': todos })
      }).catch(error => {
        console.log(error);
        this.setState( { todos: [] } );
      })
  }

  componentDidMount() {
    this.get_token_from_storage();
  }

  is_authenticated() {
    return this.state.token != ''
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
    this.setState({'token': token }, () => this.load_data());
  }

  set_token(token) {
    const cookies = new Cookies();
    cookies.set('token', token);
    this.setState({ 'token': token }, () => this.load_data());
  }

  logout() {
    this.set_token('');
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
              <li>
                { this.is_authenticated()
                  ? <button onClick={ () => this.logout() }>Logout</button>
                  : <Link to='/login'>Login</Link> }
              </li>
            </ul>
          </nav>
          <Routes>
            <Route path="/users"
                   element={<ToDoUserLst users={ this.state.users } />} />
            <Route path="/projects"
                   element={<ProjectLst projects={ this.state.projects } />} />
            <Route path="/todos"
                   element={<TodoLst todos={ this.state.todos } />} />
            <Route path="projects/:name"
                   element={<ProjectFilter projects={ this.state.projects } />} />
            <Route path='/login'
                   element={<LoginForm get_token={(username, password) => this.get_token(username, password)}/>} />
            <Route path="*"
                   element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </div>
    )
  }
}

export default App;
