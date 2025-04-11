import { useContext, useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../../firebase/client';
import { ShopContext } from '../../context/ShopContext';
import styles from './Cart.module.css';

const Cart = () => {
    const [buyer, setBuyer] = useState({name: '', email: '', phone: ''});
    const [orderId, setOrderId] = useState('');
    const { cart, getTotalPrice, clearCart } = useContext(ShopContext);
    
    const onChangeKey = (key, value) => {
        setBuyer({...buyer, [key]: value});
    }

    const createOrder = async () => {
        const ordersRef = collection(db, 'orders');
        const order = {
            buyer: buyer,
            items: cart.map(item => ({
                id: item.id,
                title: item.title,
                price: item.price,
                quantity: item.quantity
            })),
            total: getTotalPrice()
        };
        
        try {
            const docRef = await addDoc(ordersRef, order);
            setOrderId(docRef.id);
            clearCart();
        } catch (error) {
            console.error('Error creating order:', error);
        }
    }
    
    return (
        <>
        {orderId ? (
            <>
                <h2>Gracias por tu compra!</h2>
                <h3>Tu orden es: #{orderId}</h3>
            </>
            ) : (
            <div className="cart">
                <h2>Carrito de compras</h2>
                {cart.map((item) => (
                    <div key={item.id} className="cart-item">
                        <h5>{item.title}</h5>
                        <p>${item.price}</p>
                        <p>Cantidad: {item.quantity}</p>
                    </div>
                ))}
                <h3>Total: {getTotalPrice()}</h3>
                <h3>Formulario de compra</h3>
                <div className={styles.formulario}>
                    <input type="text" placeholder='Nombre' onChange={(event) => onChangeKey('name', event.target.value)}/>
                    <input type="email" placeholder='Email' onChange={(event) => onChangeKey('email', event.target.value)}/>
                    <input type="number" placeholder='Telefono' onChange={(event) => onChangeKey('phone', event.target.value)}/>
                    <button onClick={() => createOrder()}>Finalizar compra</button>
                </div>
            </div>)
        }
        </>
    );
}

export default Cart;