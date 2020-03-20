import React from 'react';
import PropTypes from 'prop-types';
import Styles from './GuessedWords.scss';

export const GuessedWords = (props) => {
    const { guessedWords } = props;
    const renderGuessedWord = (guessedWordsArr) =>{
        return guessedWordsArr.map((guessedWord, idx) => {
            return(
                <tr key="idx" data-test="guessed-word">
                    <td className={[Styles.neu_container, Styles.iverted, Styles.ltt_margin].join(" ")}>{guessedWord.guessedWord}</td>
                    <td className={[Styles.neu_container, Styles.iverted, Styles.ltt_margin].join(" ")}>{guessedWord.letterMatchCount}</td>
                </tr>
            )
        })
    };

    return (
        <div data-test="component-guessed-word" className={[Styles.neu_container, Styles.no_shadow, Styles.start, Styles.no_margin].join(" ")}>
            { guessedWords.length > 0 ? 
                <table data-test="guessed-words" className={[Styles.neu_container, Styles.ltt_padding, Styles.no_margin].join(" ")}>
                    <thead>
                        <tr>
                            <td className={[Styles.ltt_margin].join(" ")}>Palavra</td>
                            <td className={[Styles.ltt_margin].join(" ")}>Letras certas</td>
                        </tr>
                    </thead>
                    <tbody >
                        {renderGuessedWord(guessedWords)}
                    </tbody>
                </table> :
                <span data-test="guess-instructions">
                    Tente adivinhar a palavra secreta!
                </span>
            }
        </div>
    );
};

GuessedWords.propTypes = {
    guessedWords: PropTypes.arrayOf(
        PropTypes.shape({
            guessedWord: PropTypes.string.isRequired,
            letterMatchCount: PropTypes.number.isRequired
        })
    ).isRequired,
};

export default GuessedWords;