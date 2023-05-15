import React from 'react';


class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {login: '', password: ''};
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    this.props.get_token(this.state.login, this.state.password);
    event.preventDefault();
  }

  render() {
    return (
      <div class="d-flex justify-content-center">
        <form onSubmit={(event) => this.handleSubmit(event)}>
          <input type="text"
                 name="login"
                 placeholder="login"
                 class="form-control my-2"
                 value={this.state.login}
                        onChange={(event) => this.handleChange(event)} />
          <input type="password"
                 name="password"
                 placeholder="password"
                 class="form-control my-2"
                 value={this.state.password}
                        onChange={(event)=>this.handleChange(event)} />
          <input type="submit"
                 class="btn btn-outline-secondary my-2"
                 value="Login" />
        </form>
      </div>
    );
  }
}

export default LoginForm;