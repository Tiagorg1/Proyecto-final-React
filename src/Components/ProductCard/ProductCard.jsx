import "./ProductCard.css"

const ProductCard = ({ title, price, stock }) => {
  return (
    <div>
      <h1 className={ stock ? "green" : "gray" }>{title}</h1>
      <h2>{price}</h2>
    </div>
  );
};

export default ProductCard;
