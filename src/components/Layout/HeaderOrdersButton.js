import { useEffect, useState } from "react";
import classes from "./HeaderOrdersButton.module.css";

const HeaderOrdersButton = (props) => {
  const [ordersCount, setOrdersCount] = useState("0");
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);

  const badgeClasses = `${classes.badge} ${
    btnIsHighlighted ? classes.bump : ""
  }`;

  useEffect(() => {
    const fetchOrders = async () => {
      const response = await fetch(
        "https://react-http-beba8-default-rtdb.firebaseio.com/orders.json"
      );

      if (!response.ok) {
        throw new Error("Not found");
      }

      const responseData = await response.json();

      //console.log(responseData);

      const LoadedOrders = [];

      for (const key in responseData) {
        LoadedOrders.push({
          id: key,
          orderItems: responseData[key].orderItems,
          user: responseData[key].user,
          time: responseData[key].time,
        });
      }

      setOrdersCount(LoadedOrders.length);
    };

    fetchOrders().catch((error) => {
      console.log(error.message);
    });

    setBtnIsHighlighted(true);

    const timer = setTimeout(() => {
      setBtnIsHighlighted(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [props.cartIsShown]);

  return (
    <a href="/Orders">
      <button className={classes.button}>
        <span className={classes.icon}></span>
        <span>Orders</span>
        <span className={badgeClasses}>{ordersCount}</span>
      </button>
    </a>
  );
};

export default HeaderOrdersButton;
