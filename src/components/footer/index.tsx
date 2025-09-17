import Link from "next/link";
import React from "react";
import Image from "next/image";
import { Facebook, Twitter, Instagram } from "lucide-react";
import logo from "../../../public/images/logo.png";

const Footer = () => {
  return (
    <>
      <footer className="w-full">
        {/* Newsletter */}
        <section className="bg-[#f9f9f9] py-10 px-4">
          <div className="w-full lg:w-10/12 mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Left Content */}
            <div className="w-full md:w-auto text-center md:text-left">
              <h3 className="text-lg md:text-xl font-semibold text-gray-900">
                Subscribe our Newsletter
              </h3>
              <p className="mt-1 text-sm text-gray-500">
                Get the taste of tradition in your inbox — Sign up now!
              </p>
            </div>

            {/* Right Content: Input + Button + Social */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                // handle submit
              }}
              className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto"
            >
              {/* Input + Button */}
              <div className="flex w-full sm:w-80">
                <input
                  type="email"
                  aria-label="Your email address"
                  placeholder="Your email address"
                  className="flex-1 border border-gray-300 px-4 py-3 text-sm rounded-l-md focus:outline-none"
                />
                <button
                  type="submit"
                  className="bg-primary hover:bg-red-700 text-white px-6 py-3 text-sm font-semibold rounded-r-[6px]"
                >
                  Subscribe
                </button>
              </div>

              {/* Social Icons */}
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  aria-label="Follow on Facebook"
                  className="w-9 h-9 rounded-full bg-primary text-white flex items-center justify-center hover:opacity-90"
                >
                  f
                </button>
                <button
                  type="button"
                  aria-label="Follow on Twitter"
                  className="w-9 h-9 rounded-full bg-primary text-white flex items-center justify-center hover:opacity-90"
                >
                  t
                </button>
                <button
                  type="button"
                  aria-label="Follow on Instagram"
                  className="w-9 h-9 rounded-full bg-primary text-white flex items-center justify-center hover:opacity-90"
                >
                  ig
                </button>
              </div>
            </form>
          </div>
        </section>
      </footer>
      <footer className="w-full bg-[#1a1a1a]">
        <div className="w-10/12 mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8">
          {/* Logo / About */}
          <div className="md:col-span-1">
            <div className="mb-4">
              <Image src={logo} alt="RKU Foods" width={120} height={40} />
            </div>
            <p className="text-sm text-[#808080]">
              A brand you trust, delivering purity, authenticity, and homemade
              taste in every pack.
            </p>
            <div className="mt-4 text-sm text-[#808080] space-y-1">
              <div>📞 9294-1792-91</div>
              <div>✉️ Rku@gmail.com</div>
            </div>

            {/* Social icons */}
            <div className="flex items-center gap-3 mt-4">
              <a
                href="#"
                aria-label="Facebook"
                className="w-9 h-9 rounded-full bg-primary text-white flex items-center justify-center hover:opacity-90"
              >
                <Facebook size={16} />
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="w-9 h-9 rounded-full bg-primary text-white flex items-center justify-center hover:opacity-90"
              >
                <Twitter size={16} />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full bg-primary text-white flex items-center justify-center hover:opacity-90"
              >
                <Instagram size={16} />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className=" text-sm font-semibold mb-3 text-white">Home</h4>
            <ul className="space-y-2 text-sm text-[#808080]">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/order-history">Order History</Link>
              </li>
              <li>
                <Link href="/cart">Shopping Cart</Link>
              </li>
              <li>
                <Link href="/wishlist">Wishlist</Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className=" text-sm font-semibold mb-3 text-white">Helps</h4>
            <ul className="space-y-2 text-sm text-[#808080]">
              <li>
                <Link href="/contact">Contact</Link>
              </li>
              <li>
                <Link href="/faqs">FAQs</Link>
              </li>
              <li>
                <Link href="/terms">Terms & Condition</Link>
              </li>
              <li>
                <Link href="/privacy">Privacy Policy</Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className=" text-sm font-semibold mb-3 text-white">Proxy</h4>
            <ul className="space-y-2 text-sm text-[#808080]">
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/shop">Shop</Link>
              </li>
              <li>
                <Link href="/products">Product</Link>
              </li>
              <li>
                <Link href="/track-order">Track Order</Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className=" text-sm font-normal mb-3 text-white">Categories</h4>
            <ul className="space-y-2 text-sm text-[#808080]">
              <li>
                <Link href="/category/curry-masala">Curry Masala</Link>
              </li>
              <li>
                <Link href="/category/fry">Fry</Link>
              </li>
              <li>
                <Link href="/category/pickles">Pickles</Link>
              </li>
              <li>
                <Link href="/category/food">Food</Link>
              </li>
              <li>
                <Link href="/category/health-nutrition">
                  Health & Nutrition
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#808080] w-10/12 mx-auto">
          <div className="w-10/12 mx-auto px-6 py-6 text-center text-xs text-gray-500">
            © 2023 RKU. All Rights Reserved.
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
