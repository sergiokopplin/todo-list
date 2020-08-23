import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { StyledH1, StyledInput } from 'components/Header/style';

import { addTodo as addTodoAction } from 'redux/actions';

export default function Header() {
  const dispatch = useDispatch();
  const [value, setValue] = useState('');

  const addTodo = text => dispatch(addTodoAction(text));
  const handleChange = ({ target: { value } }) => setValue(value);

  const handleSubmit = e => {
    const text = e.target.value.trim();

    if (e.which === 27) setValue('');

    /* istanbul ignore else  */
    if (e.which === 13 || e.which === 9) {
      /* istanbul ignore else  */
      if (text.length !== 0) {
        addTodo(text);
        setValue('');
      }
    }
  };

  return (
    <header className="header">
      <StyledH1>todos</StyledH1>
      <StyledInput
        autoFocus
        placeholder="What needs to be done?"
        type="text"
        className="new-todo"
        value={value}
        onChange={handleChange}
        onKeyDown={handleSubmit}
      />
    </header>
  );
}
