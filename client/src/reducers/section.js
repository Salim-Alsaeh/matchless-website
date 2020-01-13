import { LOAD_SECTIONS_DATA, LOAD_SECTIONS_DATA_FAIL } from '../actions/types';

const INITIAL_STATE = {
    collections: {}
};

const sectionReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case LOAD_SECTIONS_DATA:
            return {
                ...state,
                collections: action.payload
            };
        default:
            return state;
    }
};

export default sectionReducer;
