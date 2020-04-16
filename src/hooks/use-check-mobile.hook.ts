import { useState, useEffect } from 'react';

const DEFAULT_LG_BREAK = 992;

/**
 * A react hook for detecting desktop/mobile devices
 * @returns boolean, true if device is in mobile size
 */
export function useCheckMobile(breakpoint: number = DEFAULT_LG_BREAK, windowRef: Window = window) {
    const [isMobile, setIsMobile] = useState(checkIsMobile());

    function checkIsMobile() {
        return windowRef.innerWidth < breakpoint;
    }

    function onResizeListener() {
        setIsMobile(checkIsMobile());
    }

    useEffect(function addResizeListener() {
        windowRef.addEventListener('resize', onResizeListener);

        return function removeResizeListener() {
            windowRef.removeEventListener('resize', onResizeListener);
        };
    }, []);

    return isMobile;
}
