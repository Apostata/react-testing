import React from 'react';
import { shallow } from 'enzyme';
import Congrats, { Congrats as UnconnectedCongrats } from './Congrats';
import { storeFactory, findTestAttr, checkProp } from '../../specs/testUtils';

const defaultProps = { success: false, secretWord:'party'};


/**
 * Factory function to setup initial that returns ShallowWrapper for Congrats component
 * @function setup
 * @param {object} props 
 * @returns {ShallowWrapper}
 */
const setup = (props={}) =>{
    const setupProps = {...defaultProps, ...props}
    const wrapper = shallow(<UnconnectedCongrats {...setupProps} />)
    return wrapper;
};

describe('Congrats Component', () => {
    describe('Render', ()=>{
        it('Should render without error', ()=>{
            const wrapper = setup({...defaultProps});
            const node = findTestAttr(wrapper, 'congrats-component');
            expect(node.length).toBe(1);
        });

        it('Shouldn\'t render text when success prop is false', ()=>{
            const wrapper = setup({...defaultProps});
            const node = findTestAttr(wrapper, 'congrats-component');
            expect(node.text()).toBe('');
        });

        it('Should render text when success prop is true', ()=>{
            const wrapper = setup({success:true});
            const node = findTestAttr(wrapper, 'congrats-message');
            expect(node.length).not.toBe(0);
        });

        it('Should render text with the given secretWord when success prop is true', ()=>{
            const wrapper = setup({success:true, secretWord:'party'});
            const node = findTestAttr(wrapper, 'secret-word');
            expect(node.text()).toBe('party');
        });

        it('Should render button "jogar novamente"', ()=>{
            const wrapper = setup({success:true, secretWord:'party'});
            const node = findTestAttr(wrapper, 'play-again');
            expect(node.length).toBe(1);
        });

        it('Shouldn\'t throw warning with expected props', ()=>{
            const givenProps = {...defaultProps};
            checkProp(Congrats, givenProps);
        });
    });

    describe('Actions', ()=>{
        it('Should call clearGuess function when play again is clicked', ()=>{
            const clearGuessesMock = jest.fn();
            const initialState = {success:true, guessedWords:[{},{}], secretWord:'party'}
            const store = storeFactory(initialState);
            let {guessedWords, ...props} = initialState;
            props = {...props, clearGuesses:clearGuessesMock};
            const wrapper = shallow(<UnconnectedCongrats store={store} {...props} />);
            const button = findTestAttr(wrapper, 'play-again');
            button.simulate('click');
            const clearGuessesCalls = clearGuessesMock.mock.calls.length;
            expect(clearGuessesCalls).toBe(1);
        });
    })
});
