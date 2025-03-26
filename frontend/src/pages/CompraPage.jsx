import React, { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast'

const CompraPage = () => {

  const { carrito, totalCarrito, vaciarCarrito1 } = useContext(CartContext)

  const navigate = useNavigate()

  const handleComprobante = () => {
    if (carrito.length > 0) {
    vaciarCarrito1()
    toast.success("Compra realizada con éxito", {
      position: "bottom-right",
      style: {
        background: "#101010",
        color: "#fff",
        fontSize: "25px"
      }
    })
    navigate("/login/compra/comprobante")} else {
      toast.error("El carrito está vacío", {
        position: "bottom-right",
        style: {
          background: "#fb3b1b",
          color: "#fff",
          fontSize: "25px"
        }
      })
    }
  }


  const [formData, setFormData] = useState({
    paymentMethod: '',
    receiveOption: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Datos enviados:', formData);
  };

  return (
    <div className="text-white border-4 w-1/3 rounded-xl flex-wrap flex-col justify-center">
    <div className='flex'>
      <h2 className=" w-full text-3xl justify-self-center bg-blue-900 rounded-lg border-b-4 border-gray-500-600 shadow-2xl text-center">Finalizar Compra</h2>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="max-w-sm text-justify justify-self-center" htmlFor="paymentMethod">
            Método de pago:
          </label>
          <select
            id="paymentMethod"
            name="paymentMethod"
            value={formData.paymentMethod}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
            required
          >
            <option className='text-black' value="">Seleccione un método</option>
            <option className='text-black' value="MP Coin">MP Coin</option>
            <option className='text-black' value="Dólares">Dólares</option>
          </select>
        </div>

        <div className="mb-6">
          <label className="max-w-sm text-justify justify-self-center" htmlFor="receiveOption">
            Recibirás en:
          </label>
          <select
            id="receiveOption"
            name="receiveOption"
            value={formData.receiveOption}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
            required
          >
            <option className='text-black' value="">Seleccione una opción</option>
            <option className='text-black' value="Casa">Casa</option>
            <option className='text-black' value="Paquetería">Paquetería</option>
          </select>
        </div>
        <div className=' flex justify-center'>
        <button
          type="submit"
          onClick={handleComprobante}
          disabled={!formData.paymentMethod || !formData.receiveOption}
          className={`w-1/2 py-2 px-4 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
            (!formData.paymentMethod || !formData.receiveOption)
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-green-600 hover:bg-green-700 text-white"
            }`}
        >
          Confirmar Compra
        </button>
        </div>
      </form>
      <div className='text-center '>
        Total Compra: ${totalCarrito()}
      </div>
    </div>
  );
};

export default CompraPage