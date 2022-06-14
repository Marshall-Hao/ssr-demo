import React, {
  useEffect,
  useContext,
  useState,
} from "react";
import { fetchUser } from "../core/api";
import { dataContext } from "../core/context";
import useData from "../core/useData";

const User = () => {
  const context = useContext(dataContext);
  console.log("dataContext", context);
  const [user, setUser] = useData(context, fetchUser);
  //   useEffect(() => {
  //     fetchUser().then((data) => console.log(data));
  //   }, []);

  return (
    <main>
      <h1>User Page</h1>
      <h1>{user?.name}</h1>
      <p>{user?.age}</p>
      <button onClick={() => alert("user!")}>Btn</button>
    </main>
  );
};

User.getData = fetchUser;
export default User;
