import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import thunk from "redux-thunk";
import homeReducer from "./home";
import profileReducer from "./profile";
import catagoryReducer from "./catagory";

const reducer = combineReducers({
  home: homeReducer,
  profile: profileReducer,
  catagory: catagoryReducer,
});

// redux-devtools
const composeEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ trace: true }) || compose;
const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));
export default store;

