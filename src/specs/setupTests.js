import Enzyme from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

// const path = process.env.COMPONENTS_PATH;

Enzyme.configure({ adapter: new EnzymeAdapter()});