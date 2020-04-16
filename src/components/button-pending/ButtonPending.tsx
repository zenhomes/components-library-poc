import React from 'react';
import classNames from 'classnames';
import { LoadingSpinnerLabelled } from './LoadingSpinnerLabelled';

interface Props {
    isPending: boolean;
    label: string;
    className?: string;
    isDisabled?: boolean;
    onClick: () => void;
}

export const ButtonPending = ({ isPending, label, className, isDisabled, onClick }: Props) => {
    return (
        <button
            type="button"
            className={classNames('btn btn-square flex-1 text-small', { [className]: className })}
            onClick={onClick}
            disabled={isPending || isDisabled}>
            {isPending ? <LoadingSpinnerLabelled label={label} /> : label}
            <style>{`
                .flex-1 {
                    flex: 1;
                }
            `}</style>
        </button>
    );
};
