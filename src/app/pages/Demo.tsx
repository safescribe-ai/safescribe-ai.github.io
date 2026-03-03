import { Link } from 'react-router';
import { useEffect, useState } from 'react';

const logoImage = '/assets/SafeScribe_logo.png';
const demoNotesPdf = '/assets/summary_addressing_student_absenteeism_strategies_for_well_20260301_201227.pdf';
const youtubeEmbedUrl = 'https://www.youtube.com/embed/rZpGmekDemI';

export default function Demo() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    document.title = 'Watch Demo - SafeScribe';
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <header className="border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/"><img src={logoImage} alt="SafeScribe" className="h-10 w-auto" /></Link>
          <nav className="hidden md:flex gap-6">
            <a href="/#how-it-works" className="text-gray-600 hover:text-gray-900">How it works</a>
            <Link to="/accessibility" className="text-gray-600 hover:text-gray-900">Accessibility</Link>
            <Link to="/get-started" className="text-gray-600 hover:text-gray-900">Get SafeScribe</Link>
          </nav>
          <button type="button" className="md:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100" onClick={() => setMobileMenuOpen((o) => !o)} aria-label="Toggle menu">
            {mobileMenuOpen ? <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg> : <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>}
          </button>
        </div>
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 bg-white px-4 py-4">
            <ul className="space-y-1">
              <li><a href="/#how-it-works" className="block py-3 text-gray-600 hover:text-gray-900" onClick={() => setMobileMenuOpen(false)}>How It Works</a></li>
              <li><Link to="/accessibility" className="block py-3 text-gray-600 hover:text-gray-900" onClick={() => setMobileMenuOpen(false)}>Accessibility</Link></li>
              <li><Link to="/get-started" className="block py-3 text-gray-600 hover:text-gray-900" onClick={() => setMobileMenuOpen(false)}>Get SafeScribe</Link></li>
            </ul>
          </div>
        )}
      </header>

      <main className="max-w-4xl mx-auto px-4 py-12 md:py-16">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          SafeScribe demo
        </h1>

        <div className="prose prose-lg text-gray-600 mb-10">
          <p>
            See how SafeScribe works in a real meeting: tap to record, then get a structured summary and action items — all processed on the device. The video below shows the device in use during an example meeting. Underneath, you can read the kind of notes SafeScribe generates, without downloading anything.
          </p>
        </div>

        <section className="mb-12">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Video: SafeScribe in a meeting</h2>
          <div className="aspect-video w-full rounded-lg overflow-hidden shadow-lg bg-black">
            <iframe
              src={youtubeEmbedUrl}
              title="SafeScribe device demo - example meeting"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="w-full h-full"
            />
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-4">Generated notes (example)</h2>
          <p className="text-gray-600 mb-4 text-sm">
            This is the type of summary SafeScribe produces and emails to you. View it below — no download required.
          </p>
          <div className="rounded-lg border border-gray-200 overflow-hidden shadow-inner bg-gray-50">
            <iframe
              src={`${demoNotesPdf}#view=FitH`}
              title="SafeScribe sample meeting notes (PDF)"
              className="w-full h-[min(80vh,720px)]"
            />
          </div>
        </section>

        <div className="mt-12 flex flex-wrap gap-4">
          <Link
            to="/get-started"
            className="inline-flex items-center px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
          >
            Join the waitlist
          </Link>
          <Link
            to="/#how-it-works"
            className="inline-flex items-center px-6 py-3 border-2 border-gray-900 text-gray-900 rounded-lg hover:bg-gray-50 transition-colors"
          >
            How it works
          </Link>
        </div>
      </main>

      <footer className="border-t border-gray-200 mt-16 py-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <Link to="/" className="text-gray-600 hover:text-gray-900">← Back to home</Link>
        </div>
      </footer>
    </div>
  );
}
