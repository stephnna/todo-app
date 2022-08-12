import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem';

const TodosList = (props) => {
  const { todos, handleChangeProps, deleteTodoProps } = props;
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          handleChangeProps={handleChangeProps}
          deleteTodoProps={deleteTodoProps}
        />
      ))}
    </ul>
  );
};

TodosList.defaultProps = {
  todos: PropTypes.element,
  deleteTodoProps: PropTypes.func,
  handleChangeProps: PropTypes.func,
};

TodosList.propTypes = {
  todos: PropTypes.element,
  deleteTodoProps: PropTypes.func,
  handleChangeProps: PropTypes.func,
};

export default TodosList;
