import { useCart } from "@/context/cartContext";
import Link from "next/link";
import { ShoppingCart } from "lucide-react";
import { motion } from "framer-motion";

export default function Navbar() {
  const { state } = useCart();
  return (
    <>
      <header className="bg-white  shadow-sm px-4 py-3 fixed top-0 w-full z-50">
        <div className="flex items-center justify-center gap-20 w-full">
          <div className="flex items-center justify-end w-full">
            <input
              type="text"
              placeholder="Search products..."
              className="border px-2 py-1 rounded text-sm lg:w-1/5 w-full"
            />
            <button className="bg-primary text-white px-3 py-1 rounded text-sm">
              Search
            </button>
          </div>

          <div className="flex items-center space-x-4 text-sm text-gray-700 ml-4 w-1/3">
            <Link
              href="/cart"
              className="relative p-2 text-gray-700 hover:text-red-600 transition-colors"
            >
              <ShoppingCart className="h-6 w-6" />
              {state.items.length > 0 && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute -top-2 -right-2 bg-primary text-white text-xs rounded-full h-5 w-5 flex items-center justify-center"
                >
                  {state.items.reduce((sum, item) => sum + item.quantity, 0)}
                </motion.span>
              )}
            </Link>
            <span className="cursor-pointer">🔐 Login</span>
          </div>
        </div>
      </header>

      <nav className="hover:!text-secondary text-[#808080] font-medium bg-[#F2F2F2] px-4 py-2  w-full  fixed top-14 w- z-50">
        <div className="flex gap-10 justify-end w-9/12 mx-auto ">
          <Link href="/" className="hover:text-[#30AD1F]">
            Home
          </Link>
          <Link href="/" className="hover:text-[#30AD1F]">
            Shop
          </Link>
          <Link href="/" className="hover:text-[#30AD1F]">
            About Us
          </Link>
          <Link href="/" className="hover:text-[#30AD1F]">
            Contact Us
          </Link>
        </div>
      </nav>
    </>
  );
}
