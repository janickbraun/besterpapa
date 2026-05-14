"use client";

import { motion } from "framer-motion";

interface AlbumItemProps {
  title: string;
  description: string;
  imageUrl: string;
  index: number;
}

export default function AlbumItem({ title, description, imageUrl, index }: AlbumItemProps) {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8 md:gap-16 w-full max-w-5xl mx-auto`}
    >
      {/* Image Container */}
      <div className="w-full md:w-1/2 flex justify-center">
        <motion.div 
          whileHover={{ scale: 1.02, rotate: isEven ? 1 : -1 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="relative bg-warm-white p-4 rounded-xl scrapbook-shadow w-full max-w-[400px] aspect-square"
        >
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover rounded-lg"
          />
          {/* Tape effect */}
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-24 h-8 bg-white/40 backdrop-blur-sm shadow-sm rotate-2" />
        </motion.div>
      </div>

      {/* Text Container */}
      <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left space-y-4">
        <h3 className="font-handwriting text-4xl sm:text-5xl text-accent-blue">
          {title}
        </h3>
        <p className="font-sans text-lg text-text-main/80 leading-relaxed max-w-md">
          {description}
        </p>
      </div>
    </motion.div>
  );
}
