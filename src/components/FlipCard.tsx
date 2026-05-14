"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function FlipCard() {
  const [isFlipped, setIsFlipped] = useState(false);
  const imageUrl = "/hero.jpeg";


  return (
    <div className="relative w-full max-w-[320px] aspect-[4/5] sm:max-w-[400px] [perspective:1000px]">
      <motion.div
        className="w-full h-full relative [transform-style:preserve-3d] cursor-pointer"
        onClick={() => setIsFlipped(!isFlipped)}
        initial={false}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.8, type: "spring", stiffness: 60, damping: 15 }}
      >
        {/* Front */}
        <div className="absolute inset-0 [backface-visibility:hidden] bg-warm-white rounded-3xl scrapbook-shadow border-[12px] border-warm-white p-4">
          <div className="w-full h-full border-2 border-dashed border-accent-blue/20 rounded-xl flex flex-col items-center justify-center p-4 relative overflow-hidden">
            <h1 className="font-handwriting text-4xl sm:text-6xl text-accent-blue leading-tight text-center">
              Wer ist der<br/>beste<br/>Papa der Welt?
            </h1>
            <div className="absolute bottom-4 left-0 right-0 flex flex-col items-center">
              <p className="font-sans text-[10px] text-accent-orange uppercase tracking-[0.2em] font-semibold">
                Tippe hier
              </p>
            </div>
          </div>
        </div>

        {/* Back */}
        <div
          className="absolute inset-0 [backface-visibility:hidden] bg-warm-white rounded-3xl scrapbook-shadow border-[12px] border-warm-white p-4"
          style={{ transform: "rotateY(180deg)" }}
        >
          <div className="relative w-full h-full overflow-hidden rounded-xl">
            <img
              src={imageUrl}
              alt="Bester Papa"
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
}
