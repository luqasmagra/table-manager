import { useMutation } from "@apollo/client";
import { EDIT_PRODUCT } from "../graphql/products";
import { GET_TABLE } from "../graphql/tables";

export default function useEditProduct({ id }) {
  const [updateProduct, { loading }] = useMutation(EDIT_PRODUCT, {
    refetchQueries: [{ query: GET_TABLE }, "getTable"],
  });

  const handleEditProduct = async (quantity) => {
    if (!quantity) return;
    await updateProduct({ variables: { id, quantity: Number(quantity) } });
  };

  return { handleEditProduct, editLoading: loading };
}
