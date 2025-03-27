import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import logo from "../images/lloron.jpg"
import { getUser } from "../api/login.api";

const Carrito = () => {

    const { carrito, vaciarCarrito, totalCarrito } = useContext(CartContext)

    const handleVaciar = () => {
        vaciarCarrito()
    }

    const navigate = useNavigate()

    const handleCompra = () => {
        navigate("/login/compra/")
    }

    console.log(carrito)

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
        <>
        {
            carrito.map((prod) => (
                <div className="text-zinc-700 border-4 border-gray-50 w-1/5 rounded-xl flex-wrap flex-col justify-center hover:scale-110 transition-transform duration-300 shadow-xl shadow-slate-600 mt-8" key={prod.id}>
                    <div className="bg-yellow-200 rounded-lg border-b-4 border-gray-500-600 shadow-2xl"><h1 className="text-3xl justify-self-center text-yellow-500 font-semibold">{prod.title}</h1></div>
                    <div className="flex items-center justify-center w-full">  <img src={prod.image} alt={prod.title} className="w-48 h-48 rounded-lg" /> </div>
                    <div className="flex items-center justify-center w-full"><div className="text-2xl">{prod.category}</div></div>
                    <div>
                        <h2>{prod.description}</h2>
                    </div>
                    <div className="flex justify-center w-full"><div>${prod.price}</div></div>
                    <div className="flex justify-center w-full"><div className="text-2xl">Cantidad: {prod.cantidad}</div></div>
                </div>
                
            ))
        } { carrito.length >= 1 &&
        <div className=" flex w-full justify-center">
        <button onClick={handleVaciar} className="w-1/5 bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded shadow-md mr-2 justify-self-center mt-5">Vaciar Carrito</button>
        </div> }
        {carrito.length < 1 &&
        <div className="flex justify-center flex-wrap">
        <div className="text-4xl text-black w-full mt-20 text-center">El carrito está vacío :( Tus compras se mostrarán aquí.</div>
        <div className="flex"><img src={logo} alt="lloron" className="w-full"></img></div>
        </div>
        } { carrito.length >= 1 &&
    <div> 
        <div className="text-3xl text-black mt-5">
        <div>Total a pagar: ${totalCarrito()} </div>
        </div>
        <div>MM coins disponibles: {userData.coins}</div>
    </div> } { carrito.length >= 1 &&
    <div>
        <div className=" flex flex-wrap justify-center">
        <button onClick={handleCompra} className=" bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded shadow-md mr-2 justify-self-center mt-5 w-full ml-2">Comprar</button>
        </div>
    </div>}
        </>
    )
}

export default Carrito