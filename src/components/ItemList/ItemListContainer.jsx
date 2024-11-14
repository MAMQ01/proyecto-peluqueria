
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

  const { categoryName } = useParams()

  useEffect(() => {

    setLoading(true)

    const itemCollection = collection(db, "products")
    const fetchProducts = categoryName ? query(itemCollection, where("category", "==", categoryName)) : itemCollection
    getDocs(fetchProducts)
      .then((res) => {
        const products = res.docs.map(product => {
          return {
            id: product.id,
            ...product.data()
          }
        })

        setItems(products)
        setLoading(false)

        const categoryExists = products.length > 0;
        setCategoryExists(categoryExists);
        const allOutOfStock = products.length > 0 && products.every((product) => product.stock === 0);
        setOutOfStock(allOutOfStock);
      })
      .catch((err) => console.log(err))

  }, [categoryName])

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
  )
}

export default ItemListContainer
