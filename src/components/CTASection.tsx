"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

export default function CTASection() {
  return (
    <section className="w-full py-24 px-6 flex flex-col items-center justify-center bg-warm-bg overflow-hidden relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative z-10 flex flex-col items-center text-center max-w-2xl"
      >
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-text-main tracking-tight">
          Vernetze dich mit dem besten Papa
        </h2>
        
        <motion.a
          href="https://www.linkedin.com/in/markus-braun-464b50340/"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex items-center gap-3 px-8 py-4 bg-text-main text-white rounded-full font-bold text-lg transition-all hover:scale-105 active:scale-95 shadow-md"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.98 }}
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="currentColor"
            className="w-6 h-6"
          >
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
          </svg>

          <span>LinkedIn Profil besuchen</span>
        </motion.a>
      </motion.div>
    </section>

  );
}
