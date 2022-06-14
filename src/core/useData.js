import { useState } from "react";

const useData = (context) => {
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
  return [data, setData];
};

export default useData;
