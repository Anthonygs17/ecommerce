import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styles from './ItemListContainer.module.css';
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../firebase/client";

const ItemListContainer = () => {
    const { categoryId } = useParams();
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        let productsRef;
        if(categoryId){
            productsRef = query(collection(db, 'products'), where('category', '==', categoryId));
        }else{
            productsRef = collection(db, 'products');
        }
        const getProducts = async () => {
            const productsSnapshot = await getDocs(productsRef);
            const productsList = productsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            return productsList;
        };
        getProducts()
            .then(data => {
                setProducts(data);
                setLoading(false);
            })
            .catch(error => console.error(error));
    }, [categoryId]);
    
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
                    {products?.map(product => (
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