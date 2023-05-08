import React from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';
import ToDoUserLst from './components/ToDoUser.js';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      'users': []
    }
  }

  componentDidMount() {
    axios.get('http://127.0.0.1:8000/api/users')
      .then(response => {
        const users = response.data
        this.setState({ 'users': users })
      }).catch(error => console.log(error))
  }

  render () {
    return (
      <div className="App">
        <ToDoUserLst users={ this.state.users } />
      </div>
    )
  }
}

export default App;
