# moxios
Para mocar as chamadas do axios, simulando o backend

## moxios.install()
Inicializa o interceptor de chamadas ao axios para o adapter do moxios ao invés de uma chamada http.
**Se estiver usando uma instancia do Axios, deve ser passada como parâmetro na função:**
**`moxios.install(axiosInstance)`**

Exemplo de uso:
````
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

        const getSWord = await store.dispatch(getSecretWord());
        const newState = store.getState();
        expect(newState.secretWord).toBe(secretWord);

    });
});
````