import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import axios from "axios";
import {setProducts} from "../redux/actions/ProductAction";
import {Link} from "react-router-dom";

const ProductListing = () => {
    const products = useSelector((state) => state.allProducts.products)
    const dispatch = useDispatch();
    const fetchData = async () => {
        const response = await axios
            .get("https://fakestoreapi.com/products")
            .catch((err) => {
                console.log("Err", err)
            });
        dispatch(setProducts(response.data))
    }
    useEffect(() => {
        fetchData();
    }, [])
        return (
            <div>
                {products.map(item => (

                    <h1 className="alert alert-info btn-sm " key={item.id}>

                        <Link to={"/product/"+item.id}>{item.title}</Link>
                    </h1>

                ))}
            </div>
        )
}
export default ProductListing