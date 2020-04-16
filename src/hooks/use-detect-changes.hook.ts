import React from 'react';

export interface Changes<T> {
    previous?: T;
    current: T;
    isInit: boolean;
}

/**
 * This hook returns information on how an input prop has been changing
 * it provides us with information about previous and current values
 * and allows us to react accordingly based on this information in Components.
 *
 * @param value the changes object, defining how the value of the property has changed
 * @param onChanges callback function, called whenever the value of the property has changed
 */
export function useDetectChanges<T>(value: T, onChanges?: (changes: Changes<T>) => void): Changes<T> {
    const [changes, setChanges] = React.useState<Changes<T>>({ current: value, isInit: true });

    React.useEffect(() => {
        if (changes.current !== value) {
            const newChanges: Changes<T> = { previous: changes.current, current: value, isInit: false };

            setChanges(newChanges);

            if (onChanges) {
                onChanges(newChanges);
            }
        }
    }, [value]);

    return changes;
}
