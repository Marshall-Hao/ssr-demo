import React, {
  useEffect,
  useContext,
  useState,
} from "react";
import { fetchUser } from "../core/api";
import { dataContext } from "../core/context";

const User = () => {
  const context = useContext(dataContext);
  console.log("dataContext", context);
  const getInitialData = () => {
    if (context) {
      console.log("server render");
      return context;
    }
    if (window.__APP_DATA__) {
      console.log(
        "client first render",
        window.__APP_DATA__
      );
      return window.__APP_DATA__;
    }
  };

  const [user, setUser] = useState(getInitialData());

  //   useEffect(() => {
  //     fetchUser().then((data) => console.log(data));
  //   }, []);

  return (
    <main>
      <h1>User Page</h1>
      <h1>{user.name}</h1>
      <p>{user.age}</p>
      <button onClick={() => alert("user!")}>Btn</button>
    </main>
  );
};

User.getData = fetchUser;
export default User;
