import React from 'react';
import { mount } from 'enzyme';
import { findTestAttr } from './testUtils';

import successContext from '../contexts/successContext';

import Input from '../Components/Input/Input';

const setup = (secretWord='party') =>{
    const wrapper =  mount(
        <successContext.SuccessProvider>
            <Input secretWord={secretWord}/>
        </successContext.SuccessProvider>
    );
    const inputField = findTestAttr(wrapper, 'input-field')  || null;
    const submitForm = findTestAttr(wrapper, 'input-component') || null;

    return[ wrapper, inputField, submitForm ];
};

describe('Guessing a word', ()=>{
    let wrapper, inputField, submitForm;
    beforeEach(()=>{
        [wrapper, inputField, submitForm] = setup();
    });
    describe('correct guess', ()=>{
        beforeEach(()=>{
            inputField.simulate('change', {target:{value:'party'}});
            submitForm.simulate('submit', {preventDefault:()=>{}});
        });

        it('Should render component with no childrens', ()=>{
            const inputCompoenent = findTestAttr(wrapper, 'input-component');
            expect(inputCompoenent.children().length).toBe(0)
        });
    });
    describe('incorrect guess', ()=>{
        beforeEach(()=>{
            inputField.simulate('change', {target:{value:'train'}});
            submitForm.simulate('submit', {preventDefault:()=>{}});
           
        });
        it('Should render component with all childrens', ()=>{
            expect(submitForm.exists()).toBe(true);
        });
    })
});