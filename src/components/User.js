import React from "react";
import { fetchUser } from "../core/api";

const User = () => {
  return (
    <main>
      <h1>User Page</h1>
      <button onClick={() => alert("user!")}>Btn</button>
    </main>
  );
};

User.getData = fetchUser;
export default User;
