"use client";

/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from "next/image";
import React, { useState } from "react";
import tamarind from "../../../public/images/tamarindpowder.png";
import chicken from "../../../public/images/chickencurry.png";
import ProductModal from "../productModal";

const Products = () => {
  const categories = [
    "All",
    "Curry Masala",
    "Fry",
    "Basic spices",
    "Health & Nutrition",
  ];

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const products = [
    {
      id: 1,
      name: "Tamarind Rice Powder",
      price: 240,
      weight: "50g",
      image: tamarind,
      tag: "Save 50%",
      category: "Basic spices",
      rating: 4.5,
      reviews: 12,
      ingredients: ["Tamarind", "Spices", "Salt"],
    },
    ...Array(8).fill({
      id: 2,
      name: "Chicken Curry Masala",
      price: 240,
      weight: "50g",
      image: chicken,
      category: "Curry Masala",
      rating: 4.6,
      reviews: 8,
      ingredients: ["Chilli", "Coriander", "Cumin", "Salt"],
    }),
  ];

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  const openModal = (product: any) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  console.log("setSelectedProduct", selectedProduct);

  return (
    <>
      <section className="px-4 py-32 bg-[#f2f2f2] ">
        <h2 className="text-4xl font-semibold text-center mb-6">
          Introducing <span className="text-primary">Our Products</span>
        </h2>

        <div className="flex justify-center space-x-4 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`cursor-pointer ${
                selectedCategory === cat
                  ? "text-white !border-b-[#ad1f2f] text-primary border-b-2"
                  : "text-gray-700"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-2 bg-white md:w-10/12 mx-auto ">
          {filteredProducts.map((product, index) => (
            <div
              key={index}
              onClick={() => openModal(product)}
              className="rounded-lg shadow hover:bg-[#ad1f2f] hover:text-white hover:shadow-md transition cursor-pointer"
            >
              <div className="relative mb-4">
                <Image
                  src={product.image}
                  alt={product.name}
                  layout="cover"
                  objectFit="cover"
                  className="!rounded-xl w-full"
                />
                {product.tag && (
                  <span className="absolute top-2 left-2 bg-yellow-400 text-xs font-bold px-2 py-1 rounded">
                    {product.tag}
                  </span>
                )}
              </div>
              <div className="px-2 py-4">
                <h3 className="text-lg font-normal">{product.name}</h3>
                <p className="text-sm">{product.weight}</p>
                <p className="font-bold mt-2">₹{product.price.toFixed(2)}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <ProductModal
        isOpen={isModalOpen}
        onClose={closeModal}
        product={selectedProduct}
      />
    </>
  );
};

export default Products;
