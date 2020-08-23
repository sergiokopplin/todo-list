import React from 'react';

import '@testing-library/jest-dom/extend-expect';

import TodoItem from '../TodoItem/TodoItem';

describe('<TodoItem />', () => {
  it('renders component', () => {
    const { container } = renderWithProviders(
      <TodoItem todo={{ id: 1, text: 'text', completed: true }} />
    );
    expect(container).toMatchSnapshot();
  });
});
