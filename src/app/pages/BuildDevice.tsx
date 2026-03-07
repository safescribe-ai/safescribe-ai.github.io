import { useEffect, useState } from 'react';
import { Link } from 'react-router';
import { ArrowLeft } from 'lucide-react';
import ReactMarkdown from 'react-markdown';

const logoImage = '/assets/SafeScribe_logo.png';

export default function BuildDevice() {
  const [markdown, setMarkdown] = useState<string>('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    document.title = 'Build SafeScribe – Self-Build Guide';
    fetch('/build-guide.md')
      .then((res) => {
        if (!res.ok) throw new Error('Could not load guide');
        return res.text();
      })
      .then(setMarkdown)
      .catch(() => setError('Failed to load the build guide.'))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <header className="border-b border-gray-200 sticky top-0 z-10 bg-white">
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 font-medium"
          >
            <ArrowLeft className="w-5 h-5" />
            Back
          </Link>
          <Link to="/">
            <img src={logoImage} alt="SafeScribe" className="h-8 w-auto" />
          </Link>
          <div className="w-16" aria-hidden />
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-10 md:py-14">
        {loading && (
          <p className="text-gray-500 text-center py-12">Loading guide…</p>
        )}
        {error && (
          <div className="text-center py-12">
            <p className="text-red-600 mb-4">{error}</p>
            <Link to="/" className="text-gray-900 font-medium hover:underline">
              Return to home
            </Link>
          </div>
        )}
        {!loading && !error && markdown && (
          <article className="build-guide [&_h1]:text-3xl [&_h1]:md:text-4xl [&_h1]:font-bold [&_h1]:text-gray-900 [&_h1]:mb-4 [&_h2]:text-xl [&_h2]:md:text-2xl [&_h2]:font-bold [&_h2]:text-gray-900 [&_h2]:mt-10 [&_h2]:mb-4 [&_h3]:text-lg [&_h3]:font-bold [&_h3]:text-gray-900 [&_h3]:mt-6 [&_h3]:mb-2 [&_p]:text-gray-600 [&_p]:leading-relaxed [&_p]:mb-4 [&_a]:text-gray-900 [&_a]:underline [&_a:hover]:no-underline [&_ul]:my-4 [&_li]:text-gray-600 [&_li]:mb-1 [&_code]:bg-gray-100 [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:rounded [&_code]:text-sm [&_pre]:bg-gray-900 [&_pre]:text-gray-100 [&_pre]:p-4 [&_pre]:rounded-xl [&_pre]:overflow-x-auto [&_pre]:my-4 [&_table]:w-full [&_th]:text-left [&_th]:font-semibold [&_th]:p-2 [&_td]:p-2 [&_td]:border-t [&_td]:border-gray-200 [&_hr]:my-8 [&_hr]:border-gray-200">
            <ReactMarkdown
              components={{
                a: ({ href, children }) => (
                  <a href={href} target="_blank" rel="noopener noreferrer">
                    {children}
                  </a>
                ),
              }}
            >
              {markdown}
            </ReactMarkdown>
          </article>
        )}
      </main>
    </div>
  );
}
