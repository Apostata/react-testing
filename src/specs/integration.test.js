import { storeFactory } from './testUtils';
import { guessWord } from '../store/actions/guessWord.action';

describe('guessWord action dispatcher', () => {
    const secretWord = 'party';
    const unsusuccessfulGuess = 'train';

    context('no guessed words', ()=>{
        let store;
        const initialState = { secretWord };
        beforeEach(() => {
            store = storeFactory(initialState);
        });

        it('Should update state correct for unssuccessful guess', ()=>{
            store.dispatch(guessWord(unsusuccessfulGuess));
            const newState = store.getState();
            const expectedState = {
                ...initialState,
                success:false,
                guessedWords:[
                    {
                        guessedWord: unsusuccessfulGuess,
                        letterMatchCount: 3
                    }
                ]
            };
            expect(newState).toEqual(expectedState)
        });

        it('Should update state correct for successful guess', ()=>{
            store.dispatch(guessWord(secretWord));
            const newState = store.getState();
            const expectedState = {
                ...initialState,
                success: true,
                guessedWords:[
                    {
                        guessedWord: secretWord,
                        letterMatchCount: 5
                    }
                ]
            };
            expect(newState).toEqual(expectedState);
        });
       
    });

    context('guessed words', ()=>{
        let store;
        const guessedWords = [{ guessedWord:"agile", letterMatchCount: 1 }]
        const initialState = { secretWord, guessedWords };
        beforeEach(() => {
            store = storeFactory(initialState);
        });

        it('Should update state correct for unssuccessful guess', ()=>{
            store.dispatch(guessWord(unsusuccessfulGuess));
            const newState = store.getState();
            const expectState = {
                ...initialState,
                success: false,
                guessedWords:[
                    ...guessedWords,
                    {
                        guessedWord: unsusuccessfulGuess,
                        letterMatchCount: 3
                    }
                ]
            };
            expect(newState).toEqual(expectState);
        });

        it('Should update state correct for successful guess', ()=>{
            store.dispatch(guessWord(secretWord));
            const newState = store.getState();
            const expectState = {
                ...initialState,
                success: true,
                guessedWords:[
                    ...guessedWords,
                    {
                        guessedWord: secretWord,
                        letterMatchCount: 5
                    }
                ]
            };
            expect(newState).toEqual(expectState);
        });
       
    });
});