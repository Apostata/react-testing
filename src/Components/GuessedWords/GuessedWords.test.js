import React from 'react';
import { shallow } from 'enzyme';
import { findTestAttr } from '../../specs/testUtils';

import GuessedWords from './GuessedWords';
import guessedWordsContext from '../../contexts/guessedWordsContext'
/**
 * Factory fucunction to return a ShallowWrapper for the GuessedWords Component
 * @function setup
 * @param {object} props
 * @returns {ShallowWrapper} 
 */
const setup = (guessedWords=[]) =>{
    const mockUseGuessedWords = jest.fn().mockReturnValue([ guessedWords, jest.fn()]);
    guessedWordsContext.useGuessedWords = mockUseGuessedWords;
    return shallow(<GuessedWords />);
};

describe('GuessedWords Component', () => {
   
    describe('if are guessed words', () => {
        let wrapper;
        let guessedWords = [{}]
        beforeEach(() => {
            wrapper = setup(guessedWords);
        });

        it('Should render the GuessedWords Component without errors', () => {
            const node = findTestAttr(wrapper, 'component-guessed-word');
            expect(node.length).toBe(1);
        });


        it('Should render "guessed words" section',() => {
            const node = findTestAttr(wrapper, 'guessed-words');
            expect(node.length).toBe(1);
        });

        it('Should show the corrected number of guessed words',() => {
            const node = findTestAttr(wrapper, 'guessed-word');
            expect(node.length).toBe(guessedWords.length);
        });
    });

    describe('if are no guessed words', () => {
        let wrapper;

        beforeEach(() => {
            wrapper = setup();
        });

        it('Should render the GuessedWords Component without errors', () => {
            const node = findTestAttr(wrapper, 'component-guessed-word');
            expect(node.length).toBe(1);
        });

        it('Should render instructions to guess a word!', () => {
            const node = findTestAttr(wrapper, 'guess-instructions');
            expect(node.text().length).not.toBe(0);
        });
    });

    describe('Language context', ()=>{
        it('Should render correct guess instructions in Brazilian portuguese by default', ()=>{
            const wrapper = setup();
            const element = findTestAttr(wrapper, 'guess-instructions');
            expect(element.text()).toBe('Tente acertar a palavra secreta!');
        });
        it('Should render correct guess instructions in emoji', ()=>{
            const mockUseContext = jest.fn().mockReturnValue('emoji');
            React.useContext = mockUseContext;
            const wrapper = setup();
            const element = findTestAttr(wrapper, 'guess-instructions');
            expect(element.text()).toBe('🤔🤫🔤');
        });
    });
    
});