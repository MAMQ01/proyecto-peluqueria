
import ItemCountContainer from '../itemCount/ItemCountContainer'
import { ContextCart } from '../context/ContextCart'
import { useContext } from 'react'


const ItemDetail = ({ product }) => {

  const { addToCart, getQuantityById } = useContext(ContextCart)

  return (
    <div>
      <div>
        <h3>{product.id}</h3>
        <h3>{product.price}</h3>
        <h3>{product.name}</h3>
      </div>
      <ItemCountContainer initialStock={product.stock} initial={getQuantityById(product.id)} addToCart={addToCart} product={product} />
    </div>
  )
}

export default ItemDetail