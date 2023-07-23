"use client";
// pages/products/page.js

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { product_input, products } from "@/utils/contentExports";
import Header from "@/components/Header";
import Cards from "@/components/Cards";
import Add from "../../components/Add/Add";

const ProductPage = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Header category="products" title="all Products" />
      <div className="buttons flex flex-col md:flex-row justify-end w-full">
        <button
          type="button"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          onClick={() => setOpen(true)}
        >
          add product
        </button>
        <button
          type="button"
          className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
        >
          View all
        </button>
      </div>
      <section className=" body-font h-full">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            <Cards array_card={products} />
          </div>
        </div>
        {open && (
          <Add slug="product" feilds={product_input} setOpen={setOpen} open={open}/>
        )}
      </section>
    </>
  );
};

export default ProductPage;
