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

import App from '../app_index';
Enzyme.configure({ adapter: new EnzymeAdapter()});

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

## metodos state() e setState()
State() pega o stado atual
**Nota: apenas para componentes de classe**
````
it('counter start at 0', () => {
   const wrapper = shallow(<App/>);
   wrapper.SE
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

