"use client";

import AlbumItem from "./AlbumItem";

const memories = [
  {
    title: "Wakeboarding Sessions",
    description: "Starker Support auf dem Wasser. Danke fürs Antreiben, auch wenn ich mal wieder reingefallen bin.",
    imageUrl: "https://images.unsplash.com/photo-1555516943-4d7a8929e71e?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Gemeinsam im Schnee",
    description: "Echtes Boarder-Feeling. Beste Zeit im Jahr, wenn wir zusammen die Pisten unsicher machen.",
    imageUrl: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Ruhe am Wasser",
    description: "Fokus, Auszeit, gute Gespräche. Die stillen Momente beim Angeln sind einfach unschlagbar.",
    imageUrl: "https://images.unsplash.com/photo-1544607755-c54d353b3b27?q=80&w=800&auto=format&fit=crop"
  }
];

export default function AlbumSection() {
  return (
    <section className="w-full py-24 px-6 sm:px-8 bg-warm-bg">
      <div className="max-w-7xl mx-auto flex flex-col space-y-32">
        <div className="text-center mb-8">
          <h2 className="font-handwriting text-5xl sm:text-6xl text-accent-blue">
            Starke Momente.
          </h2>
          <p className="mt-4 font-sans text-lg text-text-main/70">
            Einfach danke für alles.
          </p>
        </div>

        {memories.map((memory, idx) => (
          <AlbumItem
            key={idx}
            index={idx}
            title={memory.title}
            description={memory.description}
            imageUrl={memory.imageUrl}
          />
        ))}
      </div>
    </section>
  );
}
