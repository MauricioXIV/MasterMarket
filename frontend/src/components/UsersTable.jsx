import React, { useEffect, useState } from "react";
import login, { getAllUsers } from "../api/login.api";
import Users from "./Users";
import { useForm } from 'react-hook-form'
import { data, Link, useNavigate } from "react-router-dom";
import { logoutUser } from "../api/refreshToken"
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
        <div className="text-white flex items-center justify-center flex-wrap p-5">
            <form onSubmit={onSubmit}>
                <input
                className="bg-zinc-700 p3 rounded-lg block w-full mb-3"
                type="text"
                placeholder="email"
                {...register("email", {required: true})}
                />
                {errors.email && <span>This field is required</span>}
                <input
                className="bg-zinc-700 p3 rounded-lg block w-full mb-3"
                type="password"
                placeholder="password"
                {...register("password", {required: true})}
                />
                {errors.password && <span>This field is required</span>}
                <button
                className="bg-indigo-500 p3 rounded-lg block w-full mt-3">
                Login</button>
                {
                    res === false &&
                    <div className="text-red-600">
                        Usuario o contraseña incorrectos.
                    </div>
                }
                </form>
                <div className="text-white">
                    <Link to="/register/">¿No tienes cuenta? Regístrate</Link>
                </div>
        </div>
    )
}

export default UsersTable