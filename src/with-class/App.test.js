import React from 'react';
import App from './App';
import { shallow } from 'enzyme';
import { storeFactory, findTestAttr } from '../specs/testUtils'

const setup = (initialState={}) =>{
    const store = storeFactory(initialState);
    const wrapper = shallow(<App store={store}/>);
    return wrapper;
}

describe('App component', ()=>{
    let wrapper;
    let initialState;
    

    context('Render', ()=>{
        it('Should render without errors', ()=>{
           wrapper = setup().dive().dive();
            const element = findTestAttr(wrapper,'app-component');
            expect(element.length).toBe(1);
        });

        it('Should render Input component em success is false', ()=>{
            initialState = { success: false }
            wrapper = setup(initialState).dive().dive();
            const element = findTestAttr(wrapper,'app-input-component');
            expect(element.length).toBe(1);
        });

        it('Should render Congrats component em success is true', ()=>{
            initialState = { success: true }
            wrapper = setup(initialState).dive().dive();
            const element = findTestAttr(wrapper,'app-congrats-component');
            expect(element.length).toBe(1);
        })
    });

    context('Redux props', ()=>{
        beforeEach(()=>{
            initialState = { success: false, guessedWords:[], secretWord:null }
            wrapper = setup(initialState).dive().dive();
        });

        it('Should have success state as props', ()=>{
            const successInitial = false;
            const successProp = wrapper.instance().props.success;
            expect(successProp).toBe(successInitial);
        });

        it('Should have guessedWords state as props', ()=>{
            const guessedWordsInitial = [];
            const guessedWrodsProp = wrapper.instance().props.guessedWords;
            expect(guessedWrodsProp).toEqual(guessedWordsInitial);
        });

        it('Should have secretWord state as props', ()=>{
            const secretWordInitial = null;
            const secretWordProp = wrapper.instance().props.secretWord;
            expect(secretWordProp).toEqual(secretWordInitial);
        });

        it('Should have guessWord action as prop', ()=>{
            const guessWordAction = wrapper.instance().props.guessWord;
            expect(guessWordAction).toBeInstanceOf(Function);
        })
    });


})