import React, { useEffect, useState } from "react";
import { getAllProducts } from "../api/products.api";
import Product from "./Product";

const ProductsList = () => {

    const [products, setProducts] = useState([])

    useEffect(() => {
        async function solicitoProductos() {
            const res = await getAllProducts()
            setProducts(res.data)
        }
        solicitoProductos()
    },[])

    return (
        <div className="text-white flex space-x-8 space-y-6 justify-center flex-wrap p-5">
            {
                products.map((res) => (
                    <Product key={res.id} product={res} />
                ))
            }
        </div>
    )
}

export default ProductsList