import classes from "./UserAdress.module.css";
const UserAdress = (props) => {
  return (
    <div className={classes.UserAdress}>
      <div>{"Name : " + props.user.name}</div>
      <div>{"City : " + props.user.city}</div>
      <div>{"PostalCode : " + props.user.postalCode}</div>
    </div>
  );
};

export default UserAdress;

