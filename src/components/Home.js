import React, { useEffect, useContext } from "react";
import { fetchHome } from "../core/api";
import { dataContext } from "../core/context";

const Home = () => {
  const context = useContext(dataContext);
  console.log("dataContext", context);
  // * 类似didmount
  //   *https://www.ruanyifeng.com/blog/2020/09/react-hooks-useeffect-tutorial.html
  useEffect(() => {
    fetchHome().then((data) => console.log(data));
  }, []);

  return (
    <main>
      <h1>Home Page</h1>
    </main>
  );
};

Home.getData = fetchHome;
export default Home;
