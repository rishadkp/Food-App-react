import classes from "./OrderItems.module.css";

const OrderItems = (props) => {
  let total = 0;

  for (const item of props.orderItems) {
    total = total + item.price * item.amount;
  }

  const orderdata = props.orderItems.map((item) => {
    return (
      <tr key={item.id}>
        <td>{item.name}</td>
        <td>$ {item.price}</td>
        <td>{item.amount}</td>
      </tr>
    );
  });
  console.log(total);
  // console.log(orderdata);
  return (
    <div className={classes.orderItems}>
      <table>
        <thead>
          <tr>
            <th> Item Name</th>
            <th>Price per Item</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>{orderdata}</tbody>
        <tfoot>
          <td colSpan={2}>Total</td>
          <td>$ {total}</td>
        </tfoot>
      </table>
    </div>
  );
};

export default OrderItems;
