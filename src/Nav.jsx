import React from "react";
import './App.css';
import {Link} from 'react-router-dom'
export default function Nav(){
    return (
        <nav>
            <h3>Logo</h3>
<ul>
    <Link to="/about">
    <li>Hakkında </li></Link>
    <Link to="/">
    <li>AnaSayfa</li></Link>
</ul>
        </nav>

    )

}
