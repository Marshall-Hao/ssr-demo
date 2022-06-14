import React, {
  useEffect,
  useContext,
  useState,
} from "react";
import { fetchHome } from "../core/api";
import { dataContext } from "../core/context";
import useData from "../core/useData";

const Home = () => {
  const context = useContext(dataContext);
  console.log("dataContext", context);
  const [home, setHome] = useData(context, fetchHome);
  // * 类似didmount
  //   *https://www.ruanyifeng.com/blog/2020/09/react-hooks-useeffect-tutorial.html
  //   useEffect(() => {
  //     fetchHome().then((data) => {
  //       setHome(data);
  //     });
  //   }, []);

  return (
    <main>
      <h1>Home Page</h1>
      <h1>{home && home.title}</h1>
      <p>{home && home.desc}</p>
    </main>
  );
};

Home.getData = fetchHome;
export default Home;
