import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

// require all the test files in the test folder that end with Spec.js or Spec.jsx
const testsContext = require.context('.', true, /Spec.jsx?$/);
testsContext.keys().forEach(testsContext);

// output at when the test were run
console.info(`TESTS RAN AT ${new Date().toLocaleTimeString()}`);
