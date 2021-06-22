import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import About from "./views/About";
import Detail from "./views/detail";
import Nav from "./Nav";
import Home from "./views/Home"
export default function Rote(){

    return(
        <Router>
            <Nav/>
            <Switch>

                <Route path="/" component={Home} exact></Route>
                <Route path="/about" component={About} exact></Route>
                <Route path="/about/:id" component={Detail}></Route>
            </Switch>
        </Router>
    )
}