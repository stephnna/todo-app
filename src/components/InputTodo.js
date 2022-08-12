import React, { Component } from 'react';
import PropTypes from 'prop-types';

class InputTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
    };
  }

  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { title } = this.state;
    if (title.trim()) {
      const { addTodoProps } = this.props;
      addTodoProps(title);
      this.setState({
        title: '',
      });
    }
  }

  render() {
    const { title } = this.state;
    return (
      <form>
        <input
          type="text"
          placeholder="Add todo..."
          name="title"
          value={title}
          onChange={this.onChange}
        />
        <button type="button" onClick={this.handleSubmit}>Submit</button>
      </form>
    );
  }
}

InputTodo.defaultProps = {
  addTodoProps: PropTypes.func,
};

InputTodo.propTypes = {
  addTodoProps: PropTypes.func,
};
export default InputTodo;
