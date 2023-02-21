import React from "react";
import ProductCard from "../ProductCard/ProductCard";

export default function ProductList({ products }) {
  return (
    <>
      {products.length ? (
        products.map(({ _id, name, prize, quantity }) => {
          return (
            <ProductCard
              key={_id}
              id={_id}
              name={name}
              prize={prize}
              quantity={quantity}
            />
          );
        })
      ) : (
        <p title="Click + para agregar productos">No hay productos</p>
      )}
    </>
  );
}
