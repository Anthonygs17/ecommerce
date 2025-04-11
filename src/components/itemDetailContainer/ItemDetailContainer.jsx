import Item from "../item/Item";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase/client";

const ItemDetailContainer = () => {
    const { itemId } = useParams();
    const [item, setItem] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const productRef = doc(db, 'products', itemId);
        const getProduct = async () => {
            const productSnapshot = await getDoc(productRef);
            const productData = { id: productSnapshot.id, ...productSnapshot.data() };
            return productData;
        };
        getProduct()
            .then(data => {
                if (itemId) {
                    setItem(data);
                    setLoading(false);
                }
            })
            .catch(error => console.error(error));
    }, [itemId]);
    
    if (loading) {
        return <h1>Cargando...</h1>;
    }
    
    return (
        <Item item={item}/>
    );
};

export default ItemDetailContainer;