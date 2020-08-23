import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import { StyledTodoApp, GlobalStyle } from 'components/Main/style';

import store from '../src/redux/store';

export const ProviderDecorator = ({ children, initialState = {} }) => (
  <Provider store={store(initialState, { addTodo: () => {} })}>
    <BrowserRouter>{children}</BrowserRouter>
  </Provider>
);

export const StyleWrapper = ({ children }) => (
  <StyledTodoApp className="todoapp">
    <GlobalStyle />
    {children}
  </StyledTodoApp>
);
