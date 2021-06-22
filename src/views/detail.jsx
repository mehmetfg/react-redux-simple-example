import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom";
export default function Detail({match}){
    const [item, setItems] = useState({})
    useEffect(()=> {
        fetcItem(match.params.id);

    })
    const fetcItem= async (id) => {



  const data= await  fetch("https://fakestoreapi.com/products/"+id)
       let item1= await data.json();

        setItems(item1)
}

    return (
        <div>
            <h1>Ürün Detayı</h1>
            <img src={item.image}/>
            <Link to="/about">Listeyi DÖn</Link>
            <h1>{item.title}</h1>
        </div>

    )
}