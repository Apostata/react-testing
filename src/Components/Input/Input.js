import React from 'react';
import { useStore } from '../../store/configure.store';

const Input = props => {
    const [globalstate, dispatch] = useStore(true)
    const { success } = globalstate;
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

export default Input;