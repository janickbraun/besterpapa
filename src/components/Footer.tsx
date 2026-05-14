import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full py-8 mt-auto border-t border-accent-blue/10 bg-warm-bg/50">
      <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="font-sans text-sm text-text-main/60">
          Made with ❤️ für den besten Papa
        </p>
        <div className="flex items-center gap-6">
          <Link href="/impressum" className="font-sans text-sm text-text-main/60 hover:text-accent-orange transition-colors">
            Impressum
          </Link>
          <Link href="/datenschutz" className="font-sans text-sm text-text-main/60 hover:text-accent-orange transition-colors">
            Datenschutz
          </Link>
        </div>
      </div>
    </footer>
  );
}
