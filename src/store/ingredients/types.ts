export enum ETypesAction {
    ADD = "ADD",
    DELETE = "DELETE",
    MOVE = "MOVE",
    SET = "SET"
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