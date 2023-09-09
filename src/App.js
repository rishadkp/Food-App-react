import { useState } from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import Orders from "./components/Orders/Orders";
import CartProvider from "./store/CartProvider";
import useTryingJS from "./hooks/use-Trying-js";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);
  useTryingJS();

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <Router>
      <CartProvider>
        <Switch>
          <Route path="/" exact>
            {cartIsShown && <Cart onClose={hideCartHandler} />}
            <Header onShowCart={showCartHandler} cartIsShown={cartIsShown} />
            <main>
              <Meals />
            </main>
          </Route>
          <Route path="/Orders">
            <Orders />
          </Route>
        </Switch>
      </CartProvider>
    </Router>
  );
}

export default App;

//in package.json, this was there, but I changed it to add Routing feature.
//"homepage":https://rishadkp.github.io/React_FoodOrderUsingContext
