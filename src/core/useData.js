import { useState, useEffect } from "react";

const useData = (context, getData) => {
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
  const [data, setData] = useState(getInitialData());

  useEffect(() => {
    // * client first render
    if (window.__APP_DATA__) {
      window.__APP_DATA__ = void 0;
    }
    console.log("spa render");
    getData()
      .then((res) => setData(res))
      .catch();
  }, []);
  return [data, setData];
};

export default useData;
