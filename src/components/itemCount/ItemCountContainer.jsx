
import { useState, useEffect } from 'react'
import ItemCount from './ItemCount'

const CounterItemsContainer = ({ initialStock, initial = 1, addToCart, product }) => {

    const [counter, setCounter] = useState(initial)
    const [stock, setStock] = useState(initialStock)

    useEffect(() => {
        setCounter(initial)
    }, [initial, stock])

    const handleDecrease = () => {
        if (counter > 1) {
            setCounter(counter - 1)
        }
    }

    const handleIncrease = () => {
        if (counter < stock) {
            setCounter(counter + 1)
        }
    }

    const handleAddToCart = () => {
        if (counter > 0 && counter <= stock) {
            updateStock(stock) //Todo
            addToCart({...product,
                quantity: counter
            });
        }
    }

    const updateStock = (newStock) => {
        setStock(newStock)
    }

    return (
        <ItemCount
            stock={stock}
            counter={counter}
            handleIncrease={handleIncrease}
            handleDecrease={handleDecrease}
            handleAddToCart={handleAddToCart}
        />
    )
}

export default CounterItemsContainer