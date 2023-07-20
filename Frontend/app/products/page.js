// pages/products/page.js

import React from 'react';
import Image from "next/image";
import Link from "next/link";
import { product1 } from '@/public/image';

const products = [
  { id: 1, name: "Product 1", price: 10 },
  { id: 2, name: "Product 2", price: 20 },
  { id: 3, name: "Product 3", price: 30 },
  // Add more sample products here
];

const ProductPage = () => {
  return (
    <div>
      <h1>Products Page</h1>
      {products.map((product) => (
        <div key={product.id}>
          <Image
            src={product1} // Replace with actual product image path
            alt="Product Image"
            width={100}
            height={100}
          />
          <p>{product.name}</p>
          <p>${product.price}</p>
        </div>
      ))}
      <Link href="/products/add">Add Product</Link>
      {/* Add a link to navigate to the "Add Product" page */}
    </div>
  );
};

export default ProductPage;
