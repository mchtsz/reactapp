import React from "react";
import Categories from "../components/Categories";
export default function Home() {
  //const cartContext will be selected from global state
  return (
    <div className="homepage">
      <h2>
        Welcome to Legacy, your go-to destination for top-of-the-line
        electronics. At Legacy, we take pride in providing our customers with
        the latest and greatest in technology. 
      </h2>
      <hr />
      <Categories />
      <hr />
    </div>
  );
}
