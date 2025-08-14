import Link from "next/link";
import Script from "next/script";

export default function Layout({ children }) {
  const adClient = process.env.NEXT_PUBLIC_ADSENSE_CLIENT;
  return (
    <>
      {adClient ? (
        <Script
          id="adsbygoogle-loader"
          strategy="afterInteractive"
          crossOrigin="anonymous"
          src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${adClient}`}
        />
      ) : null}

      <header className="border-b">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="text-xl font-bold">NipponTripGuide</Link>
          <nav className="flex gap-4 text-sm">
            <Link href="/itineraries/7">7 days</Link>
            <Link href="/itineraries/14">14 days</Link>
            <Link href="/itineraries/21">21 days</Link>
            <Link href="/itineraries/28">28 days</Link>
          </nav>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-6">{children}</main>

      <footer className="mt-10 border-t">
        <div className="max-w-6xl mx-auto px-4 py-6 text-sm text-gray-600">
          <p>
            <strong>Konnichiwa and Welcome to NipponTripGuide — your expert friend for the ultimate Japan adventure! 🌸✨</strong>
            We champion sustainable travel: spreading visitors beyond overcrowded hotspots to support local communities and protect nature.
          </p>
          <div className="mt-2 flex gap-4">
            <Link href="/city/tokyo">Tokyo</Link>
            <Link href="/city/kyoto">Kyoto</Link>
            <Link href="/city/osaka">Osaka</Link>
            <Link href="/city/hokkaido">Hokkaido</Link>
          </div>
          <p className="mt-4">© {new Date().getFullYear()} NipponTripGuide</p>
        </div>
      </footer>
    </>
  );
}
