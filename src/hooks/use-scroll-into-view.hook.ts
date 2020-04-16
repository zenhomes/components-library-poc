import React from 'react';
import scrollIntoView from 'smooth-scroll-into-view-if-needed';

interface Props {
    selector: string;
    scrollOnce?: boolean;
    delay?: number;
    block?: ScrollLogicalPosition;
}

/**
 *
 * This hook scrolls an element defined by a CSS selector into view whenever dependencies are updated
 *
 * @param selector the css selector of for the element that should be scrolled into view
 * @param scrollOnce true if the hook should trigger only once
 * @param deps when to trigger the scroll
 */
export const useScrollIntoView = ({ selector, scrollOnce = true, block = 'center', delay }: Props, deps: any[] = []) => {
    const [hasScrolled, setHasScrolled] = React.useState(false);

    React.useEffect(() => {
        const isDelayApplicable = Number.isFinite(delay) && delay >= 0;

        if (isDelayApplicable) {
            const timeoutHandle = setTimeout(applyScrollEffect, delay);
            return () => clearTimeout(timeoutHandle);
        } else {
            applyScrollEffect();
            return () => {};
        }
    }, deps);

    function applyScrollEffect() {
        const element = document.querySelector(selector);

        if (!element || (scrollOnce && hasScrolled)) return;

        scrollIntoView(element, { scrollMode: 'if-needed', behavior: 'smooth', block });
        setHasScrolled(true);
    }
};
