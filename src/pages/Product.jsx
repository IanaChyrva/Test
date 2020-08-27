import React from "react";
import { withRouter } from "react-router-dom";

const Product = (props) => {
  const product = props.products[props.match.params.productId];

  console.log(product);

  return <h1>{product.title}</h1>;
};

export default withRouter(Product);
