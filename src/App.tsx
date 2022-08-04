import { useState } from "react";
import { AddUser } from "./components/Users/AddUser";
import { UsersList } from "./components/Users/UsersList";

import "./global.css";

export type User = {
  name: string;
  age: string;
  id: string;
};

export const App = () => {
  const [usersList, setUsersList] = useState<User[]>([]);

  const addUserHandler = (uName: string, uAge: string) => {
    setUsersList((prevUsersList) => {
      return [
        ...prevUsersList,
        { name: uName, age: uAge, id: Math.random().toString() },
      ];
    });
  };

  return (
    <div className="App">
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList} />
    </div>
  );
};
