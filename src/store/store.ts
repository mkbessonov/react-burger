import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import {ingredients} from "./reducers/ingredients";
import thunk from "redux-thunk";
import {constructorElements} from "./reducers/constructor-elements";
import {ingredientInfo} from "./reducers/ingredient-info";
import {orderDetails} from "./reducers/order-details";

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

export type IRootState = ReturnType<typeof listApp>;