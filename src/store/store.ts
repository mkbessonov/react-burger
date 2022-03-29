import {Action, ActionCreator, applyMiddleware, combineReducers, compose, createStore, Dispatch} from "redux";
import {ingredients} from "./reducers/ingredients";
import thunk, {ThunkAction} from "redux-thunk";
import LocalStorage from 'redux-persist/lib/storage';
import {constructorElements} from "./reducers/constructor-elements";
import {ingredientInfo} from "./reducers/ingredient-info";
import {orderDetails} from "./reducers/order-details";
import {user} from "./reducers/user";
import {persistReducer, persistStore} from "redux-persist";
import {TAppActions, wsActions, wsUserActions} from "./actions/types";
import {wsReducer} from "./reducers/ws-reducer";
import {socketMiddleware} from "./middleware/socket-middleware";

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

const persistConfig = {
    key: 'root',
    storage: LocalStorage,
    blacklist: ['ingredients', 'user', 'ingredientInfo', 'orderDetails', 'wsReducer']
};

const composeEnhancers = process.env.NODE_ENV === 'development' ? (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose) : compose;

const enhancer = composeEnhancers(applyMiddleware(thunk, socketMiddleware(wsActions), socketMiddleware(wsUserActions)));

export const listApp = combineReducers({
    ingredients,
    constructorElements,
    ingredientInfo,
    orderDetails,
    user,
    wsReducer
});
const persistedReducer = persistReducer(persistConfig, listApp);
const store = createStore(persistedReducer,
    {},
    enhancer);

export type IRootState = ReturnType<typeof listApp>;
export type AppDispatch = Dispatch<TAppActions>;
export type AppThunk<ReturnType = void> = ActionCreator<ThunkAction<ReturnType, Action, IRootState, TAppActions>>;

const persistor = persistStore(store as any);

export {
    store,
    persistor,
};