import React from 'react';

import '@testing-library/jest-dom/extend-expect';

import TodoList from '../TodoList/TodoList';

describe('<TodoList />', () => {
  it('renders component', () => {
    const { container } = renderWithProviders(<TodoList />, {
      initialState: {
        todos: []
      }
    });
    expect(container).toMatchSnapshot();
  });
});
