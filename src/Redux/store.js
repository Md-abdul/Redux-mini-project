import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { reducer as authReducer } from "./Auth/reducer";
import { reducer as productsReducer } from "./Products/reducer";

import thunk from "redux-thunk";

const rootReducer = combineReducers({
  authReducer,
  productsReducer,
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
