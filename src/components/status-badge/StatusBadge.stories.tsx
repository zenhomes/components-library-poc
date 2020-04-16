import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { StatusBadge } from './StatusBadge';

storiesOf('Status Badge', module).add('default', () => {
    return (
        <div className="d-flex flex-column" style={{ maxWidth: '8rem' }}>
            <div className="p-3">
                <StatusBadge label="label" status="info" />
            </div>
            <div className="p-2">
                <StatusBadge label="success" status="success" />
            </div>
            <div className="p-2">
                <StatusBadge label="warning" status="warning" />
            </div>
            <div className="p-2">
                <StatusBadge label="alert" status="alert" />
            </div>
            <div className="p-2">
                <StatusBadge label="alert + icon" status="alert" icon="icon-clock" />
            </div>
        </div>
    );
});
