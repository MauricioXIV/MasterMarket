import React from "react";
import { Link } from 'react-router-dom';

function Navigation() {
    return (
        <div className="bg-indigo-600 flex justify-between items-center w-full py-3 border-b-4 border-gray-500-600 shadow-2xl p-6 rounded-lg font-extrabold text-xl">
        <h1 className="font-bold text3xl flex w-4/5 mb-4">MercadoPreso</h1>
        <div className="">
            <ul className="flex flex-wrap">
                <Link to="/login/nosotros" className="w-1/3">Nosotros</Link>
                <Link to="/login/productos" className="w-1/3">Inicio</Link>
                <Link to="/login/cat_dest" className="w-1/3">Categorías destacadas</Link>
                <Link to="/login/hogar" className="w-1/3">Para el hogar</Link>
                <Link to="/login/tecnologia" className="w-1/3">Tecnología</Link>
                <Link to="/login/outifts" className="w-1/3">Outfits</Link>
            </ul>
        </div>
        </div>
    )
}

export default Navigation
