import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Detail from "./views/Detail";
import Nav from "./Nav";
import Home from "./views/Home"
import ProductListing from "./views/ProductListing";

export default function Rote(){

    return(
        <Router>
            <Nav/>
            <Switch>

                <Route path="/" component={Home} exact></Route>
                <Route path="/products-list" component={ProductListing} exact></Route>
                <Route path="/product/:id" component={Detail} exact></Route>
                <Route>404 sayfa bulunamadı </Route>
            </Switch>
        </Router>
    )
}