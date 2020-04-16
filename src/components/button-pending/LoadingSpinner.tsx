import React from 'react';
import classNames from 'classnames';

export interface LoadingSpinnerProps {
    className?: string;
}

export const LoadingSpinner = ({ className }: LoadingSpinnerProps) => {
    return (
        <React.Fragment>
            <div className={classNames('loading-spinner', { [className]: className })}>
                <i className="vicon icon-circle-o-notch icon--spin icon--fw" />
            </div>
            <style>{`
                .loading-spinner {
                    color: inherit;
                }
            `}</style>
        </React.Fragment>
    );
};
