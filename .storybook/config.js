import { configure } from '@storybook/react';
import { addParameters } from '@storybook/react';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import '!style-loader!css-loader!sass-loader!./styles.scss';

addParameters({
    viewport: {
        viewports: INITIAL_VIEWPORTS,
        defaultViewport: 'someDefault'
    }
});

// automatically import all files ending in *.stories.js
const req = require.context('../src', true, /\.stories\.tsx?$/);

configure(req, module);
