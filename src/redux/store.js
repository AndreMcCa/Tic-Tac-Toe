import { combineReducers, createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import game from "./game/reducer";

const rootReducer = combineReducers({ game });
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
