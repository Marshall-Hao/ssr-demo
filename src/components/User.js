import React, { useEffect, useContext } from "react";
import { fetchUser } from "../core/api";
import { dataContext } from "../core/context";

const User = () => {
  const context = useContext(dataContext);
  console.log("dataContext", context);

  useEffect(() => {
    fetchUser().then((data) => console.log(data));
  }, []);

  return (
    <main>
      <h1>User Page</h1>
      <button onClick={() => alert("user!")}>Btn</button>
    </main>
  );
};

User.getData = fetchUser;
export default User;
