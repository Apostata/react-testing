import React from 'react';
import Styles from './GuessedWords.scss';
import languageContext from '../../contexts/languageContext';
import { getStringByLanguage } from '../../helpers/strings';
import guessedWordsContext from '../../contexts/guessedWordsContext';

export const GuessedWords = (props) => {
    const language = React.useContext(languageContext);
    const [guessedWords] = guessedWordsContext.useGuessedWords();

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
                            <td className={[Styles.ltt_margin].join(" ")}>{getStringByLanguage(language, 'guessColumnHeader')}</td>
                            <td className={[Styles.ltt_margin].join(" ")}>{getStringByLanguage(language,'matchingLettersColumnHeader')}</td>
                        </tr>
                    </thead>
                    <tbody >
                        {renderGuessedWord(guessedWords)}
                    </tbody>
                </table> :
                <span data-test="guess-instructions">
                    {getStringByLanguage(language, 'guessPrompt')}
                </span>
            }
        </div>
    );
};

export default GuessedWords;