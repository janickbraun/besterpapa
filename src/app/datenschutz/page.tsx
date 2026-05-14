import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function Datenschutz() {
  return (
    <main className="min-h-screen bg-warm-bg text-text-main py-16 px-6">
      <div className="max-w-3xl mx-auto">
        <Link href="/" className="inline-flex items-center gap-2 text-accent-blue hover:text-accent-orange transition-colors mb-12">
          <ArrowLeft size={20} />
          <span className="font-sans font-medium">Zurück zur Startseite</span>
        </Link>
        
        <h1 className="font-handwriting text-5xl text-accent-blue mb-10">Datenschutzerklärung</h1>
        
        <div className="font-sans space-y-8 text-text-main/80 leading-relaxed">
          <p>
            Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Wichtig vorab: Wir erheben nicht aktiv personenbezogene Daten. Es gibt keine Kontaktformulare, Benutzerkonten oder Tracking-Cookies auf dieser Website. Ausführliche Informationen zum Thema Datenschutz entnehmen Sie unserer unten aufgeführten Datenschutzerklärung.
          </p>

          <section>
            <h2 className="text-2xl font-semibold text-text-main mb-4">Hinweis zur verantwortlichen Stelle</h2>
            <p>Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:</p>
            <p className="mt-2">
              Janick Braun<br />
              Ruhe am Bach 5d<br />
              82377 Penzberg, Deutschland<br />
              Telefon: +49 (0) 160 98640952<br />
              E-Mail: janick@secondskate.de
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-text-main mb-4">Wie erfassen wir Ihre Daten?</h2>
            <p>
              Da wir kein Kontaktformular oder ähnliche Tools anbieten, erfassen wir keine von Ihnen übermittelten personenbezogenen Daten. Alle Daten, die beim Besuch der Website erfasst werden, sind ausschließlich technische Standardinformationen, die automatisch von unserem Hosting-Provider (z.B. Webbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs) oder durch Vercel Analytics erfasst werden. Vercel Analytics arbeitet ohne die Speicherung von Cookies und ohne die Erfassung personenbezogener Daten.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-text-main mb-4">Externes Hosting</h2>
            <p>
              Diese Website wird extern von der Vercel Inc. gehostet. Technische Standarddaten (wie IP-Adressen, Seitenaufrufe und Browserdaten) können von den Servern des Hosts verarbeitet werden, um die sichere und zuverlässige Bereitstellung dieser Website zu gewährleisten. Der Einsatz des externen Hostings erfolgt zum Zwecke der Vertragserfüllung gegenüber unseren potenziellen und bestehenden Kunden (Art. 6 Abs. 1 lit. b DSGVO) und im Interesse einer sicheren, schnellen und effizienten Bereitstellung unseres Online-Angebots durch einen professionellen Anbieter (Art. 6 Abs. 1 lit. f DSGVO).
            </p>
            <p className="mt-2">
              Wir nutzen den Dienst &quot;Vercel Analytics&quot; der Vercel Inc., 440 N Barranca Ave #4133 Covina, CA 91723, USA, um die Performance unserer Website zu analysieren und auszuwerten.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-text-main mb-4">Art der Datenverarbeitung und Verzicht auf Cookies</h2>
            <p>
              Vercel Analytics ist datenschutzfreundlich konzipiert und verwendet keine Cookies oder ähnliche Technologien, die Informationen auf Ihrem Endgerät speichern oder auslesen. Wenn Sie unsere Website besuchen, werden lediglich technische Informationen wie Browsertyp, Betriebssystem und besuchte Seiten erfasst, um die Benutzerfreundlichkeit unserer Plattform zu verbessern. Es werden keine personenbezogenen Daten erhoben. Ihre IP-Adresse wird nur kurzzeitig verarbeitet, um einen anonymisierten Hash-Wert zu generieren, der automatisch täglich abläuft. Die IP-Adresse selbst wird nicht gespeichert. Es ist uns nicht möglich, Sie persönlich zu identifizieren oder webseitenübergreifende Tracking-Profile zu erstellen.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-text-main mb-4">Rechtsgrundlage</h2>
            <p>
              Da keine Tracking-Cookies verwendet werden und die Datenverarbeitung stark anonymisiert erfolgt, wird Vercel Analytics ohne Einwilligung auf Grundlage unseres berechtigten Interesses an einer statistischen Auswertung des Nutzerverhaltens zur Optimierung unseres Webauftritts eingesetzt (Art. 6 Abs. 1 lit. f DSGVO).
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-text-main mb-4">Auftragsverarbeitung (AVV) und Datenübermittlung</h2>
            <p>
              Wir haben mit Vercel einen Vertrag zur Auftragsverarbeitung (AVV) gemäß Art. 28 DSGVO geschlossen. Dieser stellt sicher, dass Vercel die Daten streng nach unseren Weisungen und im Einklang mit der DSGVO verarbeitet. Da es sich bei Vercel um ein US-Unternehmen handelt, kann eine Datenverarbeitung in den USA nicht ausgeschlossen werden. Vercel Inc. ist unter dem EU-US Data Privacy Framework (DPF) zertifiziert. Zusätzlich ist die Datenübermittlung durch den Abschluss von Standardvertragsklauseln (SCC) der EU-Kommission abgesichert, um ein angemessenes Datenschutzniveau zu gewährleisten.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-text-main mb-4">Ihre Rechte</h2>
            <p>
              Im Rahmen der geltenden gesetzlichen Bestimmungen haben Sie jederzeit das Recht auf unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck der Datenverarbeitung und ggf. ein Recht auf Berichtigung, Sperrung oder Löschung dieser Daten. Hierzu sowie zu weiteren Fragen zum Thema personenbezogene Daten können Sie sich jederzeit an uns wenden.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
