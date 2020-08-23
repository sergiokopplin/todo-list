import React from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';

import { createStore } from 'redux';

import { createMemoryHistory } from 'history';
import { render } from '@testing-library/react';

import '@testing-library/jest-dom/extend-expect';

import reducers from '../redux/reducers';

export function renderWithProviders(
  ui,
  { initialState, store = createStore(reducers, initialState) } = {},
  {
    route = '/',
    history = createMemoryHistory({ initialEntries: [route] })
  } = {}
) {
  const Wrapper = ({ children }) => (
    <Provider store={store}>
      <Router history={history} keyLength={0}>
        {children}
      </Router>
    </Provider>
  );

  return {
    ...render(ui, { wrapper: Wrapper }),
    store,
    history
  };
}
