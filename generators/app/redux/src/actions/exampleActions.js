import {PRINT_HELLO} from './types';

export const printHello = () => dispatch => {
    dispatch({
        type: PRINT_HELLO,
        payload: "hello"
    })
};
