import React from 'react';

import { TodoList } from 'components';

import { ProviderDecorator, StyleWrapper } from '../../.storybook/utils';
import todos from './mocks/todos';

export default {
  component: TodoList,
  decorators: [
    storyFn => <StyleWrapper>{storyFn()}</StyleWrapper>,
    storyFn => <ProviderDecorator>{storyFn()}</ProviderDecorator>
  ],
  title: 'TodoList'
};

export const WithItems = () => <TodoList />;

WithItems.story = {
  decorators: [
    storyFn => (
      <ProviderDecorator initialState={{ todos }}>
        {storyFn()}
      </ProviderDecorator>
    )
  ]
};
