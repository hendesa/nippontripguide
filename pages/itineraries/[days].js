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
