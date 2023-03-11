import { display, flexbox } from "@mui/system";
import { BsCart2 } from "react-icons/bs";
import { Link } from "react-router-dom";

const CartWidget = () => {
  return (
    <Link to="cart">
    <div style= {{display:"flex", flexDirection:"row-reverse"
}}>
    <div className="bubble-counter">
        <span style={{fontSize:"2rem", color: "white"}}>0</span>
      </div>
      <BsCart2 size={35} />
    </div>
    </Link>
  );
};

export default CartWidget;
