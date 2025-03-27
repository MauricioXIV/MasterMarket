import React, { useEffect, useState } from "react";
import { getAllProducts, getProduct, getProductsByCategory } from "../api/products.api";
import Product from "./Product";
import { useParams } from "react-router-dom";

const ProductsList = () => {

    const [products, setProducts] = useState([])
    const category = useParams().category


    function capitalizeFirstLetter(str) {
        if (!str) return ''
        return str.charAt(0).toUpperCase() + str.slice(1);
    }
    
    const titulo = category ? capitalizeFirstLetter(category) : "Nuestros productos estrella"

    useEffect(() => {

        async function solicitoProductos() {
            if (category) {
                const res = await getProductsByCategory(category)
                setProducts(res.data)
            } else {
                const res = await getAllProducts()
                setProducts(res.data)
            }   
        }
        solicitoProductos()
    },[category])

    return (
        <div><h1 className="text-zinc-900 text-3xl font-extrabold mb-4 mt-3">{titulo}</h1>
        <div className="flex space-x-12 space-y-12 justify-center flex-wrap p-5 border-4 border-gray-300 shadow-xl mb-32">

            {
                products.map((res) => (
                    <Product key={res.id} product={res} />
                ))
            }
        </div>
        </div>
    )
}

export default ProductsList