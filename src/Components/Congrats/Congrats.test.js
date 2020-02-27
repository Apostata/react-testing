import React from 'react';
import Enzyme, { shallow, ShallowWrapper } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

import Congrats from './Congrats';
import { findTestAttr } from '../../specs/testUtils'

// const path = process.env.COMPONENTS_PATH;

Enzyme.configure({ adapter: new EnzymeAdapter()});

/**
 * Factory function to setup initial that returns ShallowWrapper for Congrats component
 * @function setup
 * @param {object} props 
 * @returns {ShallowWrapper}
 */
const setup = (props={}) =>{
    const wrapper = shallow(<Congrats {...props} />)
    return wrapper;
};

describe('Congrats Component', () => {
    it('Should render without error', ()=>{
        const wrapper = setup();
        const node = findTestAttr(wrapper, 'congrats-component');
        expect(node.length).toBe(1);
    });

    it('Shouldn\'t render text when success prop is false', ()=>{
        const wrapper = setup({success: false});
        const node = findTestAttr(wrapper, 'congrats-component');
        expect(node.text()).toBe('');
    });

    it('Should render text when success prop is true', ()=>{
        const wrapper = setup({success:true});
        const node = findTestAttr(wrapper, 'congrats-message');
        expect(node.length).not.toBe(0);
    });
});
