import React from 'react';
import { findTestAttr, checkProp } from '../../specs/testUtils';
import { shallow } from 'enzyme';
import LanguagePicker from './LanguagePicker';

const mockSetLanguage = jest.fn();

const setup = ()=>{
    return shallow(<LanguagePicker setLanguage={mockSetLanguage} />)
}


describe('LanguagePicker component', ()=>{
    
    it('Should render without error', ()=>{
        const wrapper = setup();
        const element = findTestAttr(wrapper,'languagePicker-component');
        expect(element.exists()).toBe(true);
    });

    it('Should\'t throw a warning with expected props', ()=>{
        const props = {
            setLanguage : mockSetLanguage
        };
        checkProp(LanguagePicker, props);
    });

    it('Should renders non-zero language icons', ()=>{
        const wrapper = setup();
        const element = findTestAttr(wrapper, 'language-icon');
        expect(element.length).toBeGreaterThan(0);
    });

    it('Should call setLanguage prop on icon click', ()=>{
        const wrapper = setup();
        const element = findTestAttr(wrapper, 'language-icon').first(); 
        element.simulate('click');
        expect(mockSetLanguage).toHaveBeenCalledTimes(1);
        expect(mockSetLanguage).toHaveBeenCalledWith('pt_br');
    });
})