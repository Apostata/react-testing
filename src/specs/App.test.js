import React from 'react';
import Enzyme, { shallow, ShallowWrapper } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

import App from '../app_index';

const path = process.env.COMPONENTS_PATH;

Enzyme.configure({ adapter: new EnzymeAdapter()});



/**
 * Factory function to create shallow wrapper for App component
 * @function setup
 * @param {object} props - componet props specific to this setup 
 * @param {object} state - component state
 * @returns {ShallowWrapper} 
 */
const setup = ( props = {}, state = null) => {
   const wrapper =  shallow(<App {...props} />);
   if(state) wrapper.setState(state);
   return wrapper;
};

/**
 * Factory function to find node by data-test attribute with given value 
 * @function findDataTestAttr
 * @param {ShallowWrapper} wrapper 
 * @param {string} selector 
 * @returns {ShallowWrapper}
 */
const findDataTestAttr = (wrapper, selector) => {
   return wrapper.find(`[data-test='${selector}']`)
};

it('Runs without error', () => {
   const wrapper = setup();
   const testData = findDataTestAttr(wrapper, 'app-component');
   expect(testData.length).toBe(1);
});     

it('Renders increment button', () => {
   const wrapper = setup();
   const button = findDataTestAttr(wrapper, 'increment-button');
   expect(button.length).toBe(1);
 });   

 it('Renders decrement button', () => {
   const wrapper = setup();
   const button = findDataTestAttr(wrapper, 'decrement-button');
   expect(button.length).toBe(1);
 });   
 
 it('Renders count display', () => {
   const wrapper = setup();
   const h1 =  findDataTestAttr(wrapper,'counter-display');
   expect(h1.length).toBe(1);
 });   

 if(path === './src/with-class'){
   it('counter start at 0', () => {
      const wrapper = setup();
      const initialCounter = wrapper.state('counter');
      expect(initialCounter).toBe(0);
   });  
   
   it('click button increments the counter', () => {
      const initialCounter = 2;
      const wrapper = setup(null, {counter: initialCounter});

      const button = findDataTestAttr(wrapper, 'increment-button');
      button.simulate('click');

      const h1 =  findDataTestAttr(wrapper,'counter-display');
      expect(h1.text()).toContain(initialCounter + 1)
   });  

   it('click button decrements the counter', () => {
      const initialCounter = 1;
      const wrapper = setup(null, {counter: initialCounter});

      const button = findDataTestAttr(wrapper, 'decrement-button');
      button.simulate('click');

      const h1 =  findDataTestAttr(wrapper,'counter-display');
      expect(h1.text()).toContain(initialCounter - 1)
   });  

   it('click button show message tha counter can\'t be lesser than 0', () => {
      const initialCounter = 0;
      const wrapper = setup(null, {counter: initialCounter});

      const button = findDataTestAttr(wrapper, 'decrement-button');
      button.simulate('click');

      const h1 =  findDataTestAttr(wrapper,'counter-display');
      expect(h1.text()).toBe('Contador não pode ser menor do que 0');
   });  
}