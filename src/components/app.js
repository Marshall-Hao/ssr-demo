import React, { useEffect } from "react";

export default () => {
  useEffect(() => {
    console.log("APP MOUNTED");
  }, []);

  return (
    <h1 onClick={() => alert("fuck")}>Hello Client!</h1>
  );
};
