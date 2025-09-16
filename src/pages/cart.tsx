"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { motion } from "framer-motion";
import { Minus, Plus, Trash2, ArrowRight } from "lucide-react";
import Link from "next/link";
import { useCart } from "@/context/cartContext";

export default function Cart() {
  const { state, dispatch } = useCart();

  const updateQuantity = (id: string, newQuantity: number) => {
    dispatch({
      type: "UPDATE_QUANTITY",
      payload: { id, quantity: newQuantity },
    });
  };

  const removeItem = (id: string) => {
    dispatch({
      type: "REMOVE_ITEM",
      payload: id,
    });
  };

  const subtotal = state.total;
  const tax = subtotal * 0.1;
  const shipping = subtotal > 25 ? 0 : 5;
  const total = subtotal + tax + shipping;

  if (state.items.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Your cart is empty
          </h2>
          <p className="text-gray-600 mb-8">
            Add some delicious items to get started!
          </p>
          <Link
            href="/"
            className="bg-primary hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
          >
            Continue Shopping
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-xl shadow-lg overflow-hidden"
        >
          <div className="px-6 py-4 border-b border-gray-200">
            <h1 className="text-2xl font-bold text-gray-900">
              My Shopping Cart
            </h1>
          </div>

          <div className="lg:grid lg:grid-cols-3 lg:gap-x-12 lg:items-start xl:gap-x-16">
            {/* Cart Items */}
            <div className="lg:col-span-2">
              <ul className="divide-y divide-gray-200">
                {state.items.map((item: any, index: any) => (
                  <motion.li
                    key={`${item.id}-${index}`}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex py-6 px-6"
                  >
                    <div className="flex-shrink-0">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-24 h-24 rounded-md object-cover"
                      />
                    </div>

                    <div className="ml-4 flex flex-1 flex-col justify-between sm:ml-6">
                      <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
                        <div>
                          <div className="flex justify-between">
                            <h3 className="text-lg font-semibold text-gray-900">
                              {item.name}
                            </h3>
                          </div>
                          <p className="mt-1 text-sm text-gray-500 line-clamp-2">
                            {item.description}
                          </p>
                          <p className="mt-2 text-lg font-bold text-primary">
                            ${item.price.toFixed(2)}
                          </p>
                        </div>

                        <div className="mt-4 sm:mt-0 sm:pr-9">
                          <div className="flex items-center border rounded-md">
                            <button
                              onClick={() =>
                                updateQuantity(item.id, item.quantity - 1)
                              }
                              className="p-2 hover:bg-gray-100 transition-colors"
                            >
                              <Minus className="h-4 w-4" />
                            </button>
                            <span className="px-3 py-2 text-center font-medium">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() =>
                                updateQuantity(item.id, item.quantity + 1)
                              }
                              className="p-2 hover:bg-gray-100 transition-colors"
                            >
                              <Plus className="h-4 w-4" />
                            </button>
                          </div>

                          <div className="absolute top-0 right-0">
                            <button
                              onClick={() => removeItem(item.id)}
                              className="p-2 text-gray-400 hover:text-red-600 transition-colors"
                            >
                              <Trash2 className="h-5 w-5" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Order Summary */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-16 rounded-lg bg-gray-50 px-4 py-6 sm:p-6 lg:col-span-1 lg:mt-0 lg:p-8"
            >
              <h2 className="text-lg font-medium text-gray-900">
                Order summary
              </h2>

              <div className="mt-6 space-y-4">
                <div className="flex items-center justify-between">
                  <dt className="text-sm text-gray-600">Subtotal</dt>
                  <dd className="text-sm font-medium text-gray-900">
                    ${subtotal.toFixed(2)}
                  </dd>
                </div>
                <div className="flex items-center justify-between">
                  <dt className="text-sm text-gray-600">Tax</dt>
                  <dd className="text-sm font-medium text-gray-900">
                    ${tax.toFixed(2)}
                  </dd>
                </div>
                <div className="flex items-center justify-between">
                  <dt className="text-sm text-gray-600">Shipping</dt>
                  <dd className="text-sm font-medium text-gray-900">
                    {shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}
                  </dd>
                </div>
                <div className="flex items-center justify-between border-t border-gray-200 pt-4">
                  <dt className="text-base font-medium text-gray-900">
                    Order total
                  </dt>
                  <dd className="text-base font-medium text-gray-900">
                    ${total.toFixed(2)}
                  </dd>
                </div>
              </div>

              <div className="mt-6">
                <Link href="/checkout">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-primary hover:bg-red-700 text-white py-3 px-4 rounded-lg font-semibold flex items-center justify-center space-x-2 transition-colors"
                  >
                    <span>Proceed to Checkout</span>
                    <ArrowRight className="h-4 w-4" />
                  </motion.button>
                </Link>
              </div>

              <div className="mt-6 flex justify-center text-sm text-center text-gray-500">
                <p>
                  or{" "}
                  <Link
                    href="/"
                    className="text-primary font-medium hover:text-red-500"
                  >
                    Continue Shopping
                    <span aria-hidden="true"> &rarr;</span>
                  </Link>
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
