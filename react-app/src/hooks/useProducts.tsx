import { useState } from "react";

export interface Product {
    _id: string;
    name: string;
    store: string;
    description: string;
    picture: string;
    rating: number;
    price: number;
    shipping: number;
    wishlist: boolean;
}

export default function useProducts(pageLimit: number) {
    const [products, setProducts] = useState<Product[]>([]);
    const [totalProducts, setTotalProducts] = useState(0);

    async function fetchProducts(page: number) {
        const res = await fetch(`http://localhost:3001/products?_page=${page}&_limit=${pageLimit}`)
        const data = await res.json();
        setTotalProducts(Number(res.headers.get('X-Total-Count')));
        setProducts(data);
    }

    return {fetchProducts, products, totalProducts}
}
