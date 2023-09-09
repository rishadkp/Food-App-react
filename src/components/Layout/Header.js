import { Fragment } from "react";

import HeaderCartButton from "./HeaderCartButton";
import HeaderOrdersButton from "./HeaderOrdersButton";
import mealsImage from "../../assets/meals.jpg";
import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Foodies App</h1>
        <HeaderOrdersButton cartIsShown={props.cartIsShown} />
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="A table full of delicious food!" />
      </div>
    </Fragment>
  );
};

export default Header;
