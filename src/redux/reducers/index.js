import { combineReducers } from "redux";
import { gameReducer } from "./game";

const reducers = combineReducers({
    gameData: gameReducer
})

export default reducers;