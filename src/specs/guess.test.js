import React from 'react';
import { mount } from 'enzyme';
import { findTestAttr } from './testUtils';

import successContext from '../contexts/successContext';
import guessedWordsContext from '../contexts/guessedWordsContext';

import Input from '../Components/Input/Input';
import GuessedWords from '../Components/GuessedWords/GuessedWords';

const setup = (guessedWordsStrings=[], secretWord='party') =>{
    const wrapper =  mount(
        <successContext.SuccessProvider>
            <guessedWordsContext.GuessedWordsProvider>
                <Input secretWord={secretWord}/>
                <GuessedWords />
            </guessedWordsContext.GuessedWordsProvider>
        </successContext.SuccessProvider>
    );
    const inputField = findTestAttr(wrapper, 'input-field')  || null;
    const submitForm = findTestAttr(wrapper, 'input-component') || null;

    guessedWordsStrings.map(word=>{
        const mockedSubmitGuess =  {target:{value:word}}
        submitForm.simulate('submit',{ mockedSubmitGuess});
    });
        
    return[ wrapper, inputField, submitForm ];
};

describe('Guessing a word', ()=>{
    let wrapper, inputField, submitForm;

    describe('non-empty guessedWords', ()=>{
        beforeEach(()=>{
            [wrapper, inputField, submitForm] = setup(['agile']);
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

            it('Should table row count reflects on updated guess', ()=>{
                const guessedWordsTableRows = findTestAttr(wrapper, 'guessed-word');
                expect(guessedWordsTableRows.length).toBe(2);
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
            it('Should table row count reflects on updated guess', ()=>{
                const guessedWordsTableRows = findTestAttr(wrapper, 'guessed-word');
                expect(guessedWordsTableRows.length).toBe(2);
            })
        });

    });

    describe('empty guess', ()=>{
               
        it('Should table row count reflects on updated guess', ()=>{
            [wrapper, inputField, submitForm] = setup();
            inputField.simulate('change', {target:{value:'train'}});
            submitForm.simulate('submit', {preventDefault:()=>{}});
            const guessedWordsTableRows = findTestAttr(wrapper, 'guessed-word');
            expect(guessedWordsTableRows.length).toBe(1);
        })
    })

});