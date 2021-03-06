import {AType} from "../contants/action-types";
import axios from "axios";
import ProductService from "../services/ProductService"

export const setProducts = () => async (dispatch) => {
    try {
        const res = await ProductService.getAll();
        dispatch({
            type: AType.SET_PRODUCTS,
            payload: res.data,
        });
        return Promise.resolve(res.data);
    } catch (err) {
        return Promise.reject(err);
    }


}
export const selectedProduct = (product) => {
    return {
        type:AType.SELECTED_PRODUCTS,
        payload:product,
    }
}
export const removeProduct = () => {
    return {
        type: AType.REMOVE_SELECTED_PRODUCT,
    }
}
export const deleteProduct = (dispatch, id) => {
    axios
        .get("https://fakestoreapi.com/products").then(response =>
        dispatch ({
            type:AType.DELETE_PRODUCTS,
            payload:id
        })
    )
        .catch((err) => {
            console.log("Err", err)
        });

}
