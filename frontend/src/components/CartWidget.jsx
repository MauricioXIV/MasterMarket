import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

const CartWidget = () => {

    const { cantidadEnCarrito } = useContext(CartContext)

    return (
        <div className="w-1/5 shadow-lg  shadow-slate-400 border-2 h-auto text-center mr-3 flex">
            <Link to="login/carrito" className="w-full text-center">
            Carrito <div className="w-full">({cantidadEnCarrito()})</div>
            </Link>
        </div>
    )
}

export default CartWidget