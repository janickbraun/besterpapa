import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function Impressum() {
  return (
    <main className="min-h-screen bg-warm-bg text-text-main py-16 px-6">
      <div className="max-w-3xl mx-auto">
        <Link href="/" className="inline-flex items-center gap-2 text-accent-blue hover:text-accent-orange transition-colors mb-12">
          <ArrowLeft size={20} />
          <span className="font-sans font-medium">Zurück zur Startseite</span>
        </Link>
        
        <h1 className="font-handwriting text-5xl text-accent-blue mb-10">Impressum</h1>
        
        <div className="font-sans space-y-8 text-text-main/80 leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-text-main mb-3">Angaben gemäß § 5 TMG</h2>
            <p>
              Janick Braun<br />
              Janick Braun UG (haftungsbeschränkt)<br />
              Ruhe am Bach 5d<br />
              82377 Penzberg, Deutschland
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-text-main mb-3">Kontakt</h2>
            <p>
              Telefon: +49 (0) 160 98640952<br />
              E-Mail: janick@grovider.de
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-text-main mb-3">Vertretung</h2>
            <p>
              Vertreten durch: Janick Braun
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-text-main mb-3">Registereintrag</h2>
            <p>
              Eintragung im Handelsregister.<br />
              Registergericht: Amtsgericht München<br />
              Registernummer: HRB 123456 (Platzhalter)
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-text-main mb-3">Umsatzsteuer-ID</h2>
            <p>
              Umsatzsteuer-Identifikationsnummer gemäß § 27a Umsatzsteuergesetz:<br />
              DE 123456789 (Platzhalter)
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-text-main mb-3">Streitschlichtung</h2>
            <p>
              Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: <a href="https://ec.europa.eu/consumers/odr" className="text-accent-blue hover:underline" target="_blank" rel="noopener noreferrer">https://ec.europa.eu/consumers/odr</a>.<br />
              Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
