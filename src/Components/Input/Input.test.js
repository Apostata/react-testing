import React from 'react';
import { shallow } from 'enzyme';
import { findTestAttr } from '../../specs/testUtils';

import Input from './Input';

/**
 * Factory function to return a ShallowWrapper for the Input component
 * @function setup
 * @param {object} initialState
 * @returns {ShallowWrapper}
 */
const setup = (initialState={}) =>{
    const wrapper = shallow(<Input {...initialState}/>);
    console.log(wrapper.debug());
};

setup();

describe('Input Component', ()=>{
    describe('render', () => {
        context('When word has not been guessed', () => {

            it('Should renders component without error', ()=>{

            });
            it('Should renders the input box', ()=>{

            });
            
            it('Should renders the submit button', ()=>{

            });
        });

        context('When word has been guessed', () => {
            it('Should renders component without error', ()=>{

            });
            it('Should not renders the input box', ()=>{

            });
            
            it('Should renders the submit button', ()=>{

            });
        });
    });

    describe('update state', () => {

    });
})