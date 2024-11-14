
import { createContext, useState } from 'react'

export const ContextCart = createContext()

const ContextCartProvider = ({ children }) => {

    const [cart, setCart] = useState([])

    const addToCart = (element) => {
        if (cart.some((itemCart) => itemCart.id === element.id)) {
            let newCart = cart.map((product => {
                if (product.id === element.id) {
                    let newProduct = {
                        ...product,
                        quantity: element.quantity
                    }
                    return newProduct
                } else {
                    return product
                }
            }))
            setCart(newCart)
        } else {
            setCart([...cart, element]);
        }
    }

    const clearCart = (id) => {
        if (id) {
            return setCart(cart.filter((item) => item.id !== id))
        } else {
            return setCart([])
        }
    }

    const getQuantityById = (id) => {
        return cart.find(elementCart => elementCart.id === id)?.quantity
    }

    const getIvaProductById = (id) => {
        const product = cart.find(elementCart => elementCart.id === id)
        return product.price * product.quantity * 0.21
    }

    const getSubTotalProductById = (id) => {
        const product = cart.find(elementCart => elementCart.id === id)
        return product.price * product.quantity
    }

    const getTotalProductById = (id) => {
        return getIvaProductById(id) + getSubTotalProductById(id)
    }

    const getSubTotalCart = () => {
        return cart.reduce((acc, element)=>{
            return acc + getSubTotalProductById(element.id)
        }, 0)
    }

    const getIvaCart = () => {
        return cart.reduce((acc, element)=>{
            return acc + getIvaProductById(element.id)
        }, 0)
    }

    const getTotalCart = () => {
        return cart.reduce((acc, element)=>{
            return acc + getTotalProductById(element.id)
        }, 0)
    }

    const data = {
        cart,
        addToCart,
        clearCart,
        getQuantityById,
        getSubTotalProductById,
        getIvaProductById,
        getTotalProductById,
        getSubTotalCart,
        getIvaCart,
        getTotalCart
    }

    return (
        <ContextCart.Provider value={data}>
            {children}
        </ContextCart.Provider>
    )
}

export default ContextCartProvider