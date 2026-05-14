"use client";

import AlbumItem from "./AlbumItem";

const memories = [
  {
    title: "Wakeboarding",
    imageUrl: "/wakeboard.jpeg"
  },
  {
    title: "Snowboarden",
    imageUrl: "/snowboard.jpeg"

  },
  {
    title: "Angeln",
    imageUrl: "/angeln.jpeg"
  },
  {
    title: "Roadtrips",
    imageUrl: "/auto.jpeg"
  },
  {
    title: "Feierabend",
    imageUrl: "/bier.jpeg"
  }
];


export default function AlbumSection() {
  return (
    <section className="w-full py-24 px-6 sm:px-8 bg-warm-bg">
      <div className="max-w-7xl mx-auto flex flex-col space-y-32">
        <div className="text-center mb-8">
          <h2 className="font-handwriting text-5xl sm:text-6xl text-accent-blue">
            Danke für alles
          </h2>
        </div>

        {memories.map((memory, idx) => (
          <AlbumItem
            key={idx}
            index={idx}
            title={memory.title}
            imageUrl={memory.imageUrl}
          />

        ))}
      </div>
    </section>
  );
}
