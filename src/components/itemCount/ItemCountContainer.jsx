
import React from 'react'
import { useState, useEffect } from 'react'
import ItemCount from './ItemCount'

const CounterItemsContainer = ({ initialStock, initial }) => {

    const [counter, setCounter] = useState(initial)
    const [stock, setStock] = useState(initialStock)

    useEffect(() => {
        if (stock === 0) {
            setCounter(0)
        }
    }, [stock])

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
            updateStock(stock - counter)
        }
        setCounter(1)
    }


    const updateStock = (newStock) => {
        setStock(newStock)
    }

    return (
        <ItemCount
            stock={stock}
            counter={counter}
            setCounter={setCounter}
            handleIncrease={handleIncrease}
            handleDecrease={handleDecrease}
            handleAddToCart={handleAddToCart}
        />
    )
}

export default CounterItemsContainer