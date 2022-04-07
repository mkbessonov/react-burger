import {ETypesAction, ETypesIngredient, Ingredient} from "../actions/types";
import {ingredients} from "./ingredients";

const ingredientsState: Ingredient[] = [{
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
}]
describe('ingredients reducer', () => {
    it('should return the initial state', () => {
        // @ts-ignore
        expect(ingredients(undefined, {type: null, ingredients: []})).toEqual([])
    })
    it('add', () => {
        expect(ingredients(undefined, {
            type: ETypesAction.ADD_INGREDIENT,
            ingredient: ingredientsState[0]
        })).toEqual(ingredientsState)
    })
    it('delete', () => {
        expect(ingredients(ingredientsState, {
            type: ETypesAction.DELETE_INGREDIENT,
            ingredient: ingredientsState[0]
        })).toEqual([])
    })
    it('set', () => {
        expect(ingredients(ingredientsState, {
            type: ETypesAction.SET_INGREDIENT,
            ingredient: {...ingredientsState[0], id: '1'},
            index: 0
        })).toEqual([{...ingredientsState[0], id: '1'}]);
    })
    it('move', () => {
        expect(ingredients([{...ingredientsState[0]}, {...ingredientsState[0], id: '1'}], {
            type: ETypesAction.MOVE_INGREDIENT,
            ingredient: {...ingredientsState[0], id: '1'},
            index: 0,
            newIndex: 1
        })).toEqual([{...ingredientsState[0], id: '1'}, {...ingredientsState[0]}]);
    })
});