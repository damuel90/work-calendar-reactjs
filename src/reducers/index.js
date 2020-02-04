import { combineReducers } from 'redux';
import { categories } from './categories';
import { category } from './category';

export default combineReducers({
    categories,
    category,
})