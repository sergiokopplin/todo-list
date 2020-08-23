import 'loki/configure-react';

import React from 'react';
import { addParameters } from '@storybook/react';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { addDecorator } from '@storybook/react';

import { StyleWrapper } from './utils';

addDecorator(storyFn => <StyleWrapper>{storyFn()}</StyleWrapper>);

addParameters({
  viewport: {
    viewports: INITIAL_VIEWPORTS
  }
});
