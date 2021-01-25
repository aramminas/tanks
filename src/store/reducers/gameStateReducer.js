import {CHANGE_GAME_STATE} from '../constants';

const initState = {
    state: 0,
};

const gameStateReducer = (state= initState,{type,payload}) => {
    switch (type) {
        case CHANGE_GAME_STATE:
            return {...state, state: payload};
        default:
            return state;
    }
}

export default gameStateReducer;