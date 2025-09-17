"use client";
import React, { useState } from "react";
import { useCart } from "@/context/cartContext";

export default function Checkout() {
  const { state } = useCart();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    company: "",
    address: "",
    country: "",
    state: "",
    email: "",
    phone: "",
    notes: "",
    paymentMethod: "cod",
  });

  const subtotal = state.total;
  const shipping = 0;
  const total = subtotal + shipping;

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Order placed successfully!");
  };

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 py-10">
        {/* Title */}
        <h1 className="text-2xl md:text-3xl font-bold text-center mb-10">
          My Shopping Cart
        </h1>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          {/* Left: Billing Info */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h2 className="text-lg font-semibold mb-4">
                Billing Information
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text"
                  name="firstName"
                  placeholder="Your first name"
                  className="border border-[#f2f2f2] rounded-md p-3 w-full"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Your last name"
                  className="border border-[#f2f2f2] rounded-md p-3 w-full"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  name="company"
                  placeholder="Company name (optional)"
                  className="border border-[#f2f2f2] rounded-md p-3 w-full md:col-span-2"
                  value={formData.company}
                  onChange={handleChange}
                />
                <input
                  type="text"
                  name="address"
                  placeholder="Street Address"
                  className="border border-[#f2f2f2] rounded-md p-3 w-full md:col-span-2"
                  value={formData.address}
                  onChange={handleChange}
                  required
                />
                <select
                  name="country"
                  className="border border-[#f2f2f2] rounded-md p-3 w-full"
                  value={formData.country}
                  onChange={handleChange}
                >
                  <option value="">Select Country</option>
                  <option value="India">India</option>
                  <option value="USA">USA</option>
                </select>
                <select
                  name="state"
                  className="border border-[#f2f2f2] rounded-md p-3 w-full"
                  value={formData.state}
                  onChange={handleChange}
                >
                  <option value="">Select State</option>
                  <option value="TN">Tamil Nadu</option>
                  <option value="KA">Karnataka</option>
                </select>
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  className="border border-[#f2f2f2] rounded-md p-3 w-full"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone number"
                  className="border border-[#f2f2f2] rounded-md p-3 w-full"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            {/* Additional Info */}
            <div>
              <h2 className="text-lg font-semibold mb-4">Additional Info</h2>
              <textarea
                name="notes"
                placeholder="Notes about your order, e.g. special notes for delivery"
                className="border border-[#f2f2f2] rounded-md p-3 w-full h-28"
                value={formData.notes}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Right: Order Summary */}
          <div className="border border-[#f2f2f2] rounded-md p-6 h-fit">
            <h2 className="text-lg font-semibold mb-6">Order Summary</h2>

            <ul className="divide-y">
              {state.items.map((item) => (
                <li key={item.id} className="flex justify-between py-4">
                  <div className="flex items-center space-x-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-12 h-12 object-cover rounded-md"
                    />
                    <span className="text-sm">
                      {item.name} x{item.quantity}
                    </span>
                  </div>
                  <span className="font-medium">
                    ${(item.price * item.quantity).toFixed(2)}
                  </span>
                </li>
              ))}
            </ul>

            <div className="border-t border-[#f2f2f2] mt-4 pt-4 space-y-2 text-sm">
              <div className="flex justify-between">
                <span>Subtotal:</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping:</span>
                <span className="text-secondary">Free</span>
              </div>
              <div className="flex justify-between font-semibold text-base border-t border-[#f2f2f2] pt-2">
                <span>Total:</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>

            {/* Payment */}
            <div className="mt-6">
              <h3 className="font-semibold mb-2">Payment Method</h3>
              <div className="space-y-2">
                {["cod", "upi", "netbanking"].map((method) => (
                  <label
                    key={method}
                    className="flex items-center space-x-2 cursor-pointer"
                  >
                    <input
                      type="radio"
                      name="paymentMethod"
                      value={method}
                      checked={formData.paymentMethod === method}
                      onChange={handleChange}
                      className="accent-secondary"
                    />
                    <span className="capitalize">{method}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Place Order */}
            <button
              type="submit"
              className="mt-6 w-full bg-secondary hover:bg-green-700 text-white py-3 rounded-full cursor-pointer font-semibold"
            >
              Place Order
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
