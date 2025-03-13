import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styles from './ItemListContainer.module.css';

const ItemListContainer = () => {
    const { categoryId } = useParams();
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(response => response.json())
            .then(data => {
                if (categoryId) {
                    setProducts(data.filter(product => product.category === categoryId));
                } else {
                    setProducts(data);
                }
                setLoading(false);
            })
            .catch(error => console.error(error));
    }
    , [categoryId]);

    if (loading) {
        return <h1>Cargando...</h1>;
    }
    
    return (
        <div style={{ marginTop: '2rem' }}>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <th className={styles.th}>Productos</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map(product => (
                        <tr key={product.id} onClick={() => navigate(`/item/${product.id}`)}>
                            <td className={styles.td}>{product.title}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ItemListContainer;