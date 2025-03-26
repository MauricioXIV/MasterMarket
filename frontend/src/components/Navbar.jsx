import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import CartWidget from "./CartWidget";
import { getUser } from "../api/login.api";

function Navigation() {

    const [userData, setUserData] = useState({
        first_name: 'Juan',
        last_name: 'Pérez García',
        email: 'juan.perez@example.com',
        coins: Math.floor(Math.random() * 1000),
        image: 'https://randomuser.me/api/portraits/men/75.jpg'
      });
    
    useEffect(() => {
        async function solicitarPerfil() {
          const res = await getUser()
          console.log(res.data)
          setUserData(res.data)
        }
        solicitarPerfil()
      }, [])


    return (
        <div className="bg-indigo-600 flex flex-wrap items-center w-full py-3 border-b-4 border-gray-500-600 shadow-2xl p-6 rounded-lg font-extrabold text-xl">
        <h1 className="font-bold text-4xl flex w-1/3 mb-4">MercadoPreso</h1>
        <div className="text-end">
            <ul className="flex flex-wrap justify-self-end">
                <Link to="/login/nosotros" className="w-1/6">Nosotros</Link>
                <Link to="/login/productos" className="w-1/6 pr-4">Inicio</Link>
                <CartWidget className="w-1/6" />
                <Link to="/login/productos/hogar" className="w-1/6">Para el hogar</Link>
                <Link to="/login/productos/tecnologia" className="w-1/6">Tecnología</Link>
                <Link to="/login/productos/outfit" className="w-1/6">Outfit</Link>
                <div className="flex flex-wrap w-full text-center mr-20">
                <Link to="/login/perfil" className="w-1/2 justify-self-center">Mi perfil</Link>
                <Link to="/login" className=" w-1/2">Cerrar sesión</Link>
                </div>
            </ul>
        </div>
        <h1 className="font-bold text-xl flex w-full mb-4">¡Bienvenido a la tienda online no. 1 en el mundo, {userData.first_name}!</h1>
        </div>
    )
}

export default Navigation
