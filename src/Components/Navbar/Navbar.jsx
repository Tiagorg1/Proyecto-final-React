import CartWidget from "../CartWidget/CartWidget";
import { Logo } from "../Logo/Logo";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.containerNavBar}>
      <Logo />
      <ul className={styles.containerList}>
        <a href="#">
          <li>Quienes somos</li>
        </a>
        <a href="#">
          <li>Contacto</li>
        </a>
        <a href="#">
          <li>Ayuda</li>
        </a>
      </ul>
      <CartWidget />
    </div>
  );
};

export default Navbar;
