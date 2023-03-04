import CartWidget from "../CartWidget/CartWidget";
import { Logo } from "../Logo/Logo";
import styles from "./Navbar.module.css";

const Navbar = ({ children }) => {
  return (
    <div>
      <div className={styles.containerNavBar}>
        <Logo />
        <ul className={styles.containerList}>
          <a href="#">
            <li>Productos</li>
          </a>
          <a href="#">
            <li>Quienes somos</li>
          </a>
          <a href="#">
            <li>Ayuda</li>
          </a>
        </ul>
        <CartWidget />
      </div>
      {children}
    </div>
  );
};

export default Navbar;
