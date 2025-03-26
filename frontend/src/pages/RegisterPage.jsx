import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { addUser } from "../api/login.api";

const RegisterPage = () => {

    const {register, handleSubmit, formState: {errors}} = useForm()

    const navigate = useNavigate()

    const onSubmit = handleSubmit(async (data) => {
        const res = await addUser(data)
        console.log(data)
        if (res) {
            navigate("/login")
        }
    })


    return(
        <div className="text-white flex items-center justify-center flex-wrap p-5">
            <form onSubmit={onSubmit}>
                <input
                className="bg-zinc-700 p3 rounded-lg block w-full mb-3"
                type="text"
                placeholder="First name"
                {...register("first_name", {required: true})}
                />
                <input
                className="bg-zinc-700 p3 rounded-lg block w-full mb-3"
                type="text"
                placeholder="last_name"
                {...register("last_name", {required: true})}
                />
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
                Sign in</button>
                </form>
        </div>
    )
}

export default RegisterPage