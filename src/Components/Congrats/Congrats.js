import React from 'react';


/**
 * Function component that returns congratulations message
 * @function
 * @returns {JSX.Element}
 */
export default (props) => {
    const { success } = props;
    return(
        <div data-test="congrats-component">
            { success ?
                <span data-test="congrats-message">Parabéns você descobriu a palavra secreta!</span> :
                ''
            }
        </div>
    )
}
