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
        <div className="w-full border-b-8 text-xl h-1/5 flex items-center border-gray-200  shadow-xl shadow-slate-400 justify-between rounded-lg flex-wrap">
        <h1 className="font-bold text-4xl flex w-1/2 mb-4">Master Market</h1>
        <div className="w-1/2">
            <ul className="flex flex-wrap justify-self-end mt-3 text-yellow-400 rounded-md font-bold">
                <Link to="/login/nosotros" className="w-1/6 shadow-lg  shadow-slate-400 border-2 h-1/2 text-center mr-3">Nosotros</Link>
                <Link to="/login/productos" className="w-1/6 shadow-lg  shadow-slate-400 border-2 h-1/2 text-center mr-3">Inicio</Link>
                <Link to="/login/productos/hogar" className="w-1/6 shadow-lg  shadow-slate-400 border-2 h-1/2 text-center mr-3">Para el hogar</Link>
                <Link to="/login/productos/tecnologia" className="w-1/6 shadow-lg  shadow-slate-400 border-2 h-1/2 text-center mr-3">Tecnología</Link>
                <Link to="/login/productos/outfit" className="w-1/6 shadow-lg  shadow-slate-400 border-2 h-1/2 text-center ">Outfit</Link>
                <div className="flex flex-wrap w-full justify-between mr-20 mt-6">
                <Link to="/login/perfil" className="w-1/3 shadow-lg  shadow-slate-400 border-2 h-1/2 text-center mr-3">Mi perfil</Link>
                <Link to="/login" className="w-1/3 shadow-lg  shadow-slate-400 border-2 h-1/2 text-center mr-3">Cerrar sesión</Link>
                <CartWidget className="w-1/3 shadow-lg  shadow-slate-400 border-2 h-1/2 text-center mr-3" />
                </div>
            </ul>
        </div>
        <h1 className="font-bold text-xl flex w-full mb-4">¡Bienvenido a la tienda online no. 1 en el mundo, {userData.first_name}!</h1>
        </div>
    )
}

export default Navigation
