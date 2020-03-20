import React, { Fragment as F} from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Styles from './Congrats.scss';
import { clearGuesses } from '../../store/actions/guessWord.action';
import { getSecretWord } from '../../store/actions/secretWord.action';
/**
 * Functional component that returns congratulations message
 * @function
 * @param {object} props
 * @returns {JSX.Element}
 */

export const Congrats = (props) => {
    const { success, secretWord, clearGuesses } = props;
    return(
        <div className={[Styles.neu_container,Styles.greenBG].join(" ")} data-test="congrats-component">
            { success ?
                <F>
                    <span data-test="congrats-message">Parabéns você descobriu a palavra secreta! 
                        <b data-test="secret-word">{secretWord}</b>!
                    </span>
                    <button type="button" data-test="play-again" onClick={()=>clearGuesses()}>Jogar novamente</button>
                </F>:
                ''
            }
        </div>
    )
};

Congrats.propTypes = {
    success: PropTypes.bool.isRequired,
    secretWord: PropTypes.string.isRequired
};

const mapDispatchToProps = dispatch =>{
    return{
        clearGuesses: ()=> {
            dispatch(clearGuesses());
            dispatch(getSecretWord());
        }
    }
}

export default connect(null, mapDispatchToProps)(Congrats);
