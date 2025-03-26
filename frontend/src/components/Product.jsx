import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Product = ({ product }) => {

    const navigate = useNavigate()

    const handleClick = () => {
        navigate(`/login/productos/unico/${product.id}`) 
    }

    return (
    <div key={product.id} onClick={handleClick} className="text-white border-4 w-1/5 rounded-xl flex-wrap flex-col justify-center hover:scale-110 transition-transform duration-300">
        <div className="bg-blue-900 rounded-lg border-b-4 border-gray-500-600 shadow-2xl"><h1 className="text-3xl justify-self-center">{product.title}</h1></div>
        <div className="flex items-center justify-center w-full">  <img src={product.image} alt={product.title} className="w-48 h-48" /> </div>
        <div className="flex items-center justify-center w-full"><div className="text-2xl">{product.category}</div></div>
        <div className="max-w-sm text-justify justify-self-center">{product.description}</div>
        <div className="flex justify-center w-full"><div>${product.price}</div></div>
    </div>
    )
}

export default Product