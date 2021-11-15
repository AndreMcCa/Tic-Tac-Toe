import { combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import gameReducer from "./game/game-reducer";

const rootReducer = combineReducers({ game: gameReducer });

const store = createStore(rootReducer, composeWithDevTools());

export default store;
