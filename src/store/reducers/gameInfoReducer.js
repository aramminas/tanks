import {CHANGE_GAME_INFO} from '../constants';

const initState = {
    life: 100,
    enemy: 10,
    x: 50,
    y: 600,
    height: 53,
    width: 140,
    pos: "p-0-",
    eX: undefined,
    eY: undefined,
    eHeight: undefined,
    eWidth: undefined,
    ePos: undefined,
};

const gameInfoReducer = (state= initState,{type,payload}) => {
    switch (type) {
        case CHANGE_GAME_INFO:
            return {...state, ...payload};
        default:
            return state;
    }
}

export default gameInfoReducer;