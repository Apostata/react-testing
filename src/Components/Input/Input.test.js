import React from 'react';
import { shallow, mount } from 'enzyme';
import { findTestAttr, checkProp } from '../../specs/testUtils';
import Input from './Input';

import languageContext from '../../contexts/languageContext'
import successContext from '../../contexts/successContext';

const contextValues = { secretWord: 'party', language:'pt_br', success:true };

const setupMount = (contexts=contextValues) =>{
    const setupContext = {...contextValues, ...contexts}
    const {language, ...componentContext} = setupContext;
    const wrapper = mount(
        <languageContext.Provider value={setupContext.language}>
            <successContext.SuccessProvider value={[contexts.success, jest.fn()]}>
                <Input {...componentContext}/>
            </successContext.SuccessProvider>
        </languageContext.Provider>
    );
    return wrapper;
};

describe('Input Component', ()=>{
   
    describe('Render', ()=>{
        it('Should render component without errors', ()=>{
            const  wrapper = setupMount({success:false});
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
            wrapper = setupMount({success: false}); //primeiro substitui a função para depois iniciar o componente
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
            const wrapper = setupMount({success: false});
            const submitButton = findTestAttr(wrapper, 'input-submit');
            expect(submitButton.text()).toBe('Enviar');
        });
        
        it('Should have the correct input field placeholder for Brazilian Portuguese', ()=>{
            const wrapper = setupMount({success: false});
            const submitButton = findTestAttr(wrapper, 'input-field');
            expect(submitButton.prop('placeholder')).toBe('tente uma palavra');
        });

        it('Should have the correct submit button text for emoji', ()=>{
            const wrapper = setupMount({language:'emoji', success:false});
            const submitButton = findTestAttr(wrapper, 'input-submit');
            expect(submitButton.text()).toBe('🚀');
        });
        
        it('Should have the correct input field placeholder for emoji', ()=>{
            const wrapper = setupMount({language:'emoji', success:false});
            const submitButton = findTestAttr(wrapper, 'input-field');
            expect(submitButton.prop('placeholder')).toBe('⌨️🤔');
        });
    });

    describe('success context', ()=>{
        it('Should\'t render input when success is true', ()=>{
            const wrapper = setupMount();
            expect(wrapper.isEmptyRender()).toBe(true);
        });
    })
})
