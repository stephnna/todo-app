import React from 'react';
import PropTypes from 'prop-types';

const TodoItem = (props) => {
  const { todo } = props;
  const { completed, id, title } = todo;
  const { handleChangeProps, deleteTodoProps } = props;
  return (
    <li>
      <input
        type="checkbox"
        checked={completed}
        onChange={() => handleChangeProps(id)}
      />
      {title}
      <button type="button" onClick={() => deleteTodoProps(id)}>Delete</button>
    </li>
  );
};

TodoItem.defaultProps = {
  todo: PropTypes.element,
  handleChangeProps: PropTypes.func,
  deleteTodoProps: PropTypes.func,
};

TodoItem.propTypes = {
  todo: PropTypes.element,
  handleChangeProps: PropTypes.func,
  deleteTodoProps: PropTypes.func,
};

export default TodoItem;
