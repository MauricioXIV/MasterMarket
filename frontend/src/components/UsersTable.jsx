import React, { useEffect, useState } from "react";
import { getAllUsers } from "../api/login.api";
import Users from "./Users";

const UsersTable = () => {

    const [user, setUser] = useState([])

    useEffect(() => {
        async function solicitoUsuarios() {
            const res = await getAllUsers()
            setUser(res.data)
        }
        solicitoUsuarios()
    },[])

    return (
        <div className="text-white flex items-center justify-center flex-wrap p-5">
            {
                user.map((res) => (
                    <Users key={res.email} user={res} />
                ))
            }
        </div>
    )
}

export default UsersTable