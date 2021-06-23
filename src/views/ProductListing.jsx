import React from "react";
import {useDispatch, useSelector} from "react-redux";
import axios from "axios";

const ProductListing = () => {
    const products = useSelector((state) => state.allProducts.products)
    const dispatch = useDispatch();
    const fetchData = async () => {
        const response = await axios
            .get("https://fakestoreapi.com/products")
            .catch((err) => {

                console.log("Err", err)
            });

    }
        return (
            <div>
                {products.map(item => (

                    <h1>{item.title}</h1>
                ))}
            </div>
        )
}
export default ProductListing