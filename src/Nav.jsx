import React from "react";
import './App.css';
import {Link} from 'react-router-dom'

export default function Nav(){
    return (
        <nav>
            <h3>Logo</h3>
<ul>

    <Link to="/">
    <li>AnaSayfa</li></Link>
    <Link to="/about">
        <li>Hakkında </li></Link>
    <Link to="/products-list">
        <li>Ürün Listesi </li></Link>
</ul>
        </nav>

    )

}
