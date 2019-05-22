import React from 'react';

class AddTodosForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      description: '',
      priority: ''
    };
    this.handleTodoChange = this.handleTodoChange.bind(this);
  }
  handleTodoChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    return (
      <div className='col-md-4'>
        <h5 className='card-title'>Add New Todo</h5>

        <div className='form-group'>
          <label htmlFor='create-todo-text'>I want to...</label>
          <textarea
            className='create-todo-text form-control'
            name='description'
            type='string'
            value={ this.state.description }
            onChange={ this.handleTodoChange }
          />
        </div>

        <div className='form-group'>
          <label htmlFor='create-todo-priority'>
            How much of a priority is this?
          </label>
          <select
            className='create-todo-priority form-control'
            name='priority'
            value={ this.state.priority }
            onChange={ this.handleTodoChange }
          >
            <option>Select a priority</option>
            <option value='1'>Low priority</option>
            <option value='2'>Medium priority</option>
            <option value='3'>High priority</option>
          </select>
        </div>

        <button
          className='create-todo btn btn-success btn-block'
          name='button'
          type='submit'
          onClick={ () => this.props.addItem(this.state.description, this.state.priority) }
        >
          Add!
        </button>
      </div>
    );
  }
}
export default AddTodosForm;
