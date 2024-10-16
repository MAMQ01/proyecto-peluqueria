
import { useEffect, useState } from "react"
import { products } from "../../productsMock"
import ItemList from "./ItemList"
import ItemCountContainer from "../itemCount/ItemCountContainer"

const ItemListContainer = () => {

  const [items, setItems] = useState([])
  const [post, setPost] = useState([])

  const createPost = () => {
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify({
        userId: 2,
        title: "Esta es una prueba desde react",
        body: "Acá ponemos una descripción"
      }),
      headers: {
        "Content-Type": "application/json",
      }
    })
      .then((res) => res.json())
      .then((res) => console.log(res))
  }

  useEffect(() => {
    const task = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(products)
      }, 500)
    })

    task
      .then((res) => { setItems(res) })
      .catch((err) => { console.log("Se rechazo la petición") })
  }, [])

  useEffect(() => {
    const getPost = fetch("https://jsonplaceholder.typicode.com/posts")
    getPost
      .then((res) => res.json())
      .then((res) => setPost(res))
      .catch((err) => { console.log("Dio error 😶‍🌫️") })
  }, [])

  console.log(post)

  return (
    <div>
      <ItemCountContainer initial={1} initialStock={10} />
      <ItemList items={items} />
      <button onClick={createPost}>Crear post</button>
    </div>
  )
}

export default ItemListContainer
