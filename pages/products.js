import { response } from "express";
import { useEffect, useState } from "react";
import React from "react";

function ProductsPage() {
    const [Products, setProducts] = useState([])

    useEffect(() => {
        async function fetchProducts() {
            console.log('BEFORE FETCHs');

            try {
                const response = await fetch('/api/products')
                console.log(response)
                const data = await response.json()
                setProducts(data.Products)

            } catch (e) {
                console.log(e)
            }

        }

        fetchProducts()
    }, [])

    return (
        <div>
            <h1>Products</h1>
            <ul>
                {products.map(product => (
                    <li key={product.id}>{product.name}</li>
                ))}
            </ul>
        </div>
    );
}

export default ProductsPage;
