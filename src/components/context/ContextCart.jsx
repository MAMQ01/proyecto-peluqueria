
import { createContext, useState, useEffect } from 'react'
import { getDocs, collection } from "firebase/firestore"
import { db } from "../../firebase/firebaseConfig"

export const ContextCart = createContext()

const ContextCartProvider = ({ children }) => {

    const [cart, setCart] = useState([])
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchProducts = async () => {
            setLoading(true)
            const itemCollection = collection(db, "products")
            try {
                const querySnapshot = await getDocs(itemCollection)
                const productsData = querySnapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                }))
                setProducts(productsData)
            } catch (error) {
                console.error("Error fetching products:", error)
            } finally {
                setLoading(false)
            }
        }

        fetchProducts()
    }, [])

    const getFilteredProducts = (categoryName, sexo) => {
        // Si no hay filtros, devuelve todos los productos
        if (!categoryName && !sexo) {
            return products;
        }
    
        // Si solo hay categoría
        if (categoryName && !sexo) {
            return products.filter(product => product.category === categoryName);
        }
    
        // Si solo hay sexo
        if (!categoryName && sexo) {
            return products.filter(product => product.sexo === sexo);
        }
    
        // Si hay ambos filtros
        return products.filter(product => 
            product.category === categoryName && product.sexo === sexo
        );
    };

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
        getTotalCart,
        products,
        loading,
        getFilteredProducts
    }

    return (
        <ContextCart.Provider value={data}>
            {children}
        </ContextCart.Provider>
    )
}

export default ContextCartProvider