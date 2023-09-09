import classes from "./Orders.module.css";
import Card from "../UI/Card";
import Order from "./Order/Order";
import { useState, useEffect } from "react";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [isOrderEmpty, setIsOrderEmpty] = useState(false);

  useEffect(() => {
    const fetchOrders = async () => {
      const response = await fetch(
        "https://react-http-beba8-default-rtdb.firebaseio.com/orders.json"
      );

      if (!response.ok) {
        throw new Error("Not found");
      }

      const responseData = await response.json();

      const LoadedOrders = [];

      for (const key in responseData) {
        LoadedOrders.push({
          id: key,
          orderItems: responseData[key].orderItems,
          user: responseData[key].user,
          time: responseData[key].time,
        });
      }

      setOrders(LoadedOrders);

      if (!LoadedOrders.length) {
        setIsOrderEmpty(true);
      }
    };

    fetchOrders().catch((error) => {
      console.log(error.message);
    });
  }, []);

  const OrderItems = orders
    .sort()
    .reverse()
    .map((order) => (
      <Order
        key={order.id}
        id={order.id}
        user={order.user}
        orderItems={order.orderItems}
        time={order.time}
      />
    ));

  return (
    <div className={classes.ordersPage}>
      <div className={classes.header}>
        <h1>Orders</h1>
      </div>
      <div className={classes.navigation}>
        <a href="/">Go to booking page</a>
      </div>
      <div className={classes.orders}>
        <Card className={classes.card}>
          <ol>{OrderItems}</ol>
          {isOrderEmpty && (
            <h3 className={classes.emptyOrders}>No Orders to show</h3>
          )}
        </Card>
      </div>
    </div>
  );
};

export default Orders;
