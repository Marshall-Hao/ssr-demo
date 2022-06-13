import React, { useEffect } from "react";
import { fetchHome } from "../core/api";

const Home = (props) => {
  console.log(props);
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

export default Home;
