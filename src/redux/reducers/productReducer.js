import {ActionTypes} from "../contants/action-types";

const INITIAL_STATE = {
    products:[],
    product:{},
};
export const productReducer = (state=INITIAL_STATE, action) => {
    switch (action.type){
        case ActionTypes.SET_PRODUCTS:
            return {...state, products:action.payload};
        case ActionTypes.SELECTED_PRODUCTS:
            return {...state, product:action.payload};
        case ActionTypes.REMOVE_SELECTED_PRODUCT:
            return {...state, product: {}}
        default :
            return  state;

    }

}