import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import {
  StyledInputEdit,
  StyledInputToggle,
  StyledButton,
  StyledItem
} from 'components/TodoItem/style';

import * as actions from 'redux/actions';

import classNames from 'classnames';
import { objectOf, any } from 'prop-types';

const ESCAPE_KEY = 27;
const ENTER_KEY = 13;

const propTypes = {
  todo: objectOf(any).isRequired
};

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();

  const editTodo = (id, text) => dispatch(actions.editTodo(id, text));
  const toggleTodo = todo =>
    dispatch(actions.toggleTodo(todo.id, todo.completed));
  const deleteTodo = id => dispatch(actions.deleteTodo(id));

  const [editText, setEditText] = useState('');
  const [editing, setEditing] = useState(false);

  const handleEdit = () => {
    const { text } = todo;

    setEditText(text);
    setEditing(true);
  };

  const handleKeyDown = event => {
    /* istanbul ignore else  */
    if (event.which === ESCAPE_KEY) {
      setEditText(todo.text);
      setEditing(false);
    } else if (event.which === ENTER_KEY) {
      handleSubmit();
    }
  };

  const handleChange = ({ target: { value } }) => setEditText(value);

  const handleSubmit = () => {
    const val = editText.trim();

    if (val) {
      editTodo(todo.id, val);
      setEditText(val);
      setEditing(false);
    } else {
      setEditText(todo.text);
      setEditing(false);
    }
  };

  return (
    <StyledItem
      key={todo.id}
      className={classNames({
        completed: todo.completed,
        editing
      })}
    >
      <div className="view">
        <StyledInputToggle
          className="toggle"
          type="checkbox"
          checked={todo.completed}
          onChange={() => toggleTodo(todo)}
        />
        <label onDoubleClick={handleEdit}>{todo.text}</label>
        <StyledButton className="destroy" onClick={() => deleteTodo(todo.id)} />
      </div>

      <StyledInputEdit
        className="edit"
        value={editText}
        onBlur={handleSubmit}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
    </StyledItem>
  );
};

TodoItem.propTypes = propTypes;

export default TodoItem;
