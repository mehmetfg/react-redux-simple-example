import logo from './logo.svg';
import './App.css';
import About from './views/About'
import 'bootstrap/dist/css/bootstrap.min.css';
import Detail from "./views/detail";
import {Link, BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Nav from './Nav'
function App() {
  return (
    <div className="App">

    <Router>
      <Nav/>
      <Switch>

      <Route path="/" component={Home} exact></Route>
      <Route path="/about" component={About} exact></Route>
        <Route path="/about/:id" component={Detail}></Route>
      </Switch>
    </Router>
    </div>
  );
}
const Home= () => (
    <div>
      <h1>Home Page</h1>
    </div>

)
export default App;
