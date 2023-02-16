import React from "react";

export default function ProductCard({ _id, name, prize, quantity }) {
  return (
    <div>
      <span>{quantity} - </span>
      <span>{name} </span>
      <span>${prize}</span>
    </div>
  );
}
