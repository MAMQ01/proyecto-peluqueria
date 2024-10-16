import './CartWidget.css'
import { PiShoppingCartSimpleLight } from 'react-icons/pi'

const CartWidget = () => {
    return (
        <div className='navbar-container-carrito'>
            <p>0</p>
            <PiShoppingCartSimpleLight className='carrito' />
        </div>
    )
}

export default CartWidget
