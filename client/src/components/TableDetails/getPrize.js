export function getTotalPrize({ products }) {
  let totalPrize = 0;
  products
    ?.map((product) => {
      return product.prize;
    })
    .forEach((numero) => {
      totalPrize += numero;
    });

  return totalPrize;
}
