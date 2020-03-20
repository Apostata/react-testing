import React from 'react';

const TotalGuesses = props => {
    const { total } =  props;
    return(
        <div data-test="total-guesses-component">
            Total Guesses : <span data-test="total">{ total }</span>
        </div>
    )
}

export default TotalGuesses;