import React, { useState, useEffect, useContext } from 'react';
import CounterItems from './CounterItems';
import { ContextCart } from '../context/ContextCart';

const CounterItemsContainer = ({ initialStock, addToCart, product }) => {

  const { getQuantityById } = useContext(ContextCart);
  const [counter, setCounter] = useState(() => getQuantityById(product.id) || 1);
  const [stock, setStock] = useState(initialStock);

  useEffect(() => {
    setCounter(getQuantityById(product.id) || 1);
  }, [product.id, getQuantityById]);

  const handleDecrease = () => {
    if (counter > 1) {
      setCounter(counter - 1);
    }
  };

  const handleIncrease = () => {
    if (counter < stock) {
      setCounter(counter + 1);
    }
  };

  const handleAddToCart = () => {
    if (counter > 0 && counter <= stock) {
      setStock(stock); // Actualizar el stock
      addToCart({ ...product, quantity: counter });
    }
  };

  //Este un arreglo temporal porque no tiene sentido agotar un stock si no se confirman las compras.
  /* const handleAddToCart = () => {
    if (counter > 0 && counter <= stock) {
      setStock(prevStock => prevStock - counter);
      addToCart({ ...product, quantity: counter });
    }
  }; */

  return (
    <CounterItems
      stock={stock}
      counter={counter}
      handleIncrease={handleIncrease}
      handleDecrease={handleDecrease}
      handleAddToCart={handleAddToCart}
    />
  );
};

export default CounterItemsContainer;
