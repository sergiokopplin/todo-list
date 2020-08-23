import React from 'react';

import { Header } from 'components';

import { ProviderDecorator } from '../../.storybook/utils';

export default {
  component: Header,
  decorators: [storyFn => <ProviderDecorator>{storyFn()}</ProviderDecorator>],
  title: 'Header'
};

export const Default = () => <Header />;
