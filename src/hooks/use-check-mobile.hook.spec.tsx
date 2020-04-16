import * as React from 'react';
import { useCheckMobile } from './use-check-mobile.hook';
const { shallow, configure } = require('enzyme');

const Adapter = require('enzyme-adapter-react-16');

configure({ adapter: new Adapter() });

describe('useCheckMobile hook should', () => {
    const mobileLabel = 'THIS IS MOBILE!';
    const desktopLabel = 'THIS IS DESKTOP!';
    const windowBreakpoint: number = 1000;

    const windowMock: any = {
        innerWidth: null,
        addEventListener: () => {},
        removeEventListener: () => {}
    };

    const TestUseMobileHook = () => {
        const isMobile = useCheckMobile(windowBreakpoint, windowMock);
        return <div>{isMobile ? mobileLabel : desktopLabel}</div>;
    };

    it('should detect if device is mobile', () => {
        windowMock.innerWidth = 500;
        expect(shallow(<TestUseMobileHook />).text()).toEqual(mobileLabel);
    });

    it('should detect if device is desktop', () => {
        windowMock.innerWidth = 1500;
        expect(shallow(<TestUseMobileHook />).text()).toEqual(desktopLabel);
    });
});
