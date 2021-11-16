import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import { composeWithDevTools } from "redux-devtools-extension";
import reducer from "./game/reducer";

const rootReducer = combineReducers({ game: reducer });
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
export default store;
