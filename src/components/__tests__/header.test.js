import React from 'react';

import '@testing-library/jest-dom/extend-expect';

import Header from '../Header/Header';

describe('<Header />', () => {
  it('renders component', () => {
    const { container } = renderWithProviders(<Header />);
    expect(container).toMatchSnapshot();
  });
});
