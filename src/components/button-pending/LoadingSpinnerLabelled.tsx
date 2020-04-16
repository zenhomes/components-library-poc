import React from 'react';
import { LoadingSpinnerProps, LoadingSpinner } from './LoadingSpinner';

interface Props extends LoadingSpinnerProps {
    label: string;
}

export const LoadingSpinnerLabelled = ({ label, ...rest }: Props) => {
    return (
        <div className="d-flex align-items-center justify-content-center w-100">
            <LoadingSpinner className="mr-2" {...rest} />
            {label}
        </div>
    );
};
