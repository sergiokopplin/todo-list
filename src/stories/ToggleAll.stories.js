import React from 'react';

import { ToggleAll } from 'components';

import { ProviderDecorator } from '../../.storybook/utils';

export default {
  component: ToggleAll,
  decorators: [storyFn => <ProviderDecorator>{storyFn()}</ProviderDecorator>],
  title: 'ToggleAll'
};

export const Default = () => <ToggleAll />;
