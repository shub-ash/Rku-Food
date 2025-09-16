/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Star, Minus, Plus, ShoppingCart, Heart } from "lucide-react";
import { useCart } from "@/context/cartContext";
import Image from "next/image";

interface ProductModalProps {
  product: any;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProductModal({
  product,
  isOpen,
  onClose,
}: ProductModalProps) {
  const { dispatch } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);

  if (!product) return null;

  const handleAddToCart = () => {
    dispatch({
      type: "ADD_ITEM",
      payload: {
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image?.src ?? "/placeholder.png",
        description: product.description,
        quantity, // ✅ include selected quantity
      },
    });
    onClose();
  };

  console.log("product", product);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-10 z-50 flex items-center justify-center bg-black/60 backdrop-blur-md ">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="relative w-full max-w-5xl bg-white rounded-2xl shadow-xl overflow-hidden"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-600 cursor-pointer"
            >
              <X className="h-6 w-6" />
            </button>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-6">
              {/* Left Side: Images */}
              <div className="flex gap-4">
                {/* Main Image */}
                <div className="flex-1">
                  <Image
                    src={product.image?.src ?? "/placeholder.png"}
                    alt={product.name}
                    width={product.image?.width ?? 500}
                    height={product.image?.height ?? 500}
                    className="!rounded-3xl object-cover w-full h-auto"
                  />
                </div>
              </div>

              {/* Right Side: Product Info */}
              <div>
                {/* Title */}
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  {product.name}
                </h2>

                {/* Price + Stock */}
                <div className="flex items-center gap-3 mb-4">
                  <p className="text-2xl font-semibold text-primary">
                    ₹{product.price.toFixed(2)}
                  </p>
                  {product.stock && (
                    <span className="text-secondary font-medium">
                      {product.stock}
                    </span>
                  )}
                </div>

                {/* Rating */}
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${
                        i < Math.floor(product.rating)
                          ? "text-yellow-400 fill-current"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                  <span className="ml-2 text-sm text-gray-600">
                    {product.rating} ({product.reviews} reviews)
                  </span>
                </div>

                {/* Ingredients */}
                <div className="mb-4">
                  <h4 className="font-semibold mb-1">Ingredients:</h4>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {product.ingredients.join(", ")}
                  </p>
                </div>

                {/* Quantity + Cart */}
                <div className="flex items-center gap-4 mt-6">
                  <div className="flex items-center border rounded-lg">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="p-2 hover:bg-gray-100"
                    >
                      <Minus className="h-4 w-4" />
                    </button>
                    <span className="px-4 py-2">{quantity}</span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="p-2 hover:bg-gray-100"
                    >
                      <Plus className="h-4 w-4" />
                    </button>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={handleAddToCart}
                    className="flex-1 bg-secondary hover:bg-green-700 text-white py-3 rounded-lg font-semibold flex items-center justify-center gap-2"
                  >
                    <ShoppingCart className="h-5 w-5" />
                    Add to Cart
                  </motion.button>

                  <button className="p-3 border rounded-lg hover:bg-gray-100">
                    <Heart className="h-5 w-5 text-gray-500" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
