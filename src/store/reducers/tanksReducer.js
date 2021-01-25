import {GAME_TANKS} from '../constants';

const initState = "abrams.png";

const tanksReducer = (state= initState,{type,payload}) => {
    switch (type) {
        case GAME_TANKS:
            return payload;
        default:
            return state;
    }
}

export default tanksReducer;