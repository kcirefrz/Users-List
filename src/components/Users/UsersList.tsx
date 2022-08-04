import { User } from "../../App";
import { Card } from "../UI/Card";

import classes from "./UsersList.module.css";

interface IUsersList {
  users: User[];
}

export const UsersList = (props: IUsersList) => {
  return (
    <Card className={classes.users}>
      <ul>
        {props.users.map((user) => (
          <li key={user.id}>
            {user.name} ({user.age} years old.)
          </li>
        ))}
      </ul>
    </Card>
  );
};
