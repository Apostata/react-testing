import React from 'react';
import { shallow } from 'enzyme';
import { findTestAttr, storeFactory } from '../../specs/testUtils';
import { ConfigSuccessStore } from '../../store/success';
import { useStore } from '../../store/configure.store';
import Input from './Input';



/**
 * Factory function to return a ShallowWrapper for the Input component
 * @function setup
 * @param {object} initialState
 * @returns {ShallowWrapper}
 */




const Provider = ()=>{
    const [globalstate, dispatch] = useStore(true);
    return <Input/>
};

const setup = () =>{
    const wrapper = shallow(<Provider/>).dive();
    return wrapper;
};


describe('Input Component', ()=>{
    describe('render', () => {
        context('When word has not been guessed', () => {
            let wrapper;
            beforeEach(() => {
                ConfigSuccessStore(false);
                wrapper = setup();
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
                ConfigSuccessStore(true);
                wrapper = setup();
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

    describe('update state', () => {

    });
});