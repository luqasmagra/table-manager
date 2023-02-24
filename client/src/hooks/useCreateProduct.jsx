import { useState } from "react";
import { useParams } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { products as PRODUCTS } from "../mocks/products.json";
import { CREATE_PRODUCT } from "../graphql/products";
import { GET_TABLE } from "../graphql/tables";

export default function useCreateProduct({ onClose }) {
  const params = useParams();

  const [createProduct, { loading }] = useMutation(CREATE_PRODUCT, {
    refetchQueries: [{ query: GET_TABLE }, "getTable"],
  });

  const [product, setProduct] = useState({
    name: "",
    quantity: 1,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!product.name) return;
    const productFind = PRODUCTS.find((item) => item.name === product.name);
    await createProduct({
      variables: {
        name: productFind.name,
        quantity: product.quantity,
        prize: productFind.prize,
        tableId: params.id,
      },
    });
    setProduct({
      name: "",
      quantity: 1,
    });
    onClose();
  };

  const handleProduct = (value) => {
    setProduct({
      ...product,
      name: value,
    });
  };

  const handleQuantity = (value) => {
    setProduct({
      ...product,
      quantity: value,
    });
  };
  return {
    createProduct,
    loading,
    product,
    handleSubmit,
    handleProduct,
    handleQuantity,
  };
}
