
import React, { useEffect, useState } from 'react'
import ItemDetail from '../itemDetail/ItemDetail'
import { useParams } from 'react-router-dom'
import { getDoc, doc, collection } from 'firebase/firestore'
import { db } from '../../firebase/firebaseConfig'

const ItemDetailContainer = () => {

  const [product, setProduct] = useState(undefined)
  const { id } = useParams()

  useEffect(() => {

    const itemCollection = collection(db, "products")
    const ref = doc(itemCollection, id)

    getDoc(ref)
      .then((res) => {
        setProduct(
          {
            id: res.id,
            ...res.data()
          }
        );
      })

  }, [id]);

  return (
    <div>
      {product !== undefined ?
        (
          <ItemDetail key={product.id} product={product} />
        ) :
        (<h2>Crear componente cargando el ItemDetail</h2>)}
    </div>
  );
}

export default ItemDetailContainer