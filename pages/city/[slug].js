import Image from "next/image";
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
      {/* City hero */}
      <div className="relative h-64 md:h-80 w-full overflow-hidden rounded-2xl">
        <Image src={city.image} alt={city.name} fill className="object-cover" priority />
      </div>

      <header>
        <h1 className="text-3xl font-bold">{city.name} Travel Guide</h1>
        <p className="text-gray-700">{city.summary}</p>
      </header>

      <AdUnit dataAdSlot="1428237868" />

      {/* Highlights */}
      <section>
        <h2 className="text-2xl font-semibold mb-2">Hidden Gems & Sustainable Picks</h2>
        <ul className="list-disc pl-6 space-y-1">
          {city.highlights.map((h, i) => (<li key={i}>{h}</li>))}
        </ul>
      </section>

      {/* Photo gallery */}
      {city.photos?.length ? (
        <section>
          <h3 className="text-xl font-semibold mb-2">Photo vibes</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {city.photos.map((p, i) => (
              <figure key={i} className="border rounded-xl overflow-hidden">
                <div className="relative h-56">
                  <Image src={p.url} alt={p.title} fill className="object-cover" />
                </div>
                <figcaption className="p-2 text-xs text-gray-600">
                  {p.title} — <a className="underline" href={p.creditLink} target="_blank" rel="noreferrer">{p.creditText}</a>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>
      ) : null}

      {/* Cross-links to keep users clicking */}
      <div className="grid md:grid-cols-3 gap-4">
        <Link href="/itineraries/7" className="underline">Plan a 7-day hop →</Link>
        <Link href="/itineraries/14" className="underline">2-week classic loop →</Link>
        <Link href="/itineraries/21" className="underline">3-week explorer →</Link>
      </div>

      <AdUnit dataAdSlot="1428237868" />
    </div>
  );
}
