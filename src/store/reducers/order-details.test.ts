import {ETypesAction, Order} from "../actions/types";
import {orderDetails} from "./order-details";

const initialState: Order = {
    failed: false,
    request: false,
};
const order = {
    name: 'test',
    order: {
        number: 1
    }
};

describe('orderDetails reducer', () => {
    it('should return the initial state', () => {
        // @ts-ignore
        expect(orderDetails(undefined, {type: null})).toEqual(initialState)
    })
    it('get constructor elements', () => {
        expect(orderDetails(undefined, {
            type: ETypesAction.GET_ORDER,
            order: order
        })).toEqual({...initialState, request: true})
    })
    it('get constructor elements success', () => {
        expect(orderDetails(undefined, {
            type: ETypesAction.GET_ORDER_SUCCESS,
            order: order
        })).toEqual({...initialState, orderDetails: order})
    })
    it('get constructor elements error', () => {
        expect(orderDetails(undefined, {
            type: ETypesAction.GET_ORDER_ERROR,
            order: order
        })).toEqual({...initialState, failed: true})
    })
});