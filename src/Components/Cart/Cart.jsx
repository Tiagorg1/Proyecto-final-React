import styles from "./Cart.module.css";
import { useContext, useState } from "react";
import { CartContext } from "../../Context/CartContext";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Swal from "sweetalert2";
import FormCheckout from "../FormCheckout/FormCheckout";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, clearCart, getTotalPrice, deleteProductById } =
    useContext(CartContext);

  const [showForm, setShowForm] = useState(false);
  const [orderId, setOrderId] = useState (null)

  const clear = () => {
    Swal.fire({
      title: "¿Seguro que deseas vaciar el carrito?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Si, vaciar",
      denyButtonText: `No, no vaciar`,
    }).then((result) => {
      if (result.isConfirmed) {
        clearCart();
        Swal.fire("Carrito vaciado", "", "success");
      } else if (result.isDenied) {
        Swal.fire("No se vacio el carrito", "", "info");
      }
    });
  };


  if(orderId){
    return(
      <div>
        <h2>Gracias por tu compra</h2>
        <h4>Tu comprobante de compra es: {orderId}</h4>
        <Link to="/">Seguir comprando</Link>
      </div>
    )
  }

  const precioTotal = getTotalPrice();
  return (
    <div>
      {!showForm ? (
        <div>
          {cart.map((elemento) => {
            return (
              <div className={styles.cartContainer} key={elemento.id}>
                <h2>{elemento.title}</h2>
                <img src={elemento.img} alt="" style={{ width: "200px" }} />
                <h3>Cantidad:{elemento.quantity}</h3>
                <h3>${elemento.price}</h3>
                <h4>{elemento.description}</h4>
                <Button
                  onClick={() => deleteProductById(elemento.id)}
                  variant="outlined"
                >
                  Eliminar
                </Button>
              </div>
            );
          })}

          {cart.length > 0 && (
            <div>
              <h1>El total de tu compra es: {precioTotal}</h1>
              <Stack direction="row" spacing={2}>
                <Button onClick={clear} variant="outlined">
                  Vaciar tu carrito
                </Button>
                <Button variant="outlined" onClick={() => setShowForm(true)}>
                  Finalizar tu compra
                </Button>
              </Stack>
            </div>
          )}
        </div>
      ) : (
        <FormCheckout cart={cart} getTotalPrice={getTotalPrice} setOrderId={setOrderId} clearCart={clearCart} />
      )}
    </div>
  );
};

export default Cart;
