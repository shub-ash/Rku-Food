import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { CartProvider } from "@/context/cartContext";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400"], // <-- should be an array of strings
  variable: "--font-poppins",
  display: "swap",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <div className={poppins.variable}>
        <CartProvider>
          <Navbar />
          <Component {...pageProps} />
          <Footer />
        </CartProvider>
      </div>
    </>
  );
}
