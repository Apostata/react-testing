import React from 'react';
import Styles from './Congrats.scss';

import languageContext from '../../contexts/languageContext'
import successContext from '../../contexts/successContext';

import { getStringByLanguage } from '../../helpers/strings';
/**
 * Functional component that returns congratulations message
 * @function
 * @param {object} props
 * @returns {JSX.Element}
 */

export const Congrats = (props) => {
    const language = React.useContext(languageContext);
    const [success] = successContext.useSuccess();
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

export default Congrats;
