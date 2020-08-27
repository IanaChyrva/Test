import React from "react";
import { Link } from "react-router-dom";

const Home = ({ products }) => (
  <>
    <h1>Home page</h1>
    <ul>
      {products.map((product, index) => (
        <li key={index}>
          <h2>{product.title}</h2>
          <Link to={`/product/${index}`}>See more</Link>
        </li>
      ))}
    </ul>
  </>
);

export default Home;
