import Item from "../item/Item";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
    const { itemId } = useParams();
    const [item, setItem] = useState({});
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${itemId}`)
            .then(response => response.json())
            .then(data => {
                if(itemId) {
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