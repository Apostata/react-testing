import React from 'react';
import { findTestAttr } from '../specs/testUtils';
import { mount, render } from 'enzyme';
import App from './App';
import Actions from '../hooks';

const getSecretWordMock = jest.fn();
/**
 * setup function for app component
 * To test useEffect, mount is needed instead of shallow 21/03/2020
 * https://github.com/airbnb/enzyme/issues/2086
 * @function setup
 * @returns {ReactWrapper}
 */
const setup = (secretWord = 'party') =>{
    getSecretWordMock.mockClear(); //Limpa o mock para o próximo teste
    React.useReducer = jest.fn().mockReturnValue([
        { secretWord },
        jest.fn()
    ])
    Actions.getSecretWord = getSecretWordMock;
    const wrapper = mount(<App/>);
    return wrapper;
}

describe('App Component', ()=>{
    describe('render', ()=>{
        it('Should render component without error', ()=>{
            const wrapper = setup();
            const element = findTestAttr(wrapper, 'app-component');
            expect(element.length).toBe(1);
        })
    });

    describe('lifecycles', ()=>{
        it('Should run getSecretWord on component mount', ()=>{
            setup();
            expect(getSecretWordMock).toHaveBeenCalledTimes(1);
        });

        it('Should not run getSecretWord on component update', ()=>{
            const wrapper = setup();
            getSecretWordMock.mockClear();
            wrapper.setProps();
            expect(getSecretWordMock).not.toHaveBeenCalled();
        });

        describe('SecretWord state', ()=>{
            context('secretWord null', ()=>{
                let wrapper;
                beforeEach(()=>{
                    wrapper = setup(null);
                });

                it('Should not renders the app when secret word is null', ()=>{
                    const element = findTestAttr(wrapper, 'app-component');
                    expect(element.exists()).toBe(false);
                });

                it('Should renders the spinner when secret word is null', ()=>{
                    const element = findTestAttr(wrapper, 'spinner');
                    expect(element.exists()).toBe(true);
                });
            });

            context('secretWord not null', ()=>{
                let wrapper;
                beforeEach(()=>{
                    wrapper = setup('party');
                });

                it('Should renders the app when secret word not null', ()=>{
                    const element = findTestAttr(wrapper, 'app-component');
                    expect(element.exists()).toBe(true);
                });

                it('Should not renders the spinner when secret word is not null', ()=>{
                    const element = findTestAttr(wrapper, 'spinner');
                    expect(element.exists()).toBe(false);
                });
            });
        });
    });
})