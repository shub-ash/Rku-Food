import Image from "next/image";
import React from "react";
import tamarind from "../../../public/images/rasam.png";
import chicken from "../../../public/images/rasam.png";

const FeaturedProducts = () => {
  const featured = [
    {
      id: 1,
      name: "Rasam Powder",
      price: 45,
      weight: "50g",
      image: tamarind,
      tag: "Save 10%",
    },
    {
      id: 2,
      name: "Rasam Powder",
      price: 45,
      weight: "50g",
      image: chicken,
    },
    {
      id: 3,
      name: "Rasam Powder",
      price: 45,
      weight: "50g",
      image: chicken,
      highlight: true,
    },
    {
      id: 4,
      name: "Rasam Powder",
      price: 45,
      weight: "50g",
      image: chicken,
    },
    {
      id: 5,
      name: "Rasam Powder",
      price: 45,
      weight: "50g",
      image: chicken,
    },
  ];
  return (
    <section className="px-4 py-8 ">
      <h2 className="text-4xl font-semibold text-center mb-6">
        Featured <span className="text-primary">Products</span>
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 md:w-10/12 w-full  mx-auto gap-6 mb-8">
        {featured.map((product) => (
          <div
            key={product.id}
            className=" rounded-lg  shadow-sm hover:bg-[#ad1f2f] hover:text-white hover:shadow-md transition pb-6"
          >
            <div className="relative mb-3">
              <Image
                src={product.image}
                alt={product.name}
                layout="cover"
                objectFit="cover"
                className="!rounded-3xl !w-full"
              />
              {product.tag && (
                <span className="absolute top-2 left-2 bg-yellow-400 text-xs font-bold px-2 py-1 rounded">
                  {product.tag}
                </span>
              )}
            </div>
            <h3 className="text-lg font-normal px-2 rounded transition">
              {product.name}
            </h3>
            <p className="text-xs text-gray-600 px-2 rounded transition">
              {product.weight}
            </p>
            <p className="font-bold text-lg mt-1 px-2 rounded transition">
              ₹{product.price.toFixed(2)}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedProducts;
