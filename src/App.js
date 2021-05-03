import "./App.css";

// Components
import { AnimatedSwitch } from "react-router-transition";
import Header from "./components/Header";
import Home from "./components/pages/Home";
import ShoppingCart from "./components/pages/ShoppingCart";

// Router
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

// Translation
// eslint-disable-next-line
import i18n from "./i18n";

const App = () => {
  return (
    <Router>
      <Header />
      <AnimatedSwitch
        atEnter={{ opacity: 0 }}
        atLeave={{ opacity: 0 }}
        atActive={{ opacity: 1 }}
        className="switch-wrapper"
      >
        <Route path="/shopping-cart">
          <ShoppingCart />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route render={() => <Redirect to={{ pathname: "/" }} />} />
      </AnimatedSwitch>
    </Router>
  );
};

export default App;
