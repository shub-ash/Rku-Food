import Image from "next/image";
import React from "react";
import bannerIamge from "../../public/images/aboutUsbanner.png";
import homemade from "../../public/icons/Group.svg";
import pure from "../../public/icons/pure.svg";
import authentic from "../../public/icons/authentic.svg";

const whyUs = [
  {
    icon: homemade,
    title: "Home Made",
    desc: "Handcrafted at home with love and tradition",
  },
  {
    icon: pure,
    title: "Pure & Preservative-Free",
    desc: "No added chemicals or shortcuts",
  },
  {
    icon: authentic,
    title: "Authentic Indian Flavours",
    desc: "Taste the richness of age-old Indian recipes in every pinch",
  },
];

const AboutUs = () => {
  return (
    <div className="md:w-10/12  mx-auto my-10 md:my-20 md:mt-40 flex flex-col md:flex-row gap-10 md:gap-20">
      <div className="w-full md:w-1/2 flex-shrink-0">
        <Image
          src={bannerIamge}
          alt="About Us Banner"
          className="w-full h-auto"
        />
      </div>

      <div className="w-full md:w-3/5">
        <h2 className="text-3xl md:text-4xl font-medium">
          About RKU Home Food
        </h2>
        <p className="text-lg md:text-xl mt-4 text-[#808080] font-normal">
          Bringing Home the Taste You Trust
        </p>

        <p className="text-base md:text-lg mt-6 text-[#002603] font-normal lg:w-full">
          At RKU Home Food, we believe great food begins with great ingredients
          and nothing beats the taste of homemade. Born from a passion for
          traditional Indian cooking, RKU brings you a range of authentic
          masalas and spice blends made with care, just like they’re prepared in
          every Indian home.
        </p>
        <p className="text-base md:text-lg mt-6 text-[#002603] font-normal lg:w-full">
          Our recipes are rooted in age-old methods, using handpicked
          ingredients, no added preservatives, and zero shortcuts. Whether
          you’re cooking a comforting dal, a rich curry, or a festive family
          meal, RKU adds the depth, aroma & flavor that transforms everyday
          cooking into a joyful experience.
        </p>
        <p className="text-base md:text-lg mt-6 text-[#002603] font-normal lg:w-full">
          We are more than a masala brand, we’re your kitchen companion, your
          shortcut to grandma’s cooking & your trusted source for clean, honest
          flavors.
        </p>

        <h2 className="text-3xl md:text-4xl font-medium my-8 md:my-12">
          Why Us?
        </h2>

        <div className="flex flex-col gap-6">
          {whyUs.map((item, idx) => (
            <div className="flex gap-4 items-center" key={idx}>
              <Image
                src={item.icon}
                alt={item.title}
                className="w-10 h-10 md:w-12 md:h-12"
              />
              <div>
                <p className="font-bold text-base md:text-lg">{item.title}</p>
                <p className="text-sm md:text-base">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
