import {ActionTypes} from "../contants/action-types";

const INITIAL_STATE = {
    products:[{
        id:1,
        title:'dipesh',
        category:'programmer'
    }],
};
export const productReducer = (state=INITIAL_STATE, action) => {
    switch (action.type){
        case ActionTypes.SET_PRODUCTS:
            return {...state, products:action.payload};
        default :
            return  state;

    }

}