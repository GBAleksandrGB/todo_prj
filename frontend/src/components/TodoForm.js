import React from 'react';


class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { project: props.projects[0].name, content: '', author: props.users[0].username };
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    this.props.createTodo(this.state.project, this.state.content, this.state.author);
    event.preventDefault();
  }

  render() {
    return (
      <div className="d-flex justify-content-center">
        <form onSubmit={(event)=> this.handleSubmit(event)}>
          <div className="form-group my-2">
            <label htmlFor="project">Project</label>
            <select name="project"
                    className='form-control'
                    onChange={(event) => this.handleChange(event)}>
                    { this.props.projects.map((item) =>
                      <option value={ item.name } key={ item.id }>{ item.name }</option>) }
            </select>
          </div>
          <div className="form-group my-2">
            <label htmlFor="content">Content</label>
            <input type="text"
            className="form-control"
            name="content"
            value={ this.state.content } onChange={(event)=>this.handleChange(event)} />
          </div>
          <div className="form-group my-2">
            <label htmlFor="author">Author</label>
            <select name="author"
                    className='form-control'
                    onChange={(event)=>this.handleChange(event)}>
                    { this.props.users.map((item) =>
                      <option value={ item.username } key={ item.id }>{ item.username }</option>) }
            </select>
          </div>
          <input type="submit" className="btn btn-primary" value="Save" />
        </form>
      </div>
    );
  }
}

export default TodoForm;