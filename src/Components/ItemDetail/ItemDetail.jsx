import styles from "./ItemDetail.module.css";
import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({ productSelected, onAdd, quantity }) => {
  return (
    <div className={styles.product}>
      <img className={styles.img} src={productSelected.img} alt="" />
      <span className={styles.linea}></span>
      <h1 className={styles.title}>{productSelected.title}</h1>
      <span className={styles.linea}></span>
      <h2 className={styles.desc}>{productSelected.description}</h2>
      <span className={styles.linea}></span>
      <h2 className={styles.price} style={{ justifySelf: "flex-start" }}>
        Precio: ${productSelected.price}
      </h2>
      <span className={styles.linea}></span>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          textAlign: "center",
          marginTop: "15px",
        }}
      >
        <ItemCount
          onAdd={onAdd}
          stock={productSelected.stock}
          initial={quantity}
        />
      </div>
    </div>
  );
};

export default ItemDetail;
