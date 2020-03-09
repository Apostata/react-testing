import React, { Component }from 'react';
import { connect } from 'react-redux';

class Input extends Component {
    render(){
        const { success } = this.props;
        let toRender = success ? null : 
            <form className="form-inline">
                <input
                    type="text"
                    data-test="input-box" 
                    placeholder="Adivinhe a palavra certa" 
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

const mapStateToProps = ({success}) =>{
    return { success };
};

export default connect(mapStateToProps)(Input);