export enum ETypesAction {
    GET_CONSTRUCTOR_ELEMENTS = "GET_CONSTRUCTOR_ELEMENTS",
    GET_CONSTRUCTOR_ELEMENTS_SUCCESS = "GET_CONSTRUCTOR_ELEMENTS_SUCCESS",
    GET_CONSTRUCTOR_ELEMENTS_ERROR = "GET_CONSTRUCTOR_ELEMENTS_ERROR",
    INCREMENT = "INCREMENT",
    DECREMENT = "DECREMENT",
    CLEAR_COUNT = "CLEAR_COUNT",
    SET_INGREDIENT_INFO = "SET_INGREDIENT_INFO",
    CLEAR_INGREDIENT_INFO = "CLEAR_INGREDIENT_INFO",
    ADD_INGREDIENT = "ADD_INGREDIENT",
    DELETE_INGREDIENT = "DELETE_INGREDIENT",
    MOVE_INGREDIENT = "MOVE_INGREDIENT",
    SET_INGREDIENT = "SET_INGREDIENT",
    GET_ORDER = "GET_ORDER",
    GET_ORDER_SUCCESS = "GET_ORDER_SUCCESS",
    GET_ORDER_ERROR = "GET_ORDER_ERROR",
    LOGIN = "LOGIN",
    LOGIN_SUCCESS = "LOGIN_SUCCESS",
    LOGIN_ERROR = "LOGIN_ERROR",
    WS_CONNECTION_START = "WS_CONNECTION_START",
    WS_CONNECTION_CLOSED = "WS_CONNECTION_CLOSED",
    WS_CONNECTION_ERROR = "WS_CONNECTION_ERROR",
    WS_CONNECTION_SUCCESS = "WS_CONNECTION_SUCCESS",
    WS_CONNECTION_START_USER = "WS_CONNECTION_START_USER",
    WS_CONNECTION_CLOSED_USER = "WS_CONNECTION_CLOSED_USER",
    WS_CONNECTION_ERROR_USER = "WS_CONNECTION_ERROR_USER",
    WS_CONNECTION_SUCCESS_USER = "WS_CONNECTION_SUCCESS_USER",
    WS_GET_ALL_FEEDS = "WS_GET_ALL_FEEDS",
    WS_GET_USER_FEEDS = "WS_GET_USER_FEEDS",
    WS_SEND_MESSAGE = "WS_SEND_MESSAGE",
    WS_SEND_MESSAGE_USER = "WS_SEND_MESSAGE_USER",
    ClEAR_BURGER = "ClEAR_BURGER",
}

export interface TwsActions {
    init: ETypesAction,
    sendMessage: ETypesAction,
    onOpen: ETypesAction,
    onClose: ETypesAction,
    onError: ETypesAction,
    onMessage: ETypesAction
}

export const wsActions: TwsActions = {
    init: ETypesAction.WS_CONNECTION_START,
    sendMessage: ETypesAction.WS_SEND_MESSAGE,
    onOpen: ETypesAction.WS_CONNECTION_SUCCESS,
    onClose: ETypesAction.WS_CONNECTION_CLOSED,
    onError: ETypesAction.WS_CONNECTION_ERROR,
    onMessage: ETypesAction.WS_GET_ALL_FEEDS
};

export const wsUserActions: TwsActions = {
    init: ETypesAction.WS_CONNECTION_START_USER,
    sendMessage: ETypesAction.WS_SEND_MESSAGE_USER,
    onOpen: ETypesAction.WS_CONNECTION_SUCCESS_USER,
    onClose: ETypesAction.WS_CONNECTION_CLOSED_USER,
    onError: ETypesAction.WS_CONNECTION_ERROR_USER,
    onMessage: ETypesAction.WS_GET_USER_FEEDS
};

export interface ConstructorElementsActionType {
    type: ETypesAction,
    ingredients?: Ingredient[],
    id?: string
}

export interface IngredientInfoActionType {
    type: ETypesAction,
    ingredient?: Ingredient
}

export interface UserActionType {
    type: ETypesAction,
    user?: User
}

export enum ETypesIngredient {
    BUN = "bun",
    SAUCE = "sauce",
    MAIN = "main"
}

export interface Ingredient {
    id?: string,
    "_id": string,
    "name": string,
    "type": ETypesIngredient,
    "proteins": number,
    "fat": number,
    "carbohydrates": number,
    "calories": number,
    "price": number,
    "image": string,
    "image_mobile": string,
    "image_large": string,
    "__v": number,
    count?: number,
    index?: number
}

export interface IngredientsActionType {
    type: ETypesAction,
    ingredient: Ingredient,
    index?: number,
    newIndex?: number
}

export interface OrderDetailsActionType {
    type: ETypesAction,
    order: {
        name: string,
        order: {
            number: number
        }
    }
}

export interface Order {
    orderDetails?: {
        name: string,
        order: {
            number: number
        }
    },
    failed: boolean,
    request: boolean
}

export interface IOrderInfo {
    createdAt: string,
    ingredients: string[],
    name: string,
    number: number,
    status: string,
    updatedAt: string,
    _id: string,
}

export interface User {
    email: string,
    name: string
}

export interface TWSActions {
    type: ETypesAction
}

export type TAppActions =
    OrderDetailsActionType
    | IngredientsActionType
    | UserActionType
    | IngredientInfoActionType
    | ConstructorElementsActionType;