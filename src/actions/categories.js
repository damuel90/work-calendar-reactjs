import { ADD_CATEGORY, DELETE_CATEGORY, ADD_DAY, DELETE_DAY } from '../constants';

export const addCategory = payload => ({
    type:ADD_CATEGORY,
    payload
});

export const deleteCategory = payload => ({
    type:DELETE_CATEGORY,
    payload
});

export const addDay = payload => ({
    type:ADD_DAY,
    payload
});

export const deleteDay = payload => ({
    type:DELETE_DAY,
    payload
});