import * as React from 'react';
import { Colors } from '@zenhomes/ui';

interface Props {
    icon: string;
}

export const StatusIcon = React.memo(({ icon }: Props) => {
    return (
        <React.Fragment>
            <div className="status-icon-wrapper d-flex justify-content-center align-items-center mr-3">
                <i className={`vicon ${icon} status-icon-item`} />
            </div>
            <style>{`
                .status-icon-wrapper {
                    height: 2.5rem;
                    width: 2.5rem;
                    background-color: rgba(0, 127, 255, 0.2);
                    color: ${Colors.blueBase700};
                    border-radius: 50%;
                }
                .status-icon-item {
                    font-size: 1.25rem;
                }
            `}</style>
        </React.Fragment>
    );
});
