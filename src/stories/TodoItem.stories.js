import React from 'react';

import { TodoItem } from 'components';

import { ProviderDecorator } from '../../.storybook/utils';
import { StylesList } from '../components/TodoList/style';

export default {
  component: TodoItem,
  decorators: [storyFn => <ProviderDecorator>{storyFn()}</ProviderDecorator>],
  title: 'TodoItem'
};

export const Default = () => (
  <StylesList>
    <TodoItem todo={{ completed: false, id: 1, text: 'Todo Text' }} />
  </StylesList>
);
