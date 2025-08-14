import Link from "next/link";
import Image from "next/image";
import AdUnit from "../components/AdUnit";
import CardLink from "../components/CardLink";
import { cities } from "../data/cities";

const HERO =
  "https://upload.wikimedia.org/wikipedia/commons/3/3b/Chureito_Pagoda_and_Mount_Fuji_20241022.jpg"; // Arakurayama Sengen Park (CC BY 4.0)

export default function Home() {
  return (
    <div className="space-y-10">
      {/* HERO */}
      <section className="relative h-[52vh] w-full overflow-hidden rounded-2xl">
        <Image
          src={HERO}
          alt="Chureito Pagoda with Mount Fuji in early autumn"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white drop-shadow">
            Konnichiwa and Welcome to NipponTripGuide — your expert friend for the ultimate Japan adventure! 🌸✨
          </h1>
          <p className="mt-4 max-w-3xl text-white/90 text-lg">
            We hope that, in sharing lesser-known places (our favourite, hidden gems!) as well as the well-known tourist highlights,
            you can enjoy a sustainable and authentic Japan experience!
          </p>
        </div>
      </section>

      {/* Itinerary sentence with links */}
      <section className="text-center">
        <p className="text-lg">
          We’ve designed itineraries based on trip lengths of:&nbsp;
          <Link href="/itineraries/7" className="underline font-semibold">7 days</Link>,&nbsp;
          <Link href="/itineraries/14" className="underline font-semibold">14 days</Link>,&nbsp;
          <Link href="/itineraries/21" className="underline font-semibold">21 days</Link>,&nbsp;
          <Link href="/itineraries/28" className="underline font-semibold">28 days</Link>.
        </p>
      </section>

      {/* Ad near the fold */}
      <AdUnit dataAdSlot="1234567890" />

      {/* Trip length cards */}
      <section>
        <h2 className="text-2xl font-bold mb-3">Plan by Trip Length</h2>
        <div className="grid md:grid-cols-4 gap-4">
          <CardLink href="/itineraries/7" title="7 Days">Tokyo → Kyoto highlights with cafe gems and veg-friendly picks.</CardLink>
          <CardLink href="/itineraries/14" title="14 Days">Classic circuit plus Osaka street food and Naoshima art.</CardLink>
          <CardLink href="/itineraries/21" title="21 Days">Add Tohoku or Shikoku for off-path culture and nature.</CardLink>
          <CardLink href="/itineraries/28" title="28 Days">The grand circle: cities, islands, and national parks.</CardLink>
        </div>
      </section>

      {/* Mid-page ad */}
      <AdUnit dataAdSlot="1234567890" />

      {/* Cities grid */}
      <section>
        <h2 className="text-2xl font-bold mb-3">Explore by City</h2>
        <div className="grid md:grid-cols-4 gap-4">
          {cities.map((c) => (
            <Link key={c.slug} href={`/city/${c.slug}`} className="group border rounded-2xl overflow-hidden hover:shadow transition">
              <div className="relative h-40 w-full">
                <Image
                  src={c.image}
                  alt={c.name}
                  fill
                  className="object-cover group-hover:scale-[1.02] transition-transform"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold">{c.name}</h3>
                <p className="text-sm text-gray-600">{c.summary}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Bottom ad */}
      <AdUnit dataAdSlot="1234567890" />
    </div>
  );
}import Link from "next/link";
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
