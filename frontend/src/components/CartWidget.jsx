import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

const CartWidget = () => {

    const { cantidadEnCarrito } = useContext(CartContext)

    return (
        <div className="flex flex-col pr-5">
            <Link to="login/carrito">
            Carrito <div>({cantidadEnCarrito()})</div>
            </Link>
        </div>
    )
}

export default CartWidget