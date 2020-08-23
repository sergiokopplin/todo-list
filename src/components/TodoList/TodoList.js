import React from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

import { TodoItem } from 'components';

import { getFilterFromPath } from 'helpers';

import * as filters from 'redux/types';

import { StylesList } from './style';

export const showAll = () => true;
export const showActive = todo => !todo.completed;
export const showCompleted = todo => todo.completed;

export const TODO_FILTERS = {
  [filters.SHOW_ALL]: showAll,
  [filters.SHOW_ACTIVE]: showActive,
  [filters.SHOW_COMPLETED]: showCompleted
};

const TodoList = () => {
  const location = useLocation();
  const todos = useSelector(state => state.todos);
  const filter = getFilterFromPath(location.pathname);
  const filteredTodos = todos.filter(TODO_FILTERS[filter]);

  const list = [];

  filteredTodos.forEach(item =>
    list.push(<TodoItem key={item.id} todo={item} />)
  );

  return <StylesList className="todo-list">{list}</StylesList>;
};

export default TodoList;
