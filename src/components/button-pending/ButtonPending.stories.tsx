import { storiesOf } from '@storybook/react';
import React from 'react';
import { ButtonPending } from './index';

storiesOf('Button Pending', module).add('default', () => <ButtonPending onClick={() => {}} label="Clicky" isPending={true} />);
