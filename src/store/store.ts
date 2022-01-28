import {combineReducers, createStore} from "redux";
import {ingredients} from "./ingredients/reducers";

export const listApp = combineReducers({
    ingredients
});
export const store = createStore(listApp);