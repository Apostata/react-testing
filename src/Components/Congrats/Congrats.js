import React from 'react';
import PropTypes from 'prop-types';
import Styles from './Congrats.scss';
/**
 * Functional component that returns congratulations message
 * @function
 * @param {object} props
 * @returns {JSX.Element}
 */

const Congrats = (props) => {
    const { success } = props;
    return(
        <div className={[Styles.neu_container,Styles.greenBG].join(" ")} data-test="congrats-component">
            { success ?
                <span data-test="congrats-message">Parabéns você descobriu a palavra secreta!</span> :
                ''
            }
        </div>
    )
};

Congrats.propTypes = {
    success: PropTypes.bool.isRequired
};

export default Congrats;
