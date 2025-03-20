"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react"; // Detta fungerar nu

export default function Home() {
  const [outfits, setOutfits] = useState([
    {
      id: 1,
      name: "Casual Outfit",
      image: "/path-to-image.jpg",
      likes: 10,
    },
    {
      id: 2,
      name: "Sporty Look",
      image: "/path-to-image2.jpg",
      likes: 15,
    },
  ]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto"
    >
      <h2 className="text-2xl font-bold mb-6">Outfits</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {outfits.map((outfit) => (
          <motion.div
            key={outfit.id}
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3 }}
            className="bg-white p-4 rounded-xl shadow-lg"
          >
            <Image
              src={outfit.image}
              alt={outfit.name}
              width={500}
              height={500}
              className="rounded-lg object-cover"
            />
            <h3 className="text-lg font-semibold mt-2">{outfit.name}</h3>
            <p className="text-gray-500">{outfit.likes} Likes</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
