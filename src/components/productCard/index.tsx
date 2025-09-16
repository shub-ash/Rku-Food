// "use client";
// import React from "react";
// import { Plus } from "lucide-react";
// import { motion } from "framer-motion";
// import Image from "next/image";

// interface ProductCardProps {
//   id: string;
//   name: string;
//   description: string;
//   price: number;
//   image: string;
//   rating?: number;
//   onClick: () => void;
// }

// export default function ProductCard({
//   id,
//   name,
//   description,
//   price,
//   image,
//   rating = 4.5,
//   onClick,
// }: ProductCardProps) {
//   return (
//     <motion.div
//       whileHover={{ y: -5 }}
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.3 }}
//       className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer"
//       onClick={onClick}
//     >
//       <div className="relative h-48 overflow-hidden">
//         <Image
//           src={image}
//           alt={name}
//           className="w-full h-full object-cover hover:scale-105 transition-transform duration-300 !rounded-3xl "
//         />
//         <div className="absolute top-3 left-3 bg-primary text-white px-2 py-1 rounded-full text-xs font-semibold">
//           ⭐ {rating}
//         </div>
//       </div>

//       <div className="p-4">
//         <h3 className="text-lg font-semibold text-gray-900 mb-2">{name}</h3>
//         <p className="text-gray-600 text-sm mb-3 line-clamp-2">{description}</p>

//         <div className="flex items-center justify-between">
//           <span className="text-2xl font-bold text-red-600">
//             ${price.toFixed(2)}
//           </span>
//           <motion.button
//             whileTap={{ scale: 0.95 }}
//             onClick={(e) => {
//               e.stopPropagation();
//               onClick();
//             }}
//             className="bg-red-600 hover:bg-red-700 text-white p-2 rounded-full transition-colors duration-200"
//           >
//             <Plus className="h-5 w-5" />
//           </motion.button>
//         </div>
//       </div>
//     </motion.div>
//   );
// }
