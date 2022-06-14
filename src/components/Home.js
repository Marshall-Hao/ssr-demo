import React, {
  useEffect,
  useContext,
  useState,
} from "react";
import { fetchHome } from "../core/api";
import { dataContext } from "../core/context";

const Home = () => {
  const context = useContext(dataContext) || {};
  console.log("dataContext", context);
  const [home, setHome] = useState(context);
  // * 类似didmount
  //   *https://www.ruanyifeng.com/blog/2020/09/react-hooks-useeffect-tutorial.html
  useEffect(() => {
    fetchHome().then((data) => {
      setHome(data);
    });
  }, []);

  return (
    <main>
      <h1>Home Page</h1>
      <h1>{home.title}</h1>
      <p>{home.desc}</p>
    </main>
  );
};

Home.getData = fetchHome;
export default Home;
