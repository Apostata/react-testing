import Enzyme from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

global.context = describe;
// const path = process.env.COMPONENTS_PATH;

Enzyme.configure({ 
    adapter: new EnzymeAdapter(),
    disableLifecycleMethods: true,
});