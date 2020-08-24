import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { StyledButton, StyledList, StyledCounter, StyledFooter } from './style';

import { getFilterFromPath } from '../../helpers';

import { clearCompleted } from '../../redux/actions';
import * as filters from '../../redux/types';

export const getListStatus = (todos) => {
  if (!todos) return false;

  const completedItems = todos.filter((todo) => todo.completed).length;
  const notCompletedItems = todos.filter((todo) => !todo.completed).length;

  return {
    completedItems,
    notCompletedItems,
  };
};

export const getItemsLeftLabel = (todos) => {
  if (!todos) return false;

  const length = getListStatus(todos).notCompletedItems;

  if (length > 1) {
    return (
      <span>
        <strong>{length}</strong> items left
      </span>
    );
  }
  if (length === 1) {
    return (
      <span>
        <strong>{length}</strong> item left
      </span>
    );
  }

  return <span>No items left</span>;
};

export default function Footer() {
  const router = useRouter();
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);

  const hasTodos = todos.length > 0;
  const hasCompletedItems = getListStatus(todos).completedItems > 0;
  const activeFilter = getFilterFromPath(router.query.filter);

  return (
    <StyledFooter shouldShow={hasTodos} className="footer">
      <StyledCounter className="todo-count">
        {getItemsLeftLabel(todos)}
      </StyledCounter>

      <StyledList className="filters">
        <li>
          <Link
            className={activeFilter !== filters.SHOW_ALL ? '' : 'selected'}
            href="/?filter=all"
          >
            <a>All</a>
          </Link>
        </li>
        <li>
          <Link
            className={activeFilter !== filters.SHOW_ACTIVE ? '' : 'selected'}
            href="/?filter=active"
          >
            <a>Active</a>
          </Link>
        </li>
        <li>
          <Link
            className={
              activeFilter !== filters.SHOW_COMPLETED ? '' : 'selected'
            }
            href="/?filter=completed"
          >
            <a>Completed</a>
          </Link>
        </li>
      </StyledList>

      <StyledButton
        id="clear-completed"
        shouldShow={hasCompletedItems}
        onClick={() => dispatch(clearCompleted())}
      >
        Clear completed
      </StyledButton>
    </StyledFooter>
  );
}
