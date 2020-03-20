import moxios from 'moxios';
import { storeFactory } from '../../specs/testUtils';
import { getSecretWord } from './secretWord.action';
// import { axiosinstance } from './someFile'

describe('Secret word', ()=>{
    beforeEach(()=>{
        // moxios.install(axiosinstance) - se estiver usando uma instancia de axios
        moxios.install();
    });

    afterEach(()=>{
        moxios.uninstall();
    });

    // integration test
    it('Should add secretWord from response to state', async ()=> {
        const secretWord = 'party';
        const store = storeFactory();

        moxios.wait(()=>{
            const request = moxios.requests.mostRecent();
            request.respondWith({
                status: 200,
                response: secretWord
            });
        });

        await store.dispatch(getSecretWord());
        const newState = store.getState();
        expect(newState.secretWord).toBe(secretWord);

    });
});