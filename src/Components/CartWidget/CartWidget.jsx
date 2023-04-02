
import { BsCart2 } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";

const CartWidget = () => {
  const { getTotalQuantity } = useContext(CartContext);

  const total = getTotalQuantity();

  return (
    <Link to="cart">
      <div style={{ display: "flex", flexDirection: "row-reverse" }}>
        <div className="bubble-counter">
          <span style={{ fontSize: "2rem", color: "white" }}>{total}</span>
        </div>
        <BsCart2 size={35} />
      </div>
    </Link>
  );
};

export default CartWidget;
