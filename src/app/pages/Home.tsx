import { Shield, DollarSign, Mail, Github } from 'lucide-react';
import { Link } from 'react-router';
import { useEffect, useState } from 'react';

const logoImage = '/assets/SafeScribe_logo.png';
const heroImage = '/assets/SafeScribe_Home.png';
const subscriptionImage = '/assets/SafeScribe_No_Subscription.png';
const productVideo = '/assets/SafeScribe-Product-Video.mp4';

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    document.title = 'SafeScribe - Private Meeting Notes Without Subscriptions';
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link to="/">
              <img src={logoImage} alt="SafeScribe" className="h-10 w-auto" />
            </Link>
          </div>
          <nav className="hidden md:flex gap-6">
            <a href="#what-it-is" className="text-gray-600 hover:text-gray-900">What it is</a>
            <a href="#privacy" className="text-gray-600 hover:text-gray-900">Privacy</a>
            <a href="#no-subscription" className="text-gray-600 hover:text-gray-900">No subscription</a>
            <a href="#how-it-works" className="text-gray-600 hover:text-gray-900">How it works</a>
            <Link to="/accessibility" className="text-gray-600 hover:text-gray-900">Accessibility</Link>
            <Link to="/get-started" className="text-gray-600 hover:text-gray-900">Get SafeScribe</Link>
          </nav>
          {/* Mobile menu button */}
          <button
            type="button"
            className="md:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100 hover:text-gray-900"
            onClick={() => setMobileMenuOpen((o) => !o)}
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
        {/* Mobile menu panel */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 bg-white px-4 py-4">
            <ul className="space-y-1">
              <li>
                <a href="#how-it-works" className="block py-3 text-gray-600 hover:text-gray-900" onClick={() => setMobileMenuOpen(false)}>
                  How It Works
                </a>
              </li>
              <li>
                <Link to="/accessibility" className="block py-3 text-gray-600 hover:text-gray-900" onClick={() => setMobileMenuOpen(false)}>
                  Accessibility
                </Link>
              </li>
              <li>
                <Link to="/get-started" className="block py-3 text-gray-600 hover:text-gray-900 font-medium" onClick={() => setMobileMenuOpen(false)}>
                  Get SafeScribe
                </Link>
              </li>
            </ul>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-4 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Meeting notes from your desk. Privacy First. Subscription Free.
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              A compact desk device that captures meetings and delivers clear, organized notes to your inbox.
            </p>
            <p className="text-xl text-gray-600 mb-8">
              All processing happens locally on the device — your data never leaves your control, and no models are trained on it. Your information is never sold or shared. You own the device, and everything within.
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href="#how-it-works" 
                className="inline-flex items-center px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
              >
                How it works
              </a>
              <Link 
                to="/get-started" 
                className="inline-flex items-center px-6 py-3 border-2 border-gray-900 text-gray-900 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Get SafeScribe
              </Link>
            </div>
          </div>
          <div className="relative">
            <img 
              src={heroImage}
              alt="Device on desk"
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* What it is Section */}
      <section id="what-it-is" className="bg-gray-50 py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            What is SafeScribe?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-gray-900 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">A dedicated desk device</h3>
              <p className="text-gray-600">
                SafeScribe is a physical touchscreen device designed for one purpose: capturing meeting notes. Not an app, not software — dedicated hardware you control.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-gray-900 rounded-lg flex items-center justify-center mb-4">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Record, summarize, deliver</h3>
              <p className="text-gray-600">
                Tap to start recording. SafeScribe processes everything locally, creates summaries and action items, then emails them to you as a PDF.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-gray-900 rounded-lg flex items-center justify-center mb-4">
                <DollarSign className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Complete local processing</h3>
              <p className="text-gray-600">
                All transcription and summarization happens on your device. No cloud processing, no subscriptions, no ongoing fees.
              </p>
            </div>
          </div>
          <div className="max-w-3xl mx-auto mt-12 rounded-xl overflow-hidden shadow-lg">
            <video
              src={productVideo}
              autoPlay
              loop
              muted
              playsInline
              className="w-full"
              aria-label="SafeScribe product video – meeting ends, user presses button"
            />
          </div>
        </div>
      </section>

      {/* Built for Teams Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
            Built for teams that care about privacy
          </h2>
          <div className="text-lg text-gray-600 space-y-4">
            <p>
              Whether you're in government, healthcare, legal, or any organization that's AI cautious, locked down for privacy or compliance, or simply prefers that sensitive discussions never leave the room, SafeScribe fits.
            </p>
            <p>
              It runs entirely on the device, so you get useful meeting notes without sending audio or transcripts to third‑party AI.
            </p>
            <p>
              No lengthy vendor approvals, no software installations, no new cloud accounts. Just a desk device that respects how your team already works.
            </p>
          </div>
        </div>
      </section>

      {/* Privacy First Section */}
      <section id="privacy" className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <img 
                src="https://images.unsplash.com/photo-1728631191055-aa24c9eff7f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b3Jrc3BhY2UlMjBtZWV0aW5nfGVufDF8fHx8MTc3MTkwMzg3Mnww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Private meeting"
                className="rounded-lg shadow-xl"
              />
            </div>
            <div className="order-1 md:order-2">
              <div className="flex items-center gap-3 mb-6">
                <Shield className="w-10 h-10 text-gray-900" />
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Privacy first</h2>
              </div>
              <div className="space-y-4 text-lg text-gray-600">
                <p>
                  Your meetings stay on the device. All recording, transcription, and summarization happen locally — nothing is sent to the cloud for processing.
                </p>
                <p>
                  No models are trained on your data. Your conversations are never analyzed by external companies. Only you control your information.
                </p>
                <p>
                  The final PDF notes are sent through your own email account. No third party stores or accesses your meeting content.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Subscription Free Section */}
      <section id="no-subscription" className="bg-gray-50 py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <DollarSign className="w-10 h-10 text-gray-900" />
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">No subscription</h2>
              </div>
              <div className="space-y-4 text-lg text-gray-600">
                <p>
                  SafeScribe is yours, permanently. No recurring charges, no tiered pricing, no premium features locked behind paywalls.
                </p>
                <p>
                  The device operates independently without requiring an account or subscription service. All functionality is included from day one.
                </p>
                <p>
                  There are no usage limits, feature restrictions, or additional costs. SafeScribe works for you without ongoing financial obligations.
                </p>
              </div>
            </div>
            <div>
              <img 
                src={subscriptionImage}
                alt="Clean desk setup"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            How it works
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-900 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Put it on your desk</h3>
              <p className="text-gray-600">
                Place SafeScribe on your desk. Plug it in. Connect it to your Wi-Fi.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gray-900 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Tap to record</h3>
              <p className="text-gray-600">
                When your meeting starts, tap the screen. SafeScribe listens and records.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gray-900 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Processing on device</h3>
              <p className="text-gray-600">
                Your speech is converted to text, summarized, and organized into action items — all processed locally on SafeScribe.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gray-900 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                4
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Get it in your inbox</h3>
              <p className="text-gray-600">
                SafeScribe emails a PDF summary to you. Done.
              </p>
            </div>
          </div>
          <div className="text-center mt-10">
            <Link
              to="/demo"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                <path d="M8 5v14l11-7L8 5z" />
              </svg>
              Watch Demo
            </Link>
          </div>
        </div>
      </section>

      {/* SafeScribe as Assistive Technology */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            SafeScribe as Assistive Technology
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            For people with ADHD, auditory processing differences, hearing loss, dyslexia, and other cognitive or neurological conditions, standard meetings can be a barrier. SafeScribe captures and structures everything that happens — so everyone can stay informed and contribute without the extra burden of note-taking.
          </p>
          <Link
            to="/accessibility"
            className="inline-flex items-center px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
          >
            Learn about accessibility
          </Link>
        </div>
      </section>

      {/* Get It Section */}
      <section id="github" className="bg-gray-900 text-white py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Get SafeScribe Now
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            SafeScribe is open source. You can build it yourself at home.
          </p>
          <a 
            href="https://github.com/syedhadi816/SafeScribe" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-gray-900 rounded-lg hover:bg-gray-100 transition-colors text-lg font-semibold"
          >
            <Github className="w-6 h-6" />
            View on GitHub
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <img src={logoImage} alt="SafeScribe" className="h-8 w-auto mb-4" />
              <p className="text-gray-600">
                Meeting notes from your desk. Privacy First. Subscription Free.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-4">Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/accessibility" className="text-gray-600 hover:text-gray-900">
                    Accessibility
                  </Link>
                </li>
                <li>
                  <Link to="/get-started" className="text-gray-600 hover:text-gray-900">
                    Get SafeScribe
                  </Link>
                </li>
                <li>
                  <a href="https://github.com/syedhadi816/SafeScribe" className="text-gray-600 hover:text-gray-900">
                    GitHub
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-4">Questions?</h3>
              <p className="text-gray-600 mb-2">
                Reach out if you need help or have feedback.
              </p>
              <a href="mailto:notes@safescribe.site" className="text-gray-900 hover:underline">
                notes@safescribe.site
              </a>
            </div>
          </div>
          <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-600 text-sm">
              © 2026 SafeScribe. Open source and independent.
            </p>
            <div className="flex items-center gap-4 text-sm">
              <span className="flex items-center gap-2">
                <Shield className="w-4 h-4" />
                Privacy first
              </span>
              <span>·</span>
              <span className="flex items-center gap-2">
                <DollarSign className="w-4 h-4" />
                Subscription free
              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}