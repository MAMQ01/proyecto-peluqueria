
import { useEffect, useState } from "react"
import { products } from "../../productsMock"
import "./ItemListContainer.css"
import ItemList from "../ItemList/ItemList"
import ItemCountContainer from "../itemCount/ItemCountContainer"

const ItemListContainer = () => {

  const [items, setItems] = useState([])

  useEffect(() => {
    const task = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(products)
      }, 500)
    })

    task
      .then((res) => { setItems(res) })
      .catch((err) => { console.log("Se rechazo la petición") })
    console.log("Se hizo la petición")
  }, [])

  return (
    <div>
      <ItemCountContainer initial={1} initialStock={10}/>
      <ItemList items={items} />
    </div>
  )
}

export default ItemListContainer
