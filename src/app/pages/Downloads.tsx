import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router";
import { ArrowLeft, Download, ExternalLink } from "lucide-react";

type ReleaseAsset = {
  id: number;
  name: string;
  browser_download_url: string;
  size: number;
  download_count: number;
  updated_at: string;
};

type ReleaseResponse = {
  tag_name: string;
  html_url: string;
  published_at: string;
  assets: ReleaseAsset[];
};

const logoImage = "/assets/SafeScribe_logo.png";
const RELEASE_API_URL =
  "https://api.github.com/repos/syedhadi816/SafeScribe/releases/latest";

function formatBytes(bytes: number): string {
  const mb = bytes / (1024 * 1024);
  return `${mb.toFixed(1)} MB`;
}

export default function Downloads() {
  const [release, setRelease] = useState<ReleaseResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    document.title = "SafeScribe Downloads";
    fetch(RELEASE_API_URL)
      .then(async (res) => {
        if (!res.ok) {
          throw new Error("Could not load download stats.");
        }
        return (await res.json()) as ReleaseResponse;
      })
      .then((data) => setRelease(data))
      .catch(() => setError("Failed to load downloads right now. Try again shortly."))
      .finally(() => setLoading(false));
  }, []);

  const visibleAssets = useMemo(
    () => (release?.assets ?? []).filter((asset) => asset.name.endsWith(".zip")),
    [release]
  );

  const totalDownloads = visibleAssets.reduce(
    (sum, asset) => sum + asset.download_count,
    0
  );

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

      <main className="max-w-4xl mx-auto px-4 py-10">
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 md:p-8">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            Public Downloads
          </h1>

          {loading && <p className="text-gray-500">Loading download stats...</p>}
          {error && <p className="text-red-600">{error}</p>}

          {!loading && !error && release && (
            <>
              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                <div className="rounded-lg border border-gray-200 p-4">
                  <p className="text-sm text-gray-500 mb-1">Latest release</p>
                  <p className="text-xl font-semibold text-gray-900">{release.tag_name}</p>
                </div>
                <div className="rounded-lg border border-gray-200 p-4">
                  <p className="text-sm text-gray-500 mb-1">Total .zip downloads</p>
                  <p className="text-xl font-semibold text-gray-900">{totalDownloads}</p>
                </div>
              </div>

              <div className="space-y-3">
                {visibleAssets.map((asset) => (
                  <div
                    key={asset.id}
                    className="border border-gray-200 rounded-lg p-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3"
                  >
                    <div>
                      <p className="font-semibold text-gray-900">{asset.name}</p>
                      <p className="text-sm text-gray-500">
                        {formatBytes(asset.size)} · Updated{" "}
                        {new Date(asset.updated_at).toLocaleDateString()}
                      </p>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="text-right">
                        <p className="text-xs text-gray-500">Downloads</p>
                        <p className="text-lg font-bold text-gray-900">{asset.download_count}</p>
                      </div>
                      <a
                        href={asset.browser_download_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
                      >
                        <Download className="w-4 h-4" />
                        Download
                      </a>
                    </div>
                  </div>
                ))}
              </div>

              <a
                href={release.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-6 text-gray-700 hover:text-gray-900 underline"
              >
                Open release on GitHub
                <ExternalLink className="w-4 h-4" />
              </a>
            </>
          )}
        </div>
      </main>
    </div>
  );
}
