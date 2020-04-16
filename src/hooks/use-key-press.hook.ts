import { useEffect } from 'react';

export function useKeyPress(onKeyPressed: React.KeyboardEventHandler, keyboardEventName: string = 'keydown', deps?: any[]) {
    function handleEvent(event: any) {
        if (typeof onKeyPressed === 'function') {
            onKeyPressed(event);
        }
    }

    useEffect(() => {
        if (typeof window !== 'undefined' && window.document) {
            window.document.addEventListener(keyboardEventName, handleEvent, true);
        }

        return function unsubscribe() {
            window.document.removeEventListener(keyboardEventName, handleEvent, true);
        };
    }, deps);
}
