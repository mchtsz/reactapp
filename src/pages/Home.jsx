import React from "react";
import Categories from "../components/Categories";
export default function Home() {
  //const cartContext will be selected from global state
  return (
    <div className="section" id="section">
      <h1>Home</h1>
      <Categories />
    </div>
  );
}
