import {CHANGE_GAME_STATE} from '../constants';

export const set_game_state = (data) => {
    return {
        type: CHANGE_GAME_STATE, payload : data
    }
};