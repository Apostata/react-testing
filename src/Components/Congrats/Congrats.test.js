import React from 'react';
import { shallow, mount } from 'enzyme';
import Congrats from './Congrats';
import { findTestAttr, checkProp } from '../../specs/testUtils';

import languageContext from '../../contexts/languageContext';
import successContext from '../../contexts/successContext';

/**
 * Factory function to setup initial that returns ShallowWrapper for Congrats component
 * @function setupMount
 * @param {object} props 
 * @returns {ReactWrapper}
 */
const setupMount = (success=false, language='pt_br') =>{
   
    const wrapper = mount(
        <languageContext.Provider value={language}>
            <successContext.SuccessProvider value={[success, jest.fn()]}>
                <Congrats />
            </successContext.SuccessProvider>
        </languageContext.Provider>
    )
    //no caso do SuccessProvider, passando value, reescreve o a prop value para mock passado
    return wrapper;
};

describe('Congrats Component', () => {
    describe('Language context', ()=>{
        it('Should render congrats string in Brazilian portuguese', ()=>{
            const wrapper = setupMount(true);
            expect(wrapper.text()).toBe('Parabéns! Você acertou a palavra secreta!');
        });

        it('Should render congrats string in emoji', ()=>{
            const wrapper = setupMount(true, 'emoji');
            expect(wrapper.text()).toBe('🎯🎉');
        });

        it('Should render congrats string in english', ()=>{
            const wrapper = setupMount(true, 'en');
            expect(wrapper.text()).toBe('Congratulations! You guessed the word!');
        });
    });

    it('Should render without error', ()=>{
        const wrapper = setupMount();
        const node = findTestAttr(wrapper, 'congrats-component');
        expect(node.length).toBe(1);
    });

    it('Shouldn\'t render text when success prop is false', ()=>{
        const wrapper = setupMount(false);
        const node = findTestAttr(wrapper, 'congrats-component');
        expect(node.text()).toBe('');
    });

    it('Should render text when success prop is true', ()=>{
        const wrapper = setupMount(true);
        const node = findTestAttr(wrapper, 'congrats-message');
        expect(node.length).not.toBe(0);
    });
});
