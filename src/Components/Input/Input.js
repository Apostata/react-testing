import React, { Component }from 'react';
import { connect } from 'react-redux';
import { guessWord } from '../../store/actions/guessWord.action';

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
    }

    render(){
        const { success } = this.props;
        let toRender = success ? null : 
            <form className="form-inline" >
                <input
                    type="text"
                    data-test="input-box" 
                    placeholder="Adivinhe a palavra certa"
                    value={this.state.currentGuess}
                    onChange={(e)=>this.changeIput(e)}
                />
                <button type="submit" data-test="submit-button" onClick={(e)=>this.submitGuess(e)}>
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
const mapDispatchToProps = () =>{
    return {
        guessWord: (word) => guessWord(word)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Input);