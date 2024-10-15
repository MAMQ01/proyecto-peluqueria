import "./Item.css"
import React from 'react'

const Item = ({ element }) => {
    return (
        <div className="item">
            <h3>${element.price}</h3>
            <h2>{element.name}</h2>
            <img className="item-img" src={element.image} alt="" />
        </div>
    )
}

export default Item