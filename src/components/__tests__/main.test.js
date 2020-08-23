import React from 'react';

import '@testing-library/jest-dom/extend-expect';

import Main from '../Main/Main';

describe('<Main />', () => {
  it('renders component', () => {
    const { container } = renderWithProviders(<Main />, {
      initialState: {
        todos: []
      }
    });
    expect(container).toMatchSnapshot();
  });
});
