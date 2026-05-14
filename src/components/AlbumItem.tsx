"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import Portal from "./Portal";

interface AlbumItemProps {
  title: string;
  description: string;
  imageUrl: string;
  index: number;
}

export default function AlbumItem({ title, description, imageUrl, index }: AlbumItemProps) {
  const [isOpen, setIsOpen] = useState(false);
  const isEven = index % 2 === 0;

  return (
    <>
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
            className="relative bg-warm-white p-4 rounded-xl scrapbook-shadow w-full max-w-[400px] aspect-square cursor-zoom-in"
            onClick={() => setIsOpen(true)}
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

      {/* Lightbox Modal with Portal */}
      <Portal>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[9999] flex items-center justify-center p-4 md:p-12 bg-black/90 backdrop-blur-sm cursor-zoom-out"
              onClick={() => setIsOpen(false)}
            >
              <motion.button
                className="absolute top-6 right-6 text-white p-2 hover:bg-white/10 rounded-full transition-colors z-[10000]"
                onClick={(e) => {
                  e.stopPropagation();
                  setIsOpen(false);
                }}
              >
                <X size={32} />
              </motion.button>
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                className="relative"
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={imageUrl}
                  alt={title}
                  className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </Portal>
    </>
  );
}
