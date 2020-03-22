import React from 'react';
import { shallow, mount } from 'enzyme';
import Congrats from './Congrats';
import { findTestAttr, checkProp } from '../../specs/testUtils';

import languageContext from '../../contexts/languageContext';

const defaultProps = { success: false, language:'pt_br' };


/**
 * Factory function to setup initial that returns ShallowWrapper for Congrats component
 * @function setupMount
 * @param {object} props 
 * @returns {ReactWrapper}
 */
const setupMount = (props=defaultProps) =>{
    const setupProps = {...defaultProps, ...props}
    const {language, ...componentProps} =  setupProps
    const wrapper = mount(
        <languageContext.Provider value={setupProps.language}>
            <Congrats {...componentProps} />
        </languageContext.Provider>
    )
    return wrapper;
};

describe('Congrats Component', () => {
    describe('Language context', ()=>{
        it('Should render congrats string in Brazilian portuguese', ()=>{
            const wrapper = setupMount({success:true});
            expect(wrapper.text()).toBe('Parabéns! Você acertou a palavra secreta!');
        });

        it('Should render congrats string in emoji', ()=>{
            const wrapper = setupMount({success:true, language:'emoji'});
            expect(wrapper.text()).toBe('🎯🎉');
        });

        it('Should render congrats string in english', ()=>{
            const wrapper = setupMount({success:true, language:'en'});
            expect(wrapper.text()).toBe('Congratulations! You guessed the word!');
        });
    });

    it('Should render without error', ()=>{
        const wrapper = setupMount({success:true});
        const node = findTestAttr(wrapper, 'congrats-component');
        expect(node.length).toBe(1);
    });

    it('Shouldn\'t render text when success prop is false', ()=>{
        const wrapper = setupMount();
        const node = findTestAttr(wrapper, 'congrats-component');
        expect(node.text()).toBe('');
    });

    it('Should render text when success prop is true', ()=>{
        const wrapper = setupMount({success:true});
        const node = findTestAttr(wrapper, 'congrats-message');
        expect(node.length).not.toBe(0);
    });

    it('Shouldn\'t throw warning with expected props', ()=>{
        const givenProps = {...defaultProps};
        checkProp(Congrats, givenProps);
    });
});
