import React from 'react';
import { hydrate } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import { Main } from 'components';

import store from 'redux/store';

export default hydrate(
  <Provider store={store()}>
    <BrowserRouter>
      <Main />
    </BrowserRouter>
  </Provider>,
  document.getElementById('main') || document.createElement('div')
);
