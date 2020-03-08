import checkPropTypes from 'check-prop-types'

import rootReducer from '../store/reducers';
import { createStore } from 'redux';

/**
 * Factory function to create a store based on a given initialState
 * @function storeFactory
 * @param {object} initialState 
 * @returns {Store}
 */
export const storeFactory = (initialState) =>{
   return createStore(rootReducer, initialState)
};

/**
 * Function to return a ShallowWrapper of the selected data-test attr
 * @function findTestAttr
 * @param {ShallowWrapper} wrapper 
 * @param {string} selector 
 * @returns {ShallowWrapper}
 */
export const findTestAttr = (wrapper, selector) =>{
    return wrapper.find(`[data-test="${selector}"]`);
}

export const checkProp = (component, props) =>{
    const propError = checkPropTypes(
        component.propTypes, 
        props,
        'props',
        component.name
    );
    
    expect(propError).toBeUndefined();
}