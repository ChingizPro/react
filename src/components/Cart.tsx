interface Props {
  products: string[];
  clearFunction: () => void;
}

const Cart = ({ products, clearFunction }: Props) => {
  return (
    <div>
      <ol>
        {products.map((prod) => (
          <li key={prod}>{prod}</li>
        ))}
      </ol>
      <button onClick={clearFunction}>Clear</button>
    </div>
  );
};

export default Cart;
