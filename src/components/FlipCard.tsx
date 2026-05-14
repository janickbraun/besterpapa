"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function FlipCard() {
  const [isFlipped, setIsFlipped] = useState(false);
  const imageUrl = "https://images.unsplash.com/photo-1544928147-79a2dbc1f389?q=80&w=800&auto=format&fit=crop";

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
        <div className="absolute inset-0 [backface-visibility:hidden] bg-warm-white rounded-3xl scrapbook-shadow flex flex-col items-center justify-center p-8 text-center border-[12px] border-warm-white">
          <div className="w-full h-full border-2 border-dashed border-accent-blue/20 rounded-xl flex flex-col items-center justify-center p-6">
            <h2 className="font-handwriting text-5xl sm:text-6xl text-accent-blue leading-tight mb-8">
              Wer ist der<br/>beste<br/>Papa der Welt?
            </h2>
            <div className="mt-auto flex flex-col items-center gap-2">
              <p className="font-sans text-xs text-accent-orange uppercase tracking-[0.2em] font-semibold">
                Tippe hier
              </p>
            </div>
          </div>
        </div>

        {/* Back */}
        <div
          className="absolute inset-0 [backface-visibility:hidden] bg-warm-white rounded-3xl scrapbook-shadow p-3"
          style={{ transform: "rotateY(180deg)" }}
        >
          <div className="relative w-full h-full overflow-hidden rounded-2xl">
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
