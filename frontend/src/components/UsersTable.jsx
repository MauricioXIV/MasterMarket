import React, { useEffect, useState } from "react";
import login, { getAllUsers } from "../api/login.api";
import Users from "./Users";
import { useForm } from 'react-hook-form'
import { data, Link, useNavigate } from "react-router-dom";
import { logoutUser } from "../api/refreshToken"
import logo from "../images/carroama.jpg"
const UsersTable = () => {

    const {register, handleSubmit, formState: {errors}} = useForm()

    const [res, setRes] = useState("")

    const navigate = useNavigate()

    const onSubmit = handleSubmit(async (data) => {
        const res = await login(data.email, data.password)
        setRes(res)
        if (res === true) {
            window.location.href = "/login/productos"
        }
    })

    useEffect(() => {
        const token = localStorage.getItem('access_token');
        if (token) {
        logoutUser()
        }
    },[])

    return (
        <div className="text-black flex items-center justify-center flex-wrap border-e-gray-300 shadow-2xl border-solid border-4 h-2/3 w-1/3 mt-32">
            <div className="w-full text-center text-3xl font-bold font-sans p-5">Inicio de sesión</div>
            <div className="flex w-full justify-evenly text-center items-center border border-stone-100 shadow-xl border-t-4">
                <img src={logo} className="h-60 w-60"/>
            </div>
            <form onSubmit={onSubmit} className="flex flex-wrap">
                <div className="w-full">
                <input
                className="bg-zinc-300 p3 rounded-lg block mb-3 mx-auto w-5/6 h-1/2"
                type="text"
                placeholder="email"
                {...register("email", {required: true})}
                />
                {errors.email && <span>This field is required</span>}
                <input
                className="bg-zinc-300 p3 rounded-lg block mb-3 mx-auto w-5/6 h-1/2"
                type="password"
                placeholder="password"
                {...register("password", {required: true})}
                /></div>
                {errors.password && <span>This field is required</span>}
                <button
                className="bg-white p3 rounded-lg block w-full mt-9 border-e-gray-300 border-solid border-4 shadow-gray-500 shadow-lg">
                Login</button>
                {
                    res === false &&
                    <div className="text-red-700 w-full text-center">
                        Usuario o contraseña incorrectos.
                    </div>
                }
                </form>
                <div className="text-black w-full text-center">
                    <Link to="/register/">¿No tienes cuenta? <b>Regístrate </b></Link>
                </div>
        </div>
    )
}

export default UsersTable