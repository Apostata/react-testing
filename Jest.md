# Jest
Biblioteca de testes já nativa do create-react-app e criada pelo facebook


Criando um teste:

````
test('Runs without error', ()=>{ 
});

ou

it('Runs without error', ()=>{ 
});

````

## Snapshot Test
Congela um componente no determinado intervalo de tempo. Não será usado no curso

## Mocking a function
para criar a penas um mock de uma função vazia para visualizar quando e se é chamada:

const funcaoMock = jest.fn();

exemplo de uso:

````
it('Should run getSecretWord action on componentDidMount', ()=>{
            
    const getSecretWordMock = jest.fn();
    const props = {
        guessedWords: [],
        getSecretWord : getSecretWordMock
    };
    const wrapper = shallow(<UnconnectApp {...props}/>);
    wrapper.instance().componentDidMount();
    const getSecretWordCalls = getSecretWordMock.mock.calls.length;
    expect(getSecretWordCalls).toBe(1);
})
````

## Testing hooks
Para testar os Hooks não poderemos usar os destructuring para importar os modulos do React:
neste caso não há como subistituir a função useContext do react por um stub customizado:

````
import React, {useContext} from 'react';
const language = useContext(LanguageContex);
````

Assim você consegue subistituir a função useContext do react por um stub customizado:

````
import React from 'react';
...
const language = React.useContext(LanguageContex);
````

