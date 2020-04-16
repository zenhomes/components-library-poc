import { MutableRefObject, useEffect } from 'react';

export function useOutsideClick(eventHandler: React.MouseEventHandler, ref: MutableRefObject<HTMLElement>, deps?: any[]) {
    function onClick(event: any) {
        const isClickOutsideOfRef = ref.current && !ref.current.contains(event.target);
        if (isClickOutsideOfRef) {
            eventHandler(event);
        }
    }

    useEffect(() => {
        if (typeof window !== 'undefined' && window.document) {
            window.addEventListener('mousedown', onClick, false);
        }

        return () => {
            window.removeEventListener('mousedown', onClick, false);
        };
    }, deps);
}
