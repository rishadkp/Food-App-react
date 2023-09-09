import classes from "./Order.module.css";
import { useState } from "react";
import UserAdress from "../User/UserAdress";
import OrderItems from "../OrderItems/OrderItems";

const Order = (props) => {
  const [isItemsDisplay, setIsItemsDisplay] = useState(false);
  const id = props.id.slice(1);

  const MouseHandler = () => {
    if (!isItemsDisplay) setIsItemsDisplay(true);
    if (isItemsDisplay) setIsItemsDisplay(false);
  };

  return (
    <li>
      <div>
        <div className={classes.order} onClick={MouseHandler}>
          <div className={classes.orderUserDetail}>
            <div>{"Order ID : " + id}</div>
            <UserAdress user={props.user} />
          </div>
          <div className={classes.status}>
            <div>STATUS</div>
            <div className={classes.placed}>Placed</div>
          </div>
          <div className={classes.time}>
            <i>Ordered on : </i>
            {props.time}
          </div>
        </div>
        {isItemsDisplay && (
          <div>
            <OrderItems orderItems={props.orderItems} />
          </div>
        )}
      </div>
    </li>
  );
};

export default Order;
