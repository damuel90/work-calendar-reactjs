import { ADD_CATEGORY, DELETE_CATEGORY, ADD_DAY, DELETE_DAY } from '../constants';

const stateInitial = [
    {
        name:'Work',
        color:'red',
        id:'0',
    },
    {
        name:'Vacations',
        color: 'green',
        id:'1',
    }
];

const updateCategory = (state, data, add) => {
    const newState = state.reduce((accum, category) => {
        if(data.id===category.id) {
            let month = category[data.month]?[...category[data.month]]:[];
            if(add) {
                if(month.includes(data.number))  return [...accum, category];
                month = [...month, data.number];
                const newCategory = {...category, [data.month]:month};
                return [...accum, newCategory];
            } else {
                let otherMonth = month.filter(day=>day!==data.number);
                const newCategory = {...category, [data.month]:otherMonth};
                return [...accum, newCategory];
            }
        }
        return [...accum, category];
    },[])
    return newState
};

export const categories = (state=stateInitial, action) => {
    switch (action.type) {
        case ADD_CATEGORY:
            return [...state, action.payload];
        case DELETE_CATEGORY:
            return state.filter(category=>category.id!==action.payload);
        case ADD_DAY:
            return updateCategory(state, action.payload, true);
        case DELETE_DAY:
            return updateCategory(state, action.payload, false);
        default:
            return state;
    }
};