import React from 'react';
import { Colors, SharedStyles } from '@zenhomes/ui';
import classNames from 'classnames';

interface Props {
    status: 'info' | 'success' | 'warning' | 'alert';
    icon?: string;
    label: string;
}

export const StatusBadge = React.memo(({ label, icon, status }: Props) => {
    return (
        <React.Fragment>
            <div className={classNames('status-badge py-1 px-1 text-xsmall text-center font-weight-bold', `status-badge--${status}`)}>
                {icon && <i className={classNames('vicon mr-2', icon)} />}
                <span>{label}</span>
            </div>
            <style>{`
                .status-badge {
                    border-radius: ${SharedStyles.defaultBorderRadius};
                }
                .status-badge--info {
                    color: ${Colors.blue800};
                    background-color: ${Colors.blue200};
                }
                .status-badge--success {
                    color: ${Colors.green800};
                    background-color: ${Colors.green200};
                }
                .status-badge--warning {
                    color: ${Colors.yellow800};
                    background-color: ${Colors.yellow200};
                }
                .status-badge--alert {
                    color: ${Colors.red800};
                    background-color: ${Colors.red200};
                }
            `}</style>
        </React.Fragment>
    );
});
