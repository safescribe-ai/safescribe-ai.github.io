import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router';
import { ArrowLeft } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

const logoImage = '/assets/SafeScribe_logo.png';

const SECTION_IDS = [
  { id: 'intro', label: 'Intro' },
  { id: 'hardware', label: '1. Hardware list' },
  { id: 'raspberry-pi-os', label: '2. Raspberry Pi OS' },
  { id: 'first-boot', label: '3. First boot' },
  { id: 'install-safescribe', label: '4. Install SafeScribe' },
  { id: 'post-install', label: '5. Post-install' },
  { id: 'first-run', label: '6. First run' },
  { id: 'troubleshooting', label: '7. Troubleshooting' },
  { id: 'summary', label: '8. Summary' },
];

export default function BuildDevice() {
  const [markdown, setMarkdown] = useState<string>('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const h2IndexRef = useRef(0);

  useEffect(() => {
    document.title = 'Build SafeScribe – Self-Build Guide';
    fetch('/build-guide.md')
      .then((res) => {
        if (!res.ok) throw new Error('Could not load guide');
        return res.text();
      })
      .then((text) => {
        h2IndexRef.current = 0;
        setMarkdown(text);
      })
      .catch(() => setError('Failed to load the build guide.'))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="border-b border-gray-200 sticky top-0 z-20 bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
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

      <div className="max-w-6xl mx-auto px-4 py-8 md:py-10">
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

        {!loading && !error && markdown && (() => {
          h2IndexRef.current = 0;
          return (
          <div className="flex flex-col lg:flex-row gap-10">
            {/* Table of contents – sticky on desktop */}
            <nav
              aria-label="Guide sections"
              className="lg:w-56 shrink-0 lg:sticky lg:top-24 self-start"
            >
              <div className="bg-white rounded-xl border border-gray-200 p-4 shadow-sm">
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
                  On this page
                </p>
                <ul className="space-y-1.5 text-sm">
                  {SECTION_IDS.map(({ id, label }) => (
                    <li key={id}>
                      <a
                        href={`#${id}`}
                        className="text-gray-600 hover:text-gray-900 hover:underline block py-0.5"
                      >
                        {label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </nav>

            {/* Main content */}
            <main className="flex-1 min-w-0">
              <article className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
                <div className="p-6 md:p-10 build-guide-content">
                  <ReactMarkdown
                    remarkPlugins={[remarkGfm]}
                    components={{
                      a: ({ href, children }) => (
                        <a
                          href={href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-900 underline hover:no-underline"
                        >
                          {children}
                        </a>
                      ),
                      h1: ({ children }) => (
                        <h1 id="intro" className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                          {children}
                        </h1>
                      ),
                      h2: ({ children }) => {
                        const index = h2IndexRef.current;
                        const id = SECTION_IDS[index + 1]?.id ?? `section-${index}`;
                        h2IndexRef.current += 1;
                        return (
                          <h2 id={id} className="text-xl md:text-2xl font-bold text-gray-900 mt-10 mb-4 pt-2 border-t border-gray-100 first:border-0 first:mt-0 first:pt-0 scroll-mt-24">
                            {children}
                          </h2>
                        );
                      },
                      h3: ({ children }) => (
                        <h3 className="text-lg font-bold text-gray-900 mt-6 mb-2">
                          {children}
                        </h3>
                      ),
                      p: ({ children }) => (
                        <p className="text-gray-600 leading-relaxed mb-4">{children}</p>
                      ),
                      ul: ({ children }) => (
                        <ul className="list-disc pl-6 my-4 space-y-1 text-gray-600">{children}</ul>
                      ),
                      ol: ({ children }) => (
                        <ol className="list-decimal pl-6 my-4 space-y-1 text-gray-600">{children}</ol>
                      ),
                      li: ({ children }) => <li className="leading-relaxed">{children}</li>,
                      table: ({ children }) => (
                        <div className="overflow-x-auto my-6 rounded-lg border border-gray-200">
                          <table className="w-full text-sm text-left">{children}</table>
                        </div>
                      ),
                      thead: ({ children }) => (
                        <thead className="bg-gray-100 text-gray-900 font-semibold">
                          {children}
                        </thead>
                      ),
                      th: ({ children }) => (
                        <th className="px-4 py-3 border-b border-gray-200">{children}</th>
                      ),
                      td: ({ children }) => (
                        <td className="px-4 py-3 border-b border-gray-100 text-gray-600">{children}</td>
                      ),
                      tbody: ({ children }) => <tbody>{children}</tbody>,
                      tr: ({ children }) => <tr className="border-b border-gray-100 last:border-0">{children}</tr>,
                      pre: ({ children }) => (
                        <pre className="my-4 p-4 rounded-xl bg-gray-900 text-gray-100 overflow-x-auto text-sm font-mono">
                          {children}
                        </pre>
                      ),
                      code: ({ className, children }) => {
                        const isBlock = className?.includes('language-');
                        if (isBlock) {
                          return <code className="text-gray-100 font-mono text-sm">{children}</code>;
                        }
                        return (
                          <code className="bg-gray-200 text-gray-800 px-1.5 py-0.5 rounded text-sm font-mono">
                            {children}
                          </code>
                        );
                      },
                      hr: () => <hr className="my-8 border-gray-200" />,
                      strong: ({ children }) => <strong className="font-semibold text-gray-900">{children}</strong>,
                    }}
                  >
                    {markdown}
                  </ReactMarkdown>
                </div>
              </article>
            </main>
          </div>
          );
        })()}
      </div>
    </div>
  );
}
