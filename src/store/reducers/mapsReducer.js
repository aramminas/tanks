import {GAME_MAP} from '../constants';

const initState = "primary.png";

const mapsReducer = (state= initState,{type,payload}) => {
    switch (type) {
        case GAME_MAP:
            return payload;
        default:
            return state;
    }
}

export default mapsReducer;