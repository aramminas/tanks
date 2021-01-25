import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";

/* Reducers */
import mapsReducers from "./reducers/mapsReducer";
import tanksReducers from "./reducers/tanksReducer";
import gameStateReducers from "./reducers/gameStateReducer";
import gameInfoReducer from "./reducers/gameInfoReducer";

const AllReducers = combineReducers({
    mapsData: mapsReducers,
    tanksData: tanksReducers,
    gameStateData: gameStateReducers,
    gameInfoData: gameInfoReducer,
})

const InitialState = {}
const middleware = [
    // thunk,
]

const store = createStore(
    AllReducers,
    InitialState,
    compose(composeWithDevTools(applyMiddleware(...middleware)))
)

export default store