import React from 'react';
import PropTypes from 'prop-types';
import Styles from './Congrats.scss';

import languageContext from '../../contexts/languageContext'
import { getStringByLanguage } from '../../helpers/strings';
/**
 * Functional component that returns congratulations message
 * @function
 * @param {object} props
 * @returns {JSX.Element}
 */

export const Congrats = (props) => {
    const { success } = props;
    const language = React.useContext(languageContext);
    return(
        <div className={[Styles.neu_container,Styles.greenBG].join(" ")} data-test="congrats-component">
            { success ?
                <span data-test="congrats-message">
                    {getStringByLanguage(language, 'congrats')}
                </span> :
                ''
            }
        </div>
    )
};

Congrats.propTypes = {
    success: PropTypes.bool.isRequired
};

export default Congrats;
