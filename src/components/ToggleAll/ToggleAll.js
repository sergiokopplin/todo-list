import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { StyledToggle } from 'components/ToggleAll/style';

import { completeAll as completeAllAction } from 'redux/actions';

export const getAllCompleted = todos => {
  if (!todos) return false;

  return todos.filter(todo => todo.completed).length === todos.length;
};

const ToggleAll = () => {
  const dispatch = useDispatch();
  const todos = useSelector(state => state.todos);
  const completeAll = () => dispatch(completeAllAction());

  return [
    <StyledToggle
      key="toggle-input"
      id="toggle-all"
      className="toggle-all"
      type="checkbox"
      onChange={completeAll}
      checked={getAllCompleted(todos)}
    />,
    <label key="toggle-label" htmlFor="toggle-all">
      Mark all as complete
    </label>
  ];
};

export default ToggleAll;
