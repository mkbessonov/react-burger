import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import {ingredients} from "./ingredients/reducers";
import thunk from "redux-thunk";
import {constructorElements} from "./constructor-elements/reducers";
import {ingredientInfo} from "./ingredient-info/reducers";
import {orderDetails} from "./order-details/reducers";

const composedEnhancers = compose(
    applyMiddleware(thunk)
);

export const listApp = combineReducers({
    ingredients,
    constructorElements,
    ingredientInfo,
    orderDetails
});
export const store = createStore(listApp,
    {},
    composedEnhancers);