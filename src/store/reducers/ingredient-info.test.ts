import {ETypesAction, ETypesIngredient, Ingredient} from "../actions/types";
import {ingredientInfo} from "./ingredient-info";

const ingredient: Ingredient = {
    id: '0',
    "_id": '0',
    "name": 'test',
    "type": ETypesIngredient.BUN,
    "proteins": 1,
    "fat": 1,
    "carbohydrates": 1,
    "calories": 1,
    "price": 1,
    "image": 'test.img',
    "image_mobile": 'test.img',
    "image_large": 'test.img',
    "__v": 1,
    count: 2,
    index: 1
}
describe('ingredientInfo reducer', () => {
    it('should return the initial state', () => {
        // @ts-ignore
        expect(ingredientInfo(undefined, {type: null})).toEqual(null)
    })
    it('set ingredient info', () => {
        expect(ingredientInfo(undefined, {
            type: ETypesAction.SET_INGREDIENT_INFO,
            ingredient: ingredient
        })).toEqual(ingredient)
    })
    it('clear ingredient info', () => {
        expect(ingredientInfo(ingredient, {
            type: ETypesAction.CLEAR_INGREDIENT_INFO
        })).toEqual(null)
    })
});