import React from 'react';
import Enzyme, { shallow, ShallowWrapper } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

import App from '../app_index';

const path = process.env.COMPONENTS_PATH;

Enzyme.configure({ adapter: new EnzymeAdapter()});
