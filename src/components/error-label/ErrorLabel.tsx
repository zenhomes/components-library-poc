import React from 'react';

interface Props {
    error: string;
}

export const ErrorLabel = ({ error = 'An error occurred' }: Props) => {
    return (
        <React.Fragment>
            <div className="error-label-wrapper d-flex flex-row align-items-center">
                <i className="vicon icon-close" />
                <div className="error ml-2">{error}</div>
            </div>
            <style>{`
                .error-label-wrapper {
                    font-size:0.75rem;
                }
                .error-label-wrapper > .error {
                    color: #ff0606;
                }
                .error-label-wrapper > .icon-close {
                    color: #ff0606;
                }
            `}</style>
        </React.Fragment>
    );
};
