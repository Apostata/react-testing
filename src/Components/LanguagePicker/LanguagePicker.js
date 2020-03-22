import React from 'react';
import PropTypes from 'prop-types';
import Styles from './LanguagePicker.scss';

export const LanguagePicker = props =>{
    const { setLanguage } = props;
    const languages = [
        {code: 'pt_br', symbol: <i className="em em-flag-br"></i>},
        {code: 'emoji', symbol: '😊'},
        {code: 'en', symbol: <i className="em em-flag-um"></i>}
    ];

    const renderFlags = ()=>{
    return languages.map((locale,idx)=> 
        <span data-test="language-icon" key={idx} onClick={()=>setLanguage(locale.code)}>{locale.symbol}</span>)
    }
    return(
        <div data-test="languagePicker-component" className={[Styles.neu_container, Styles.no_shadow, Styles.ltt_padding].join(' ')}>
            {renderFlags()}
        </div>
    )
};

LanguagePicker.propTypes = {
    setLanguage: PropTypes.func.isRequired
};

export default LanguagePicker;