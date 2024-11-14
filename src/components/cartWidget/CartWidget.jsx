import { Link } from 'react-router-dom'
import { PiShoppingCartSimpleLight } from 'react-icons/pi'
import { useContext } from 'react'
import { ContextCart } from '../context/ContextCart'
import { Typography } from '@mui/material'

const CartWidget = () => {

    const { cart } = useContext(ContextCart)

    return (
        <Link to="/cart" style={{justifyContent: 'center', display: 'flex', alignItems: 'center', textDecoration: 'none', color: 'inherit'}} >
            <Typography>{cart.length}</Typography>
            <PiShoppingCartSimpleLight fontSize={32} />
        </Link>
    )
}

export default CartWidget
