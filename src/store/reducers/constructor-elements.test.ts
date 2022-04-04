import {constructorElements, IConstructorElements} from "./constructor-elements";
import {ETypesAction, ETypesIngredient, Ingredient} from "../actions/types";

const initialState: IConstructorElements = {
    ingredients: [],
    failed: false,
    request: false
}
const ingredients: Ingredient[] = [{
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
describe('constructorElements reducer', () => {
    it('should return the initial state', () => {
        // @ts-ignore
        expect(constructorElements(undefined, {type: null, ingredients: []})).toEqual(initialState)
    })
    it('get constructor elements', () => {
        expect(constructorElements(undefined, {
            type: ETypesAction.GET_CONSTRUCTOR_ELEMENTS,
            ingredients: []
        })).toEqual({...initialState, request: true})
    })
    it('get constructor elements success', () => {
        expect(constructorElements(undefined, {
            type: ETypesAction.GET_CONSTRUCTOR_ELEMENTS_SUCCESS,
            ingredients: ingredients
        })).toEqual({...initialState, ingredients: ingredients})
    })
    it('get constructor elements error', () => {
        expect(constructorElements(undefined, {
            type: ETypesAction.GET_CONSTRUCTOR_ELEMENTS_ERROR,
            ingredients: ingredients
        })).toEqual({...initialState, ingredients: [], failed: true})
    })
    it('increment', () => {
        expect(constructorElements({...initialState, ingredients}, {
            type: ETypesAction.INCREMENT,
            id: '0',
        }).ingredients[0].count).toEqual(3)
    })
    it('decrement', () => {
        expect(constructorElements({...initialState, ingredients: [{...ingredients[0], count: 2}]}, {
            type: ETypesAction.DECREMENT,
            id: '0',
        }).ingredients[0].count).toEqual(1)
    })
    it('clear count', () => {
        expect(constructorElements({...initialState, ingredients: [{...ingredients[0], count: 2}]}, {
            type: ETypesAction.CLEAR_COUNT
        }).ingredients[0].count).toEqual(undefined)
    })
});