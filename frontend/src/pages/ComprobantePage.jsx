import React from "react";

const ComprobantePage = () => {
    return (
        <div className="text-white flex flex-wrap border-4 rounded-lg w-1/4 mt-28 bg-zinc-500">
            <h2 className="w-full text-center border-2 text-3xl text-lime-500">Tu compra se ha realizado con éxito</h2>
            <table className="flex w-full flex-wrap">
                <tr className="flex w-full">
                    <td className="w-1/5 border-2">Nombre:</td>
                    <td className="w-4/5 text-center border-2">Mauricio</td>
                </tr>
                <tr className="flex w-full">
                    <td className="w-1/5 border-2">Email:</td>
                    <td className="w-4/5 text-center border-2">mauballe11@gmail.com</td>
                </tr>
                <tr className="flex w-full">
                    <td className="w-1/5 border-2">Total de compra:</td>
                    <td className="w-4/5 text-center border-2">$5000</td>
                </tr>
                <tr className="flex w-full">
                    <td className="w-1/5 border-2">Método de pago utilizado:</td>
                    <td className="w-4/5 text-center border-2">MP Coin</td>
                </tr>
                <tr className="flex w-full">
                    <td className="w-1/5 border-2">Recibirás en:</td>
                    <td className="w-4/5 text-center border-2">Casa</td>
                </tr>
            </table>
        </div>
    )
}

export default ComprobantePage