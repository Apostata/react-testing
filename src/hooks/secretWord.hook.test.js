import moxios from 'moxios';
import { getSecretWord } from './secretWord.hook';

describe('getSecretWord hook', ()=>{
    beforeEach(()=>{
        moxios.install();
    });

    afterEach(()=>{
        moxios.uninstall();
    });

    it('Should get secretWord from resquest', async ()=>{
        const secretWord = 'party';

        moxios.wait(()=>{
            const resquest = moxios.requests.mostRecent();
            resquest.respondWith({
                status: 200,
                response: secretWord
            })
        });

        const secretWordReducerMock = jest.fn();
        await getSecretWord(secretWordReducerMock);
        expect(secretWordReducerMock).toHaveBeenCalledWith(secretWord);
    });
});