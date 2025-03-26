import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProduct } from "../api/products.api";
import ProductCount from "../components/ProductCount";
import { CartContext } from "../context/CartContext";

const ProductDetailPage = () => {

    const {carrito, agregarAlCarrito} = useContext(CartContext)

    const { id } = useParams()
    const [product, setProduct] = useState({})

    const [contador, setContador] = useState(0)

    useEffect(() => {
        async function solicitarProducto() {
          try {
            const res = await getProduct(id)
            console.log("Respuesta de la API:", res)
            setProduct(res.data[0] || res.data)
          } catch (error) {
            console.error("Error al cargar el producto:", error);
          }
        }
        solicitarProducto();
      }, [id]);

    function handleSumar() {
        setContador(contador + 1)
    }
    function handleRestar() {
        contador > 1 && setContador(contador - 1)
    }


    return(
    <div className="text-white border-4 w-1/4 rounded-xl flex-wrap flex-col justify-center hover:scale-110 transition-transform duration-300"> {Object.keys(product).length > 0 &&
        <>
        <div className="bg-blue-900 rounded-lg border-b-4 border-gray-500-600 shadow-2xl"><h1 className="text-3xl justify-self-center">{product.title}</h1></div>
        <div className="flex items-center justify-center w-full">  <img src={product.image} alt={product.title} className="w-48 h-48" /> </div>
        <div className="flex items-center justify-center w-full"><div className="text-2xl">{product.category}</div></div>
        <div className="max-w-sm text-justify justify-self-center">{product.description}</div>
        <div className="flex justify-center w-full"><div>${product.price}</div></div>
        <ProductCount 
        contador={contador}
        handleRestar={handleRestar}
        handleSumar={handleSumar}
        handleAgregar={() => { agregarAlCarrito(product, contador) }} />
        </>
            }
    </div>
    )
}

export default ProductDetailPage