import * as React from 'react';
import { useDetectChanges } from './use-detect-changes.hook';
const { mount, configure } = require('enzyme');

const Adapter = require('enzyme-adapter-react-16');

configure({ adapter: new Adapter() });

describe('useDetectChanges hook', () => {
    const TestDetectChanges = ({ value }: { value: string }) => {
        const changes = useDetectChanges(value);
        return <div>{JSON.stringify(changes)}</div>;
    };

    it('return init value', () => {
        expect(mount(<TestDetectChanges value={'foo'} />).text()).toEqual(JSON.stringify({ current: 'foo', isInit: true }));
    });

    it('trigger changed values', () => {
        const wrapper = mount(<TestDetectChanges value={'foo'} />);
        wrapper.setProps({ value: 'bar' });

        expect(wrapper.text()).toEqual(JSON.stringify({ previous: 'foo', current: 'bar', isInit: false }));
    });
});
