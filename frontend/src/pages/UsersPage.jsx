import React from "react";
import UsersTable from "../components/UsersTable"
import logo from "../images/carrote.jpg"

const UsersPage = () => {
    return( <div className="flex flex-wrap justify-center w-full ">
        <div className="w-full border border-b-4 text-2xl h-1/5 flex items-center border-e-gray-300  shadow-xl justify-between">
        <p className="pl-6 font-mono">Bienvenido a Market Master. Tu tienda online de <b>confianza</b></p>
        <img src={logo} className="h-32 w-32 mr-28"/>
        </div>
        <UsersTable />
        </div>
    )
}

export default UsersPage