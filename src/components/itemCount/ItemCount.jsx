
import "./ItemCount.css"

const CounterItems = ({ stock, counter, handleDecrease, handleIncrease, handleAddToCart }) => {

    return (
        <div className='container'>
            <p className='stock-tag'>Stock disponible: {stock}</p>
            <div className='container-quantity'>
                <div className='container-quantity-buttons'>
                    <button className='handle-decrease' onClick={handleDecrease} disabled={stock === 0}>-</button>
                    <h3 className='counter-tag'>{counter}</h3>
                    <button className='handle-increase' onClick={handleIncrease} disabled={stock === 0}>+</button>
                </div>
                <button className='add-button' onClick={handleAddToCart} disabled={stock === 0}>Agregar al carrito</button>
            </div>
        </div>
    )
}

export default CounterItems