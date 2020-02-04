import { createStore } from 'redux';
import reducers from '../reducers';

const reduxDev = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

export default createStore(reducers, {}, reduxDev);