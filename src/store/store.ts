import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import {ingredients} from "./reducers/ingredients";
import thunk from "redux-thunk";
import {constructorElements} from "./reducers/constructor-elements";
import {ingredientInfo} from "./reducers/ingredient-info";
import {orderDetails} from "./reducers/order-details";
import {user} from "./reducers/user";

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

const composeEnhancers = process.env.NODE_ENV === 'development' ? (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose) : compose;

const enhancer = composeEnhancers(applyMiddleware(thunk));

export const listApp = combineReducers({
    ingredients,
    constructorElements,
    ingredientInfo,
    orderDetails,
    user
});
export const store = createStore(listApp,
    {},
    enhancer);

export type IRootState = ReturnType<typeof listApp>;