import { useParams } from "react-router-dom";
import { products } from "../../productMock";
import ItemCount from "../ItemCount/ItemCount";
import styles from "./ItemDetailContainer.module.css";

const ItemDetailContainer = () => {
  const { id } = useParams();

  const productSelected = products.find((element) => element.id === Number(id));
  const onAdd = (cantidad) => {
    console.log(`se agrego al carrito ${cantidad} productos`);
  };
  return (
    <div className={styles.product}>
      <img className={styles.img} src={productSelected.img} alt="" />
      <span className={styles.linea}></span>
      <h1 className={styles.title}>{productSelected.title}</h1>
      <span className={styles.linea}></span>
      <h2 className={styles.desc}>{productSelected.description}</h2>
      <span className={styles.linea}></span>
      <h2 className={styles.price} style={{ justifySelf: "flex-start" }}>Precio: $
        {productSelected.price}
      </h2>
      <span className={styles.linea}></span>
      <div style={{display:"flex", justifyContent:"center", textAlign:"center", marginTop:"15px"}}>
        <ItemCount stock={productSelected.stock} onAdd={onAdd} />
      </div>
    </div>

  );
};

export default ItemDetailContainer;
