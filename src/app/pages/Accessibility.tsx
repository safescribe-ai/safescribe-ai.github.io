import { Link } from 'react-router';
import { useEffect, useState } from 'react';

const logoImage = '/assets/SafeScribe_logo.png';
const assistiveImage = '/assets/SafeScribe_Assistive.png';

export default function Accessibility() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    document.title = 'Accessibility - SafeScribe';
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <header className="border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/">
            <img src={logoImage} alt="SafeScribe" className="h-10 w-auto" />
          </Link>
          <nav className="hidden md:flex gap-6">
            <a href="/#what-it-is" className="text-gray-600 hover:text-gray-900">What it is</a>
            <a href="/#privacy" className="text-gray-600 hover:text-gray-900">Privacy</a>
            <a href="/#no-subscription" className="text-gray-600 hover:text-gray-900">No subscription</a>
            <a href="/#how-it-works" className="text-gray-600 hover:text-gray-900">How it works</a>
            <Link to="/accessibility" className="text-gray-900 font-medium">Accessibility</Link>
            <Link to="/get-started" className="text-gray-600 hover:text-gray-900">Get SafeScribe</Link>
          </nav>
          <button
            type="button"
            className="md:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100"
            onClick={() => setMobileMenuOpen((o) => !o)}
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
            )}
          </button>
        </div>
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 bg-white px-4 py-4">
            <ul className="space-y-1">
              <li><a href="/#how-it-works" className="block py-3 text-gray-600 hover:text-gray-900" onClick={() => setMobileMenuOpen(false)}>How It Works</a></li>
              <li><Link to="/accessibility" className="block py-3 text-gray-900 font-medium" onClick={() => setMobileMenuOpen(false)}>Accessibility</Link></li>
              <li><Link to="/get-started" className="block py-3 text-gray-600 hover:text-gray-900" onClick={() => setMobileMenuOpen(false)}>Get SafeScribe</Link></li>
            </ul>
          </div>
        )}
      </header>

      {/* Page header */}
      <section className="max-w-4xl mx-auto px-4 pt-16 pb-8">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12">
          Meeting Equity for Every Mind
        </h1>

        <div className="prose prose-lg text-gray-600 space-y-6 mb-12">
          <p>
            Not everyone experiences a meeting the same way. For millions of people living with cognitive, auditory, or neurological differences, a standard meeting isn't just tiring — it's a barrier. Details are lost, action items are missed, and the effort of keeping up can overshadow the ability to contribute.
          </p>
          <p>
            <strong className="text-gray-900">SafeScribe was built to change that.</strong>
          </p>
          <p>
            By automatically capturing and structuring everything that happens in a meeting — decisions made, topics covered, actions assigned — SafeScribe gives people an equal shot at staying informed, accountable, and confident at work. No extra effort. One button.
          </p>
        </div>

        <div className="rounded-lg overflow-hidden shadow-lg mb-16">
          <img
            src={assistiveImage}
            alt="SafeScribe supporting meeting accessibility"
            className="w-full h-auto"
          />
        </div>

        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
          Who SafeScribe helps
        </h2>

        <ul className="space-y-8 mb-16">
          <li>
            <h3 className="text-lg font-bold text-gray-900 mb-2">ADHD</h3>
            <p className="text-gray-600">
              Removes the impossible split between listening and note-taking, so users can be fully present.
            </p>
          </li>
          <li>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Auditory Processing Disorder</h3>
            <p className="text-gray-600">
              Fills in what the brain struggled to interpret in the moment with a complete written record.
            </p>
          </li>
          <li>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Mild-to-Moderate Hearing Loss</h3>
            <p className="text-gray-600">
              Supplements partial hearing with everything that was said, structured and delivered automatically.
            </p>
          </li>
          <li>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Dyslexia</h3>
            <p className="text-gray-600">
              Eliminates the pressure of real-time note-taking, one of the most common workplace pain points for dyslexic professionals.
            </p>
          </li>
          <li>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Traumatic Brain Injury (TBI)</h3>
            <p className="text-gray-600">
              Supports impaired memory and concentration with a reliable, structured recap after every meeting.
            </p>
          </li>
          <li>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Autism Spectrum Disorder</h3>
            <p className="text-gray-600">
              Reduces cognitive overload by removing the need to simultaneously engage, listen, and retain.
            </p>
          </li>
          <li>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Anxiety Disorders</h3>
            <p className="text-gray-600">
              Acts as a safety net, easing the fear of missing something important so users can focus on participating.
            </p>
          </li>
          <li>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Age-Related Cognitive Decline / MCI</h3>
            <p className="text-gray-600">
              Delivers clear, organized summaries that help users stay on top of responsibilities without relying on recall.
            </p>
          </li>
        </ul>

        <div className="bg-gray-50 rounded-lg p-8 md:p-10 mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            Private by design. Accessible by default.
          </h2>
          <p className="text-gray-600 text-lg mb-4">
            For people with disabilities, trust matters. Many assistive tools require cloud accounts, recurring fees, or technical setup that creates its own barriers. SafeScribe processes everything locally — nothing leaves the device until your summary lands in your inbox. No subscription. No data stored. No third party ever hears your meeting.
          </p>
          <p className="text-gray-900 font-semibold text-lg">
            Accessibility shouldn't come with an asterisk.
          </p>
        </div>

        <p className="text-xl font-semibold text-gray-900">
          SafeScribe is free and open source, always.
        </p>

        <div className="pt-12">
          <Link
            to="/get-started"
            className="inline-flex items-center px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
          >
            Join the waitlist
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 mt-16 py-12">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <Link to="/" className="text-gray-600 hover:text-gray-900">
            ← Back to home
          </Link>
        </div>
      </footer>
    </div>
  );
}
