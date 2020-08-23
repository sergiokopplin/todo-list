import React from 'react';

import '@testing-library/jest-dom/extend-expect';

import ToggleAll from '../ToggleAll/ToggleAll';

describe('<ToggleAll />', () => {
  it('renders component', () => {
    const { container } = renderWithProviders(<ToggleAll />);
    expect(container).toMatchSnapshot();
  });
});
