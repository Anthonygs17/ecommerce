import { useContext, useState } from "react";
import { ShopContext } from "../../context/ShopContext";
import styles from './Item.module.css';

const Item = ({ item }) => {
  const { addToCart } = useContext(ShopContext);
  const [contador, setContador] = useState(1);

  return (
    <div className="card">
      <img src={item.image} alt={item.title} width={'300rem'}/>
      <div className="card-body">
        <h5 className="card-title">{item.title}</h5>
        <p className="card-text">{item.description}</p>
        <p className="card-text">${item.price}</p>
      </div>
      <div className={styles.quantityControls}>
        <button onClick={() => setContador(contador - 1)} disabled={contador <= 1}>-</button>
        <p>Cantidad: {contador}</p>
        <button onClick={() => setContador(contador + 1)}>+</button>
      </div>
      <button onClick={() => addToCart({...item, quantity: contador})}>Agregar al carrito</button>
    </div>
  );
}

export default Item;