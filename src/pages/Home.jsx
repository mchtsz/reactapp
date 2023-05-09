import React from "react";
import Categories from "../components/Categories";
export default function Home() {
  //const cartContext will be selected from global state
  return (
    <div className="homepage">
      <hr />
      <Categories />
      <hr />
    </div>
  );
}
