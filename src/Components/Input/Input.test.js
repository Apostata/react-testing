import React from 'react';
import { shallow } from 'enzyme';
import { findTestAttr, storeFactory } from '../../specs/testUtils';
import Input from './Input';


/**
 * Factory function to return a ShallowWrapper for the Input component
 * @function setup
 * @param {object} initialState
 * @returns {ShallowWrapper}
 */

const setup = (initialState) =>{
    const store = storeFactory(initialState)
    const wrapper = shallow(<Input store={store}/>).dive().dive();
    return wrapper;
};


describe('Input Component', ()=>{
    describe('render', () => {
        context('When word has not been guessed', () => {
            let wrapper;
            beforeEach(() => {
                const initialState = { success: false };
                wrapper = setup(initialState);
            });
         
            it('Should renders component without erros', ()=>{
                const component = findTestAttr(wrapper, 'input-component');
                expect(component.length).toBe(1);
            });

            it('Should renders the input box', ()=>{
                const component = findTestAttr(wrapper, 'input-box');
                expect(component.length).toBe(1);
            });
            
            it('Should renders the submit button', ()=>{
                const component = findTestAttr(wrapper, 'submit-button');
                expect(component.length).toBe(1);
            });
        });

        context('When word has been guessed', () => {
            let wrapper;
            beforeEach(() => {
                const initialState = { success: true };
                wrapper = setup(initialState);
            });

            it('Should renders component without erros', ()=>{
                const component = findTestAttr(wrapper, 'input-component');
                expect(component.length).toBe(1);
            });

            it('Should not renders the input box', ()=>{
                const component = findTestAttr(wrapper, 'input-box');
                expect(component.length).toBe(0);
            });
            
            it('Should not renders the submit button', ()=>{
                const component = findTestAttr(wrapper, 'submit-button');
                expect(component.length).toBe(0);
            });
        });
    });

    describe('Redux props', () => {
        it('Should have success state as props', ()=>{
            const successState = true;
            const wrapper = setup({success: successState});
            const successProp = wrapper.instance().props.success;
            expect(successProp).toBe(successState);
        });

        it('Should have guessWord action as props', ()=>{
            const wrapper = setup();
            const guessWordProp = wrapper.instance().props.guessWord;
            expect(guessWordProp).toBeInstanceOf(Function);
        })
    });
});