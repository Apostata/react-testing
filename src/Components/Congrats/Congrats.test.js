import React from 'react';
import { shallow } from 'enzyme';
import Congrats from './Congrats';
import { findTestAttr, checkProp } from '../../specs/testUtils';


const defaultProps = { success: false};


/**
 * Factory function to setup initial that returns ShallowWrapper for Congrats component
 * @function setup
 * @param {object} props 
 * @returns {ShallowWrapper}
 */
const setup = (props={}) =>{
    const setupProps = {...defaultProps, ...props}
    const wrapper = shallow(<Congrats {...setupProps} />)
    return wrapper;
};

describe('Congrats Component', () => {
    it('Should render without error', ()=>{
        const wrapper = setup({...defaultProps});
        const node = findTestAttr(wrapper, 'congrats-component');
        expect(node.length).toBe(1);
    });

    it('Shouldn\'t render text when success prop is false', ()=>{
        const wrapper = setup({...defaultProps});
        const node = findTestAttr(wrapper, 'congrats-component');
        expect(node.text()).toBe('');
    });

    it('Should render text when success prop is true', ()=>{
        const wrapper = setup({success:true});
        const node = findTestAttr(wrapper, 'congrats-message');
        expect(node.length).not.toBe(0);
    });

    it('Shouldn\'t throw warning with expected props', ()=>{
        const givenProps = {...defaultProps};
        checkProp(Congrats, givenProps);
    });
});
