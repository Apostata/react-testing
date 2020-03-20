import React from 'react';
import { findTestAttr } from '../../specs/testUtils';
import { shallow } from 'enzyme';
import TotalGuesses from './TotalGuesses';

const defaultProps = {guessedWords:[]};

const setup = (props={}) =>{
    const initialPops = {...defaultProps, ...props};
    const guessedWordsLength = initialPops.guessedWords.length;
    const wraper = shallow(<TotalGuesses total={ guessedWordsLength }/>);
    return wraper;
}

describe('TotalGuesses component', ()=>{
    let wrapper, initialPops;

    beforeEach(()=>{
        initialPops = { guessedWords:[{},{}] };
        wrapper =  setup(initialPops);
    });

    describe('render', ()=>{
        it('Should render without errors', ()=>{
            const element = findTestAttr(wrapper, 'total-guesses-component');
            expect(element.length).toBe(1);
        });

        it('Should have total of 2 guessed words', ()=>{
            const element = findTestAttr(wrapper, 'total');
            expect(element.text()).toBe('2');
        });
    });
    
});