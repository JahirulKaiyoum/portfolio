import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Home from "./components/Home/Home";
import Aboute from "./components/About/Aboute";
import Portfolio from "./components/Portfolio/Portfolio";
import Blogs from "./components/Blogs/Blogs";
import Menu from "./components/Menu/Menu";

function App() {
  return (
    <Router>
    
      <Switch>
        <Route path='/home'>
          <Home></Home>
          
        </Route>
        <Route path='/about'>
          <Aboute></Aboute>
        </Route>
        <Route path='/porfolio'>
          <Portfolio></Portfolio>
        </Route>
        <Route path='/contact'>
        </Route>
        <Route exact path='/'>
        <Home></Home>
        </Route>
        <Route path='/blog'>
          <Menu></Menu>
          <Blogs></Blogs>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
