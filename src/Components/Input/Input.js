import React, { Component }from 'react';
import { connect } from 'react-redux';
import { guessWord } from '../../store/actions/guessWord.action';
import Styles from './Input.scss';
export class Input extends Component {
    state = {
        currentGuess: null
    };

    changeIput(e){
        this.setState({
            currentGuess: e.target.value
        });
    }

    submitGuess(e){
        const { currentGuess } = this.state;
        const { guessWord } = this.props;
        e.preventDefault();
        if(currentGuess && currentGuess.length > 0) guessWord(currentGuess);
        this.setState({
            currentGuess: ''
        });
    }


    render(){
        const { success } = this.props;
        const {currentGuess} = this.state;

        let toRender = success ? null : 
            <form 
                className={[Styles.neu_container, Styles.form_inline].join(" ")}
                data-test="guess-form" onSubmit={(e)=>this.submitGuess(e)}
                >
                <input
                    type="text"
                    data-test="input-box" 
                    placeholder="Adivinhe a palavra certa"
                    value={!currentGuess? '': currentGuess }
                    onChange={(e)=>this.changeIput(e)}
                    className={[Styles.neu_container, Styles.iverted, Styles.ltt_margin].join(" ")}
                />
                <button type="submit" data-test="submit-button">
                    Enviar
                </button>
            </form>;

        return (
            <div data-test="input-component">
                { toRender }
            </div>
        );
    }
}

const mapStateToProps = ({ success }) =>{
    return { success };
};
const mapDispatchToProps = dispatch =>{
    return {
        guessWord: (word) => dispatch(guessWord(word))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Input);