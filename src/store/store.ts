import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import {ingredients} from "./reducers/ingredients";
import thunk from "redux-thunk";
import LocalStorage from 'redux-persist/lib/storage';
import {constructorElements} from "./reducers/constructor-elements";
import {ingredientInfo} from "./reducers/ingredient-info";
import {orderDetails} from "./reducers/order-details";
import {user} from "./reducers/user";
import {persistReducer, persistStore} from "redux-persist";

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

const persistConfig = {
    key: 'root',
    storage: LocalStorage,
    blacklist: ['ingredients', 'user', 'ingredientInfo', 'orderDetails']
};

const composeEnhancers = process.env.NODE_ENV === 'development' ? (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose) : compose;

const enhancer = composeEnhancers(applyMiddleware(thunk));

export const listApp = combineReducers({
    ingredients,
    constructorElements,
    ingredientInfo,
    orderDetails,
    user
});
const persistedReducer = persistReducer(persistConfig, listApp);
const store = createStore(persistedReducer,
    {},
    enhancer);

export type IRootState = ReturnType<typeof listApp>;


const persistor = persistStore(store as any);

export {
    store,
    persistor,
};