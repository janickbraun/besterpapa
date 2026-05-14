import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-warm-bg px-6 text-center">
      {/* Texture is already handled by RootLayout's noise-overlay */}
      
      <div className="relative z-10 space-y-12">
        <div className="space-y-2">
          <h1 className="font-handwriting text-[120px] leading-none text-accent-blue/20 select-none">
            404
          </h1>
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-text-main tracking-tight">
              Seite nicht gefunden
            </h2>
            <p className="text-text-main/60 max-w-md mx-auto text-lg">
              Vielleicht hast du dich verlaufen? Hier geht es zurück zum besten Papa der Welt.
            </p>
          </div>
        </div>
        
        <div className="pt-4">
          <Link 
            href="/"
            className="inline-block px-10 py-4 bg-text-main text-white rounded-full font-bold text-lg transition-all hover:scale-105 active:scale-95 shadow-lg scrapbook-shadow"
          >
            Zur Startseite
          </Link>
        </div>
      </div>
      
      {/* Decorative background elements consistent with hero section */}
      <div className="absolute top-1/4 left-10 w-32 h-32 bg-accent-orange/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-10 w-48 h-48 bg-accent-blue/5 rounded-full blur-3xl" />
    </main>
  );
}
