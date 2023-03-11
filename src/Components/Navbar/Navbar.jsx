import { Link } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";
import { Logo } from "../Logo/Logo";
import styles from "./Navbar.module.css";

const Navbar = ({ children }) => {
  return (
    <div>
      <div className={styles.containerNavBar}>
        <Logo />
        <ul className={styles.containerList}>
          <Link to= "/">Todos los productos</Link>

          <Link to= "/category/Teclado">Teclados</Link>

          <Link to= "/category/Personalizado">Teclados personalizados</Link>
        </ul>
        <CartWidget />
      </div>
      {children}
    </div>
  );
};

export default Navbar;
