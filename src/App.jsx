// import logo from "./logo.svg";
import "./App.css";
import NavbarB from "./Navbar";
import GallarySm from "./GallarySm";
import Gallary from "./Gallary";
import About from "./About";
import Products from "./Products";
import { Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <NavbarB />
      <Route path="/About">
        <About />
      </Route>
      <Route path="/Products">
        <Products />
      </Route>

      <Route path="/" exact={true}>
        <GallarySm />
        <Gallary />
      </Route>
      <Route path="/bmasaala" exact={true}>
        <GallarySm />
        <Gallary />
      </Route>
    </div>
  );
}

export default App;
