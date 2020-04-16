import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { StatusIcon } from './StatusIcon';

storiesOf('Status Icon', module).add('default', () => {
    return <StatusIcon icon="icon-edit" />;
});
