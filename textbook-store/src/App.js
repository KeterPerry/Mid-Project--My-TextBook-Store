import "./App.css";
import Header from "./components/header";
import HomePage from "./components/homePage/homePage";
import About from "./components/about/about";
// import MyTextBooks from "./components/myTextBooks";
import Contact from "./components/contact/contact";
import Shop from "./components/shop/shop";
import LogIn from "./components/log-in/logIn";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/About" component={About} />
        {/* <Route exact path="/products" component={MyTextBooks} /> */}
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/login" component={LogIn} />
        <Route exact path="/shop" component={Shop} />
      </Switch>
    </div>
  );
}

export default App;
