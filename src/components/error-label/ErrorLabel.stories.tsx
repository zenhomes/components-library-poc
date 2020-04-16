import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { ErrorLabel } from './index';

function DefaultStory() {
    return <ErrorLabel error={'Name is mandatory'} />;
}

storiesOf('Error Label', module).add('default', () => <DefaultStory />);
