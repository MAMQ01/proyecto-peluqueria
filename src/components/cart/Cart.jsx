
import { useContext } from 'react'
import { ContextCart } from '../context/ContextCart'
import { Button } from '@mui/material';

const Cart = () => {

  const {
    cart,
    clearCart,
    getSubTotalProductById,
    getIvaProductById,
    getTotalProductById,
    getSubTotalCart,
    getIvaCart,
    getTotalCart } = useContext(ContextCart)

  return (
    <div>
      {
        cart.length > 0 ?
          (<div>
            {
              cart.map((product) => (
                <div key={product.id}>
                  <h2>{product.name + " " + product.quantity}</h2>
                  <h3>precio: ${product.price}</h3>
                  <h3>Subtotal Articul{product.quantity > 1 ? "os" : "o"} ${getSubTotalProductById(product.id)}</h3>
                  <h3>IVA Articul{product.quantity > 1 ? "os" : "o"} ${getIvaProductById(product.id)}</h3>
                  <h3>Total Articul{product.quantity > 1 ? "os" : "o"} ${getTotalProductById(product.id)}</h3>
                  <Button variant='outlined' color='error' onClick={() => clearCart(product.id)}>Quitar</Button>
                  <hr />
                </div>
              ))
            }
            <Button color='error' variant='contained' onClick={() => clearCart()}>Vaciar carrito</Button>
            <h3>IVA Total ${getIvaCart()}</h3>
            <h3>Subtotal Total ${getSubTotalCart()}</h3>
            <h3>Total ${getTotalCart()}</h3>
          </div>) :
          (<h2>Crear componente carro vacío</h2>)
      }
    </div>
  );

}
export default Cart