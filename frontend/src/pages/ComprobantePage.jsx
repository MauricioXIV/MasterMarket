import React, { act, useContext, useEffect, useState } from "react";
import { getUser, updateProfile } from "../api/login.api";
import { CartContext } from "../context/CartContext";





const ComprobantePage = () => {

    const { recibir, totalCarrito, carrito, vaciarCarrito1, dinero, setDinero } = useContext(CartContext)

    const [total, setTotal] = useState(0)

    if (carrito.length > 0) {
        vaciarCarrito1()
    }

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
          setTotal(totalCarrito())
        }
        solicitarPerfil()
        if (dinero > 0) { async function actualizarPerfil() {
            const elDinero = {coins: dinero}
            const res = await updateProfile(elDinero);
            try {  
              if (res) {
                alert('MM coins actualizados correctamente');
                setDinero(0)
                }
              } catch (error) {
                console.error('Error al actualizar:', error);
                alert('Error al actualizar el perfil');
        }}
        actualizarPerfil()}
      }, [])

      console.log(total)

    return (
        <div className="text-black font-semibold flex flex-wrap border-4 border-slate-300 shadow-xl shadow-slate-400 rounded-lg w-1/4 mt-8  bg-slate-50">
            <h2 className="w-full text-center border-2 text-3xl text-lime-500">Tu compra se ha realizado con éxito</h2>
            <div className="flex w-full flex-wrap">
                <div className="flex w-full">
                    <td className="w-1/5 border-2">Nombre:</td>
                    <td className="w-4/5 text-center border-2">{userData.first_name} {userData.last_name}</td>
                </div>
                <div className="flex w-full">
                    <td className="w-1/5 border-2">Email:</td>
                    <td className="w-4/5 text-center border-2">{userData.email}</td>
                </div>
                <div className="flex w-full">
                    <td className="w-1/5 border-2">Total de compra:</td>
                    <td className="w-4/5 text-center border-2">{total}</td>
                </div>
                <div className="flex w-full">
                    <td className="w-1/5 border-2">Método de pago utilizado:</td>
                    <td className="w-4/5 text-center border-2">MP Coin</td>
                </div>
                <div className="flex w-full">
                    <td className="w-1/5 border-2">Recibirás en:</td>
                    <td className="w-4/5 text-center border-2">{recibir}</td>
                </div>
            </div>
        </div>
    )
}

export default ComprobantePage