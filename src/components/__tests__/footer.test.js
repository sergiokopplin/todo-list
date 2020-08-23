import React from 'react';

import '@testing-library/jest-dom/extend-expect';

import Footer from '../Footer/Footer';

describe('<Footer />', () => {
  it('renders component', () => {
    const { container } = renderWithProviders(<Footer />, {
      initialState: {
        todos: []
      }
    });
    expect(container).toMatchSnapshot();
  });
});
