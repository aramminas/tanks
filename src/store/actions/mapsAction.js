import {GAME_MAP} from '../constants';

export const set_map_data = (data) => {
    return {
        type: GAME_MAP, payload : data
    }
};