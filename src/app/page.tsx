import FlipCard from "@/components/FlipCard";
import AlbumSection from "@/components/AlbumSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-screen min-h-[600px] flex items-center justify-center bg-warm-bg px-4 overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute top-1/4 left-10 w-32 h-32 bg-accent-orange/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-10 w-48 h-48 bg-accent-blue/5 rounded-full blur-3xl" />
        
        <FlipCard />
      </section>

      {/* Content Section */}
      <AlbumSection />

      <Footer />
    </main>
  );
}
