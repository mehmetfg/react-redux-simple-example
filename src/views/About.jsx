import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom";

export default function About(){
    useEffect(()=> {
        fetchItems()
    }, [])
    const [items, setItems]= useState([])
    const fetchItems= async ()=>{

        const data=await fetch('https://fakestoreapi.com/products')
        const items=await  data.json()
        setItems(items)
     console.log(items)

    }
        return (
            <div>

            <h1>Degerler</h1>
                {items.map(item=> (
                    <h1 className="alert alert-info btn-sm " key={item.id}>

                        <Link to={"/about/"+item.id}>{item.title}</Link>
                    </h1>

                ))}
                <hr/>
            <Link to="/"> Anasayfa</Link>
            </div>
        )
}