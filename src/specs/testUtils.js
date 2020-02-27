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