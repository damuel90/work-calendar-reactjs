import { SELECT_CATEGORY } from '../constants';

const initialState = {};

export const category = (state=initialState, action) => {
    switch (action.type) {
        case SELECT_CATEGORY:
            let newState = {};
            if(action.payload.id!==state.id) newState=action.payload;
            return newState;
        default:
            return state;
    }
}