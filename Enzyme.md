# Enzyme

Usa cria os componentes usando o REACT DOM para testar páginas, permite o acesso aos props e states.
referência da docs: `https://airbnb.io/enzyme/docs/api/`;

##  Shallow
Renderiza o componente, não renderizando os componentes filhos, apenas mostrando a tag deles.

Exemplo:

````
import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

import App from './App';
Enzyme.configure({ adapter: new EnzymeAdapter()});

console.log(process.env.COMPONENTS_PATH);
it('Runs without error', ()=>{
   const wrapper = shallow(<App/>);
});
````

## Criando um arquivo de configuração global e setando jest.config.js para os teste
criar um arquivo de configuração, `setupTests.js`:

````
import Enzyme from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

global.context = describe;
// const path = process.env.COMPONENTS_PATH;

Enzyme.configure({ 
    adapter: new EnzymeAdapter(),
    disableLifecycleMethods: true, 
});
````

**disableLifecycleMethods: true - serve para só executar os metodos de lifeCycle quando solicitado e não todas automaticamento quando um componente é criado com o metodo shallow**

Instalar o pacote: `identity-obj-proxy` como dependencia de desenvolvimento. Para ignorar os arquivos
de imagens, fontes e css que não necessitam de testes: `npm i -D identity-obj-proxy`.

criar um arquivo se não existir chamado `jest.config.js`:
````
module.exports = {
    // seta os mocks para imagens e fontes e proxy para css
    setupFilesAfterEnv: ['<rootDir>/src/specs/setupTests.js'],
    moduleNameMapper: {
        "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
        "<rootDir>/specs/__mocks__/fileMock.js",
        "\\.(css|less|scss)$": "identity-obj-proxy"
    },
    modulePathIgnorePatterns:['<rootDir>/server']
}
````

então primeiro exemplo, ficaria:

````
import React from 'react';
import Enzyme, { shallow } from 'enzyme';

import App from './App.js';

console.log(process.env.COMPONENTS_PATH);
it('Runs without error', ()=>{
   const wrapper = shallow(<App/>);
});
````

### metodo debug()
Retorna o DOM como string.

Usaremo o componente App com a seguinte confuguração:

````
import React from 'react';

const App = props => {
  
  return (
    <h1>Hello from React component!</h1>
  );
}

export default App;
````

exemplo:

````
...
it('Runs without error', ()=>{
   const wrapper = shallow(<App/>);
   console.log(wrapper.debug());
});
...
````

irá retornar:
````
<h1>
    Hello from React component!
</h1>
````

## metodo Find()
Como no jQuqey ou css, para selecionar um elemento do DOM específico:

exemplo:

````
...
it('Runs without error', ()=>{
   const wrapper = shallow(<App/>);
   const testComponent = wrapper.find('[data-test="component-app"]');
});
...
````

### simulando un evento
com o metodo find achamos o nó que queremos e podemos usar o metodo `smiulate()`, para 
acionar um envento. No exemplo abaixo usaremos uma uma função mocada para verificar se ela foi executada uma unica vez.
**para passar o preventDefault como argumento basta : .simulate('click', { preventDefault(){} })**

exemplo:

````
...
 it('Should call guessWord action on submit button click\'s', ()=>{
    const guessWordMock = jest.fn();
    const wrapper = shallow(<UnconnectedInput guessWord={guessWordMock}/>);
    findTestAttr(wrapper, 'submit-button').simulate('click');
    const guessWordMockCalls = guessWordMock.mock.calls.length;
    expect(guessWordMockCalls).toBe(1);
});
...
````

## metodos state() e setState()
State() pega o stado atual
**Nota: apenas para componentes de classe**
````
it('counter start at 0', () => {
   const wrapper = shallow(<App/>);
   wrapper.setState()
   const initialCounter = wrapper.state('counter');
   expect(initialCounter).toBe(0);
 });  
````


### Removendo attributos data-test para produção

`npm i -D babel-plugin-react-remove-properties`
no arquivo .babelrc ou babel.config.js:

````
...
env: {
    production: {
        plugins: [
            [
                "react-remove-properties", {
                    properties: [
                        "data-test"
                    ]
                }
            ]
        ]
    }
}
...
````

### Testando propriedades (props)
`npm i --save prop-types`
`npm i -D check-prop-types`

no componente importar checkPropTypes de check-prop-tyes

a função checkPropTypes recebe:
1. as prop-types do componente
2. as propriedades recebidas pelo componente
3. a localização: props
4. nome do componente


````
import checkPropTypes from 'check-prop-types'
...

export const checkProp = (component, props) =>{
    const propError = checkPropTypes(
        component.propTypes, 
        props,
        'props',
        component.name
    );
    
    expect(propError).not.toBeUndefined();
}
````



## Mount 
Renderiza o componenet e seus filhos


## Testando states e componentes conectados

### Criando store para testes
Importar rootReducer no componente

criando uma factory para o criar a store para os testes

````
import rootReducer from '../store/reducers';
import { createStore } from 'redux';

export const storeFactory = (initialState) =>{
   return createStore(rootReducer, initialState)
};
````

No setup do componente de teste

````
const setup = (initialState={}) =>{
    const store = storeFactory(initialState);
    const wrapper = shallow(<Input store={store}/>);
    console.log(wrapper.debug());
};
````

vai retornar um componente de alta ordem:
````
<ContextProvider value={{...}}>
    <Input store={{...}} dispatch={[Function: dispatch]} />
</ContextProvider>
````

### metodo dive() para testar alterações no state passando store para props
````
const setup = (initialState={}) =>{
    const store = storeFactory(initialState);
    const wrapper = shallow(<Input store={store}/>).dive();
    console.log(wrapper.debug());
};
````

vai retornar o componente mas não o que há nele:
````
<Input store={{...}} dispatch={[Function: dispatch]} />
````

para retornar o que há nele temos que ir mais fundo:
````
const setup = (initialState={}) =>{
    const store = storeFactory(initialState);
    const wrapper = shallow(<Input store={store}/>).dive().dive();
    console.log(wrapper.debug());
};
````

### metodo instance()
Retorna o component react.

#### instance().props
Acessa as props do componente 

#### instance().componentDidMount()
**Para testar LifeCyles, é necessário desabilita-los nas configurações do enzyme**
Testa metodos de lifeCycle dos componentes, neste caso `componentDidMount`
