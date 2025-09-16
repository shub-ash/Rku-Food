import Navbar from "@/components/navbar";
import { CartProvider } from "@/context/cartContext";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Rancho } from "next/font/google";

const rancho = Rancho({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-rancho",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <div className={rancho.variable}>
        <CartProvider>
          <Navbar />
          <Component {...pageProps} />
        </CartProvider>
      </div>
    </>
  );
}
