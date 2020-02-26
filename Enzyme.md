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

## metodo state()

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

## Mount 
Renderiza o componenet e seus filhos