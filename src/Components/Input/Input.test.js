import React from 'react';
import { shallow, mount } from 'enzyme';
import { findTestAttr, checkProp } from '../../specs/testUtils';
import Input from './Input';

import languageContext from '../../contexts/languageContext'

const defaultProps = { secretWord: 'party', language:'pt_br'};

const setupMount = (props=defaultProps) =>{
    const setupProps = {...defaultProps, ...props}
    const {language, ...componentProps} = setupProps;
    const wrapper = mount(
        <languageContext.Provider value={setupProps.language}>
            <Input {...componentProps}/>
        </languageContext.Provider>
    );
    return wrapper;
};

describe('Input Component', ()=>{
   
    describe('Render', ()=>{
        it('Should render component wothout errors', ()=>{
            const  wrapper = setupMount();
            const element = findTestAttr(wrapper, 'input-component');
            expect(element.length).toBe(1);
        });
    });

    describe('props', ()=>{
        it('Should have secretWord prop', ()=>{
            checkProp(Input, { secretWord: 'party'});
        });
    });

    describe('state', ()=>{
        let wrapper, setCurrentGuessMock;
        beforeEach(()=>{
            setCurrentGuessMock = jest.fn();
            React.useState = jest.fn(()=> ["", setCurrentGuessMock]);
            // let initialState = "";
            // React.useState = jest.fn().mockReturnValue([initialState, setCurrentGuessMock]);
            wrapper = setupMount(); //primeiro substitui a função para depois iniciar o componente
        });
        it('Should update currentGuess on input change', ()=>{
            const inputField = findTestAttr(wrapper, 'input-field');
            const mockEvent = { target: { value:'train' } };
            inputField.simulate("change", mockEvent);
            expect(setCurrentGuessMock).toHaveBeenCalledWith('train');
        });

        it('Should reset currentGuess submit', ()=>{
            const form = findTestAttr(wrapper, 'input-component');
            const mockEvent = { 
                target: { value:'' },
                preventDefault : jest.fn()
            };
            form.simulate("submit", mockEvent);
            expect(setCurrentGuessMock).toHaveBeenCalledWith('');
        });
    });

    describe('language context', ()=>{      
        it('Should have the correct submit button text for Brazilian Portuguese', ()=>{
            const wrapper = setupMount();
            const submitButton = findTestAttr(wrapper, 'input-submit');
            expect(submitButton.text()).toBe('Enviar');
        });
        
        it('Should have the correct input field placeholder for Brazilian Portuguese', ()=>{
            const wrapper = setupMount();
            const submitButton = findTestAttr(wrapper, 'input-field');
            expect(submitButton.prop('placeholder')).toBe('tente uma palavra');
        });

        it('Should have the correct submit button text for emoji', ()=>{
            const wrapper = setupMount({language:'emoji'});
            const submitButton = findTestAttr(wrapper, 'input-submit');
            expect(submitButton.text()).toBe('🚀');
        });
        
        it('Should have the correct input field placeholder for emoji', ()=>{
            const wrapper = setupMount({language:'emoji'});
            const submitButton = findTestAttr(wrapper, 'input-field');
            expect(submitButton.prop('placeholder')).toBe('⌨️🤔');
        });
    })
})
