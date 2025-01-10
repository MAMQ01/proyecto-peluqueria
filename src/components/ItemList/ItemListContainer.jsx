
import { useEffect, useState } from "react"
import ItemList from "./ItemList"
import { useParams } from "react-router-dom"
import { getDocs, collection, query, where } from "firebase/firestore"
import { db } from "../../firebase/firebaseConfig"

const ItemListContainer = () => {

  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)
  const [categoryExists, setCategoryExists] = useState(false)
  const [outOfStock, setOutOfStock] = useState(false)

  const { categoryName, sexo } = useParams();

  useEffect(() => {
    setLoading(true); // Activa el estado de carga

    const itemCollection = collection(db, "products");

    // Construir la consulta condicionalmente
    let fetchProducts;
    if (categoryName && sexo) {
      fetchProducts = query(
        itemCollection,
        where("category", "==", categoryName),
        where("sexo", "==", sexo) // Filtrar por sexo
      );
    } else if (categoryName) {
      fetchProducts = query(itemCollection, where("category", "==", categoryName));
    } else if (sexo) {
      fetchProducts = query(itemCollection, where("sexo", "==", sexo));
    }else {
      fetchProducts = itemCollection; // Obtener todos los productos si no hay filtros
    }

    // Obtener los datos desde Firestore
    getDocs(fetchProducts)
      .then((res) => {
        const products = res.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setItems(products); // Actualiza el estado con los productos obtenidos
        setLoading(false); // Desactiva el estado de carga

        // Verificar si la categoría existe y si hay inventario
        const categoryExists = products.length > 0;
        setCategoryExists(categoryExists);
        const allOutOfStock =
          products.length > 0 && products.every((product) => product.stock === 0);
        setOutOfStock(allOutOfStock);
      })
      .catch((err) => {
        console.error("Error al obtener productos:", err);
        setLoading(false); // Desactiva el estado de carga en caso de error
      });
  }, [categoryName, sexo]);


  return (
    <div>
      {loading ? (
        <h2>Cargando productos...</h2>
      ) : items.length > 0 && !outOfStock ? (
        <ItemList items={items} />
      ) : outOfStock ? (
        <h3>Sin inventario de esta categoría</h3>
      ) : categoryExists ? (
        <h3>Sin productos disponibles</h3>
      ) : (
        <h3>Categoría inexistente</h3>
      )}
    </div>
  );
}

export default ItemListContainer
