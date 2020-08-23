import React from 'react';

import { Footer } from 'components';

import { ProviderDecorator } from '../../.storybook/utils';
import todos from './mocks/todos';

export default {
  component: Footer,
  title: 'Footer'
};

export const NoItemsLeft = () => <Footer />;
export const WithItemLeft = () => <Footer />;
export const WithItemsLeft = () => <Footer />;

NoItemsLeft.story = {
  decorators: [
    storyFn => (
      <ProviderDecorator initialState={{ todos: [todos[2]] }}>
        {storyFn()}
      </ProviderDecorator>
    )
  ]
};

WithItemLeft.story = {
  decorators: [
    storyFn => (
      <ProviderDecorator initialState={{ todos: [todos[1]] }}>
        {storyFn()}
      </ProviderDecorator>
    )
  ]
};

WithItemsLeft.story = {
  decorators: [
    storyFn => (
      <ProviderDecorator initialState={{ todos }}>
        {storyFn()}
      </ProviderDecorator>
    )
  ]
};
