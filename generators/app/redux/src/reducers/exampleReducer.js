import {PRINT_HELLO} from '../actions/types';

const initialState = {
    word: "hello world"
};

export default function(state = initialState, action) {
    switch(action.type) {
        case PRINT_HELLO:
            return {
                ...state,
                word: action.payload
            }
        default:
            return state;
    }
}
