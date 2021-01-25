import {GAME_TANKS} from '../constants';

export const set_tank_data = (data) => {
    return {
        type: GAME_TANKS, payload : data
    }
};