#!/usr/bin/env bash
set -euo pipefail

# Run this from your Next.js project root (must contain package.json and pages/)
# It scaffolds NipponTripGuide with Tailwind, ads, itineraries, and city pages.

echo "==> Verifying location..."
if [[ ! -f "package.json" || ! -d "pages" ]]; then
  echo "Please run this from your Next.js project root (must contain package.json and pages/)."
  exit 1
fi

echo "==> Creating folders..."
mkdir -p styles pages/itineraries pages/city pages/api components data

echo "==> Writing .env.local (placeholder AdSense client — replace after approval)"
cat > .env.local <<'EOF'
# Replace with your real AdSense publisher ID after approval (format: ca-pub-XXXXXXXXXXXXXXXX)
NEXT_PUBLIC_ADSENSE_CLIENT=ca-pub-xxxxxxxxxxxxxxxx
EOF

echo "==> Writing next.config.js"
cat > next.config.js <<'EOF'
/** @type {import('next').NextConfig} */
const nextConfig = { reactStrictMode: true };
module.exports = nextConfig;
EOF

echo "==> Writing postcss.config.js"
cat > postcss.config.js <<'EOF'
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
EOF

echo "==> Writing tailwind.config.js"
cat > tailwind.config.js <<'EOF'
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: { extend: {} },
  plugins: [],
};
EOF

echo "==> Writing styles/globals.css"
cat > styles/globals.css <<'EOF'
@tailwind base;
@tailwind components;
@tailwind utilities;

:root { color-scheme: light; }
body { @apply bg-white text-gray-800; }
a { @apply text-blue-600 hover:text-blue-700; }
EOF

echo "==> Writing pages/_app.js"
cat > pages/_app.js <<'EOF'
import "../styles/globals.css";
import Layout from "../components/Layout";

export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
EOF

echo "==> Writing pages/_document.js"
cat > pages/_document.js <<'EOF'
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta
          name="description"
          content="NipponTripGuide – authentic, sustainable Japan travel itineraries and flight tips."
        />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
EOF

echo "==> Writing components/Layout.js"
cat > components/Layout.js <<'EOF'
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
EOF

echo "==> Writing components/AdUnit.js"
cat > components/AdUnit.js <<'EOF'
import { useEffect } from "react";

/**
 * Reusable AdSense unit. Place <AdUnit dataAdSlot="YOUR_SLOT_ID" /> wherever you want an ad.
 * Ensure NEXT_PUBLIC_ADSENSE_CLIENT is set in .env.local and AdSense has approved your site.
 */
export default function AdUnit({
  dataAdSlot,
  dataAdFormat = "auto",
  dataFullWidthResponsive = true,
  className = "my-6",
}) {
  useEffect(() => {
    try {
      if (typeof window !== "undefined" && window.adsbygoogle) {
        window.adsbygoogle.push({});
      }
    } catch (e) {}
  }, []);

  return (
    <div className={className}>
      <ins
        className="adsbygoogle block"
        style={{ display: "block" }}
        data-ad-client={process.env.NEXT_PUBLIC_ADSENSE_CLIENT}
        data-ad-slot={dataAdSlot}
        data-ad-format={dataAdFormat}
        data-full-width-responsive={dataFullWidthResponsive ? "true" : "false"}
      />
    </div>
  );
}
EOF

echo "==> Writing components/CardLink.js"
cat > components/CardLink.js <<'EOF'
import Link from "next/link";

export default function CardLink({ href, title, children }) {
  return (
    <Link href={href} className="border rounded-xl p-4 hover:shadow transition block">
      <h3 className="font-semibold mb-1">{title}</h3>
      <p className="text-sm text-gray-600">{children}</p>
    </Link>
  );
}
EOF

echo "==> Writing data/cities.js"
cat > data/cities.js <<'EOF'
export const cities = [
  {
    slug: "tokyo",
    name: "Tokyo",
    summary: "Skyscrapers, sushi bars, hidden alleys, and serene shrines.",
    highlights: [
      "Senso-ji at dawn (avoid crowds)",
      "Yanaka for slow, old-Tokyo vibes",
      "Kichijoji Inokashira Park + veg-friendly cafes",
      "Akihabara for anime & retro arcades",
    ],
  },
  {
    slug: "kyoto",
    name: "Kyoto",
    summary: "Timeless temples, tea houses, craft workshops, and river walks.",
    highlights: [
      "Arashiyama bamboo at sunrise (then Sagano scenic train)",
      "Nishiki Market veg ramen + tofu kaiseki",
      "Kintsugi or indigo dye craft class",
      "Philosopher’s Path in shoulder season",
    ],
  },
  {
    slug: "osaka",
    name: "Osaka",
    summary: "Street food capital: takoyaki, okonomiyaki, and neon nights.",
    highlights: [
      "Kuromon Ichiba (early) incl. veggie stalls",
      "Nakazakicho vintage cafes",
      "Umeda Sky sunset",
      "Day-trip to Minoo Park waterfall",
    ],
  },
  {
    slug: "hokkaido",
    name: "Hokkaido",
    summary: "Wild nature, powder snow, seafood, and summer flower fields.",
    highlights: [
      "Furano lavender (summer) / Niseko powder (winter)",
      "Sapporo soup curry incl. vegan versions",
      "Shiretoko National Park eco-tour",
      "Onsen towns with mixed-gender options",
    ],
  },
];
EOF

echo "==> Writing data/itineraries.js"
cat > data/itineraries.js <<'EOF'
export const itineraries = {
  7: {
    title: "7-Day Highlights (Tokyo → Kyoto)",
    days: [
      "Arrive Tokyo (HND/NRT) – neighborhood walk + local izakaya (veg menus noted)",
      "Shibuya/Harajuku hidden lanes + Meiji Jingu forest bathing",
      "Asakusa at dawn → Ueno museums → Yanaka old town cafes",
      "Day trip: Nikko or Kamakura (choose temples or coastal trails)",
      "Shinkansen to Kyoto – Gion evening stroll (no geisha-chasing)",
      "Kyoto craft day: kintsugi/ceramics/indigo workshop + veg ramen",
      "Arashiyama sunrise → return flight from KIX/ITM",
    ],
  },
  14: {
    title: "14-Day Classic + Kansai & Osaka Food Crawl",
    days: [
      "Tokyo arrival rituals + neighborhood yakitori / veg izakaya",
      "Akihabara + Kanda book town + Kichijoji park",
      "Tsukiji outer market breakfast (veg-friendly stalls) + Odaiba sunset",
      "Hakone onsen detour (eco ryokan)",
      "Shinkansen to Kyoto – temples off-peak",
      "Kyoto northern mountains – Kurama to Kibune hike",
      "Nara day trip (respect deer welfare)",
      "Osaka food tour: takoyaki/okonomiyaki + veg okonomi",
      "Himeji castle + Koko-en gardens",
      "Naoshima art island (sustainable transport)",
      "Hiroshima + Miyajima (early ferries)",
      "Kobe mountain herb gardens + tea",
      "Back to Tokyo – shopping local makers",
      "Buffer / departure",
    ],
  },
  21: {
    title: "21-Day Explorer (Tohoku or Shikoku option)",
    days: [
      "Tokyo warm-up + jet lag day",
      "Tohoku bullet train: Sendai & Matsushima bays OR Shikoku 88-temple intro",
      "Aomori Nebuta museum OR Kochi Sunday market (veg stalls)",
      "Hachimantai hike OR Iya Valley vine bridges",
      "Akita onsen towns OR Tokushima indigo craft",
      "Return via Niigata sake (designated driver!) OR Kagawa udon (veg dashi)",
      "Kansai loop (Kyoto/Osaka/Nara)",
      "Chugoku region: Okayama gardens",
      "Hiroshima remembrance + peace park",
      "Yamaguchi: Motonosumi shrine coast",
      "Kyushu intro: Fukuoka yatai incl. vegan yatai",
      "Beppu onsen eco-etiquette",
      "Kumamoto castle + Aso caldera",
      "Nagasaki history walk",
      "Yakushima cedar hikes (permit/guide)",
      "Kagoshima volcano views",
      "Fly back to Tokyo",
      "Kawagoe Edo town",
      "Kamakura coastal trails",
      "Tokyo free day",
      "Departure",
    ],
  },
  28: {
    title: "28-Day Grand Circle (Nature + Culture + Food)",
    days: Array.from({ length: 28 }, (_, i) => `Day ${i + 1}: Curated activities across regions, balancing city energy, nature resets, and food hunts (veg + meat options).`),
  },
};
EOF

echo "==> Writing pages/index.js"
cat > pages/index.js <<'EOF'
import Link from "next/link";
import AdUnit from "../components/AdUnit";
import CardLink from "../components/CardLink";
import { cities } from "../data/cities";

export default function Home() {
  return (
    <div className="space-y-8">
      <section className="text-center">
        <h1 className="text-4xl font-extrabold">Konnichiwa and Welcome to NipponTripGuide — your expert friend for the ultimate Japan adventure! 🌸✨</h1>
        <p className="mt-4 text-lg text-gray-700">
          Our mission: make travel joyful and sustainable by guiding explorers beyond overcrowded spots to hidden gems—supporting local people, culture, and nature.
        </p>
      </section>

      {/* Top ad near fold */}
      <AdUnit dataAdSlot="1234567890" />

      <section>
        <h2 className="text-2xl font-bold mb-3">Plan by Trip Length</h2>
        <div className="grid md:grid-cols-4 gap-4">
          <CardLink href="/itineraries/7" title="7 Days">Tokyo → Kyoto highlights with cafe gems and veg-friendly picks.</CardLink>
          <CardLink href="/itineraries/14" title="14 Days">Classic circuit plus Osaka street food and Naoshima art.</CardLink>
          <CardLink href="/itineraries/21" title="21 Days">Add Tohoku or Shikoku for off-path culture and nature.</CardLink>
          <CardLink href="/itineraries/28" title="28 Days">The grand circle: cities, islands, and national parks.</CardLink>
        </div>
      </section>

      {/* Mid-page ad to increase impressions */}
      <AdUnit dataAdSlot="1234567890" />

      <section>
        <h2 className="text-2xl font-bold mb-3">Explore by City</h2>
        <div className="grid md:grid-cols-4 gap-4">
          {cities.map((c) => (
            <CardLink key={c.slug} href={`/city/${c.slug}`} title={c.name}>{c.summary}</CardLink>
          ))}
        </div>
      </section>

      {/* Bottom ad before footer */}
      <AdUnit dataAdSlot="1234567890" />
    </div>
  );
}
EOF

echo "==> Writing pages/itineraries/[days].js"
cat > pages/itineraries/[days].js <<'EOF'
import AdUnit from "../../components/AdUnit";
import { itineraries } from "../../data/itineraries";
import Link from "next/link";

export function getStaticPaths() {
  return {
    paths: ["/itineraries/7", "/itineraries/14", "/itineraries/21", "/itineraries/28"],
    fallback: false,
  };
}

export function getStaticProps({ params }) {
  const plan = itineraries[params.days];
  return { props: { days: params.days, plan } };
}

export default function ItineraryPage({ days, plan }) {
  if (!plan) return <p>Itinerary not found</p>;
  return (
    <article className="prose max-w-none">
      <h1 className="text-3xl font-bold mb-2">{plan.title}</h1>
      <p className="text-gray-600 mb-4">Curated for traveler types: thrill-seeker, cafe lover, anime fan, crafts aficionado, and nature-first explorers.</p>

      {/* In-article ad */}
      <AdUnit dataAdSlot="1234567890" />

      <ol className="list-decimal pl-6 space-y-2">
        {plan.days.map((d, i) => (<li key={i}>{d}</li>))}
      </ol>

      <div className="mt-8 grid md:grid-cols-2 gap-4">
        <Link href="/city/tokyo" className="underline">Tokyo guide →</Link>
        <Link href="/city/kyoto" className="underline">Kyoto guide →</Link>
      </div>

      {/* Another ad near bottom */}
      <AdUnit dataAdSlot="1234567890" />
    </article>
  );
}
EOF

echo "==> Writing pages/city/[slug].js"
cat > pages/city/[slug].js <<'EOF'
import { cities } from "../../data/cities";
import AdUnit from "../../components/AdUnit";
import Link from "next/link";

export function getStaticPaths() {
  return { paths: cities.map((c) => `/city/${c.slug}`), fallback: false };
}

export function getStaticProps({ params }) {
  const city = cities.find((c) => c.slug === params.slug) || null;
  return { props: { city } };
}

export default function CityPage({ city }) {
  if (!city) return <p>City not found</p>;
  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-3xl font-bold">{city.name} Travel Guide</h1>
        <p className="text-gray-700">{city.summary}</p>
      </header>

      <AdUnit dataAdSlot="1234567890" />

      <section>
        <h2 className="text-2xl font-semibold mb-2">Hidden Gems & Sustainable Picks</h2>
        <ul className="list-disc pl-6 space-y-1">
          {city.highlights.map((h, i) => (<li key={i}>{h}</li>))}
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">Food for Everyone</h2>
        <p>We spotlight vegetarian and vegan options alongside epic meat-lover classics—so your crew can dine together happily.</p>
      </section>

      <div className="grid md:grid-cols-3 gap-4">
        <Link href="/itineraries/7" className="underline">Plan a 7-day hop →</Link>
        <Link href="/itineraries/14" className="underline">2-week classic loop →</Link>
        <Link href="/itineraries/21" className="underline">3-week explorer →</Link>
      </div>

      <AdUnit dataAdSlot="1234567890" />
    </div>
  );
}
EOF

echo "==> Writing pages/api/revalidate.js"
cat > pages/api/revalidate.js <<'EOF'
export default async function handler(req, res) {
  const secret = process.env.REVALIDATE_SECRET;
  if (secret && req.query.secret !== secret) {
    return res.status(401).json({ message: "Invalid token" });
  }
  const path = req.query.path || "/";
  try {
    await res.revalidate(path);
    return res.json({ revalidated: true, path });
  } catch (err) {
    return res.status(500).json({ message: "Error revalidating", error: String(err) });
  }
}
EOF

echo "==> Installing Tailwind + PostCSS + Autoprefixer (dev deps)"
npm install -D tailwindcss postcss autoprefixer

echo "==> Ensuring project deps are installed"
npm install

cat <<'EOF'
==> All set. Next steps:
1) Update .env.local with your real AdSense client (ca-pub-XXXXXXXXXXXXXXX).
2) Replace dataAdSlot placeholders (1234567890) with your real Ad Slot IDs after creating units in AdSense.
3) Run: npm run dev   (open http://localhost:3000)
4) git add . && git commit -m "Scaffolded site" && git push   (Vercel will redeploy)
EOF
