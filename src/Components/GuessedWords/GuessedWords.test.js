import React from 'react';
import { shallow } from 'enzyme';
import { findTestAttr, checkProp } from '../../specs/testUtils';

import GuessedWords from './GuessedWords';

const defaultProps = {
    guessedWords: [
        { guessedWord : "train", letterMatchCount: 3 }
    ]
};

/**
 * Factory fucunction to return a ShallowWrapper for the GuessedWords Component
 * @function setup
 * @param {object} props
 * @returns {ShallowWrapper} 
 */
const setup = (props={}) =>{
    const setupProps = {...defaultProps, ...props};
    return shallow(<GuessedWords {...setupProps}/>);
};

describe('GuessedWords Component', () => {
    it('Should not throw warning with the expected props',()=>{
        const givenProps = {...defaultProps};
        checkProp(GuessedWords, givenProps);
    });

    describe('if are guessed words', () => {
        let wrapper;
        const guessedWords = [
            { guessedWord : "train", letterMatchCount: 3 },
            { guessedWord : "agile", letterMatchCount: 1 },
            { guessedWord : "party", letterMatchCount: 3 }
        ];

        beforeEach(() => {
            wrapper = setup({guessedWords});
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
            wrapper = setup({guessedWords:[]});
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
            const wrapper = setup({guessedWords:[]});
            const element = findTestAttr(wrapper, 'guess-instructions');
            expect(element.text()).toBe('Tente acertar a palavra secreta!');
        });
        it('Should render correct guess instructions in emoji', ()=>{
            const mockUseContext = jest.fn().mockReturnValue('emoji');
            React.useContext = mockUseContext;
            const wrapper = setup({guessedWords:[]});
            const element = findTestAttr(wrapper, 'guess-instructions');
            expect(element.text()).toBe('🤔🤫🔤');
        });
    });
    
});