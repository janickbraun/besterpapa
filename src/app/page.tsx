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
        
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce flex flex-col items-center gap-2 opacity-60">
          <span className="text-xs uppercase tracking-widest text-accent-blue font-semibold">Scroll</span>
          <div className="w-6 h-10 border-2 border-accent-blue/30 rounded-full flex justify-center p-1">
            <div className="w-1.5 h-3 bg-accent-orange rounded-full animate-pulse" />
          </div>
        </div>
      </section>

      {/* Content Section */}
      <AlbumSection />

      <Footer />
    </main>
  );
}
