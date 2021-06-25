import {AType} from "../contants/action-types";

const INITIAL_STATE = {
    products:[],
    product:{},
};

export const productReducer = (state=INITIAL_STATE, action) => {
    switch (action.type){
        case AType.SET_PRODUCTS:
            console.log(action.payload)
            return {...state, products:action.payload};
        case AType.SELECTED_PRODUCTS:
            return {...state, product:action.payload};
        case AType.REMOVE_SELECTED_PRODUCT:
            return {...state, product: {}}
        case 'ADD_PRODUCTS':
            return {...state, products:[...state.products, action.payload]}
        case 'UPDATE_PRODUCTS':
            return  {
                ...state,
                products:state.products.map(item => item.id === action.payload.id ? action.payload : item)
            };
        case 'DELETE_PRODUCTS':
            return {
                ...state,
                products: state.products.filter(item => item.id !== action.payload)
            }
        default :
            return  state;

    }

}