// pages/attraction/[slug].js
import Image from "next/image";
import Link from "next/link";
import AdUnit from "../../components/AdUnit";
import { attractions } from "../../data/attractions";

export function getStaticPaths() {
  return { paths: attractions.map(a => `/attraction/${a.slug}`), fallback: false };
}

export function getStaticProps({ params }) {
  const item = attractions.find(a => a.slug === params.slug) || null;
  return { props: { item } };
}

const Pill = ({ children }) => (
  <span className="inline-block rounded-full border px-3 py-1 text-xs mr-2 mb-2">{children}</span>
);

export default function AttractionPage({ item }) {
  if (!item) return <p>Attraction not found.</p>;
  const t = item.tags || {};

  return (
    <article className="space-y-6">
      <div className="relative h-64 md:h-96 w-full overflow-hidden rounded-2xl">
        <Image src={item.image} alt={item.name} fill className="object-cover" priority />
      </div>

      <header>
        <h1 className="text-3xl font-extrabold">{item.name}</h1>
        <p className="text-gray-700">{item.summary}</p>
      </header>

      <AdUnit dataAdSlot="1428237868" />

      <section className="prose max-w-none">
        {item.body.trim().split("\n").filter(Boolean).map((p, i) => <p key={i}>{p.trim()}</p>)}
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">Who will love this?</h2>
        <div>
          {t.couples && <Pill>🌸 Couples</Pill>}
          {t.families && <Pill>👨‍👩‍👧‍👦 Families</Pill>}
          {t.solo && <Pill>🧳 Solo travelers</Pill>}
          {t.foodies && <Pill>🍜 Foodies</Pill>}
          {t.vegFriendly && <Pill>🥗 Veg/Vegan options</Pill>}
          {t.photography && <Pill>📷 Photography</Pill>}
          {t.nature && <Pill>🌿 Nature</Pill>}
          {t.history && <Pill>🏯 History buffs</Pill>}
          {t.meditative && <Pill>🧘 Meditative souls</Pill>}
          {t.anime && <Pill>🎮 Anime/Gaming</Pill>}
          {t.beach && <Pill>🏖️ Beach day</Pill>}
          {t.onsen && <Pill>♨️ Onsen lovers</Pill>}
          {t.nightlife && <Pill>🌃 Nightlife</Pill>}
          {t.crafts && <Pill>🧵 Crafts</Pill>}
          {t.budget && <Pill>💴 Budget-friendly</Pill>}
          {t.accessibility && <Pill>♿ Accessibility</Pill>}
          {t.chill && <Pill>😌 Chill day</Pill>}
        </div>
      </section>

      {item.didYouKnow && (
        <section className="border rounded-xl p-4 bg-gray-50">
          <h3 className="font-semibold mb-1">🎌 Did you know?</h3>
          <p className="text-sm text-gray-700">{item.didYouKnow}</p>
        </section>
      )}

      <div className="flex flex-wrap gap-4">
        <a className="underline" href={item.mapUrl} target="_blank" rel="noreferrer">Open in Google Maps →</a>
        <Link className="underline" href={`/city/${item.city.toLowerCase()}`}>More in {item.city} →</Link>
      </div>

      <AdUnit dataAdSlot="1428237868" />
    </article>
  );
}
