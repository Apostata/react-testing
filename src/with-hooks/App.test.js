import React from 'react';
import { findTestAttr } from '../specs/testUtils';
import { shallow } from 'enzyme';
import App from './App';

const setup = () =>{
    const wrapper = shallow(<App/>);
    return wrapper;
}

describe('App Component', ()=>{
    describe('render', ()=>{
        it('Should render component without error', ()=>{
            const wrapper = setup();
            const element = findTestAttr(wrapper, 'app-component');
            expect(element.length).toBe(1);
        })
    })
})