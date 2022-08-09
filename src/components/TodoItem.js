import React from 'react';

class TodoItem extends React.Component {
  render() {
    const { completed, id, title } = this.props.todo;
    return (
      <li>
        <input
          type="checkbox"
          checked={completed}
          onChange={() => this.props.handleChangeProps(id)}
        />
        <span>{title}</span>
        <button type="button" onClick={() => this.props.deleteTodoProps(id)}>Delete</button>
      </li>
    );
  }
}

export default TodoItem;
