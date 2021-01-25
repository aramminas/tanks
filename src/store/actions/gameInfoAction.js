import {CHANGE_GAME_INFO} from '../constants';

export const change_game_info_data = (data) => {
    return {
        type: CHANGE_GAME_INFO, payload : data
    }
};