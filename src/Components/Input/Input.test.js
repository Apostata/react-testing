import React from 'react';
import { shallow } from 'enzyme';
import { findTestAttr, checkProp } from '../../specs/testUtils';
import Input from './Input';

const defaultProps = { secretWord: 'party'};

const setup = (props=defaultProps) =>{
    const wrapper = shallow(<Input {...props}/>);
    return wrapper;
};

describe('Input Component', ()=>{
   
    describe('Render', ()=>{
        it('Should render component wothout errors', ()=>{
            const  wrapper = setup();
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
            wrapper = setup(); //primeiro substitui a função para depois iniciar o componente
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
})
