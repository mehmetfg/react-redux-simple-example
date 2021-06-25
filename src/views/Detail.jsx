import React, {useEffect} from "react";
import {Link, useParams} from "react-router-dom";
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import {removeProduct, selectedProduct} from "../redux/actions/ProductAction";

export default function Detail(){
    const {id} = useParams();
    const  dispatch= useDispatch();
    const product= useSelector(state => state.allProducts.product)
    useEffect(()=> {
        if(id && id !== "") fetchItem();
        return () => {
            dispatch(removeProduct())
        }
    }, [id])
    const fetchItem= async () => {
        const response= await  axios
            .get("https://fakestoreapi.com/products/"+id)
            .catch((err) => {
                console.log(err)
            })
    dispatch(selectedProduct(response.data))
console.log(product)
}


    return (
        <div>
            {Object.keys(product).length=== 0 ?
                (
                    <div> Yükleniyor </div>
                ) : (
                    <div >
            <h1>Ürün Detayı</h1>
            <img src={product.image}/>
            <Link to="/about">Listeyi DÖn</Link>
            <h1>{product.title}</h1>
                    </div>
                )
            }
        </div>

    )
}