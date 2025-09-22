import Image from "next/image";
import Link from "next/link";
import bannerIamge from "../../public/images/bannerImage.png";
import Products from "@/components/products";
import FeaturedProducts from "@/components/featuredProducts";
import food1 from "../../public/images/insta1.png";
import food2 from "../../public/images/insta2.png";
import food3 from "../../public/images/insta3.png";
import shipping from "../../public/icons/shipping.svg";
import payment from "../../public/icons/payment.svg";
import call from "../../public/icons/call.svg";

export default function Home() {
  const trustPoints = [
    {
      icon: shipping,
      title: "Free Shipping PAN India",
      desc: "Free shipping on prepaid order",
    },
    {
      icon: payment,
      title: "100% Secure Payment",
      desc: "We ensure secure payment",
    },
    {
      icon: call,
      title: "24/7 Customer Support",
      desc: "We have 24/7 dedicated support",
    },
  ];

  const images = [food1, food2, food3, food1, food2, food1];

  return (
    <section className="relative w-full bg-white">
      <div className="relative h-[700px] w-full">
        <Image
          src={bannerIamge}
          alt="RKU Masala Banner"
          layout="fill"
          objectFit="cover"
          priority
        />
        <div className="absolute inset-0 bg-transparent bg-opacity-30 flex items-center w-10/12 mx-auto">
          <div className=" text-white px-6 lg:w-1/3">
            <h1 className="text-4xl md:text-xl font-bold mb-4 text-secondary">
              Welcome to RKU Masala
            </h1>
            <p className="text-lg md:text-5xl mb-6 italic">
              Bringing Tradition to Your Kitchen
            </p>
            <Link href="/shop">
              <button className="hover:bg-[#30ad1f] cursor-pointer bg-[#f2f2f2]  text-black hover:text-white font-semibold px-6 py-2 rounded-3xl shadow">
                Shop Now
              </button>
            </Link>
          </div>
        </div>
      </div>

      <Products />
      <FeaturedProducts />

      <section className="bg-gray-100 py-8 px-4 ">
        <h2 className="text-4xl font-semibold text-center"></h2>

        <h2 className="text-4xl font-semibold text-center mb-6">
          Pay with <span className="text-primary"> Confidence,</span> Receive
          with <span className="text-primary">Trust</span>
        </h2>
        <div className="grid lg:grid-cols-3 gap-16  w-10/12 mx-auto text-center">
          {trustPoints.map((point, idx) => (
            <div
              key={idx}
              className="bg-white px-16 py-8 rounded-xl mt-7  shadow"
            >
              <Image src={point.icon} alt={point.title} className="mx-auto " />
              <h3 className="font-semibold text-lg mt-4">{point.title}</h3>
              <p className="text-lg text-gray-600 mt-1">{point.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-4 py-10 bg-white md:w-10/12 w-full mx-auto">
        <h2 className="text-4xl font-semibold text-center mb-6">
          Follow us on <span className="text-primary">Instagram</span>
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 w-full gap-4 mt-10">
          {images.map((src, idx) => (
            <div key={idx} className="relative h-32 w-full">
              <Image
                src={src}
                alt={`Instagram ${idx + 1}`}
                layout="fill"
                objectFit="cover"
                className="rounded"
              />
            </div>
          ))}
        </div>
      </section>
    </section>
  );
}
