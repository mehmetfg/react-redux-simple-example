import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {deleteProduct as productDelete, setProducts} from "../redux/actions/ProductAction";
import {Link} from "react-router-dom";

const ProductListing = () => {
    const products = useSelector((state) => state.allProducts.products)
    const dispatch = useDispatch();

    useEffect(() => {
       dispatch(setProducts())
    }, [])

    const  add = () => {
        dispatch({type:'ADD_PRODUCTS',
       payload:{
            id: 117,
                title: Math.random().toString(),
            price: 55.99,
            category: "dfafdasfdsdf",
            description: "fadfasfasf",
            image: "fadfasfas",
        }})
    }
    const update = () => {
        dispatch({
            type:'UPDATE_PRODUCTS',
            payload : {
                id: 1,
            title: Math.random().toString(),

        }})
        console.log(products)

    }
    const deleteProduct = (id) => {

        productDelete(dispatch,id)

    }
        return (
            <div>
                <button className={"btn btn-primary"} onClick={add}> Ekle</button>
                <button className={"btn btn-primary"} onClick={update}> Güncelle</button>

                {products.map((item, index) => (
                    <h1 className="alert alert-info btn-sm " key={index}>
                        <Link to={"/product/"+item.id}>{item.title}</Link>
                        <button className={"btn btn-primary btn-sm"} onClick={()=> deleteProduct(item.id)}> Sil</button>
                    </h1>

                ))}
            </div>
        )
}
export default ProductListing