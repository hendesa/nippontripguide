// pages/city/[slug].js

import { useRouter } from "next/router";
import Link from "next/link";
import cities from "../../data/cities";
import attractions from "../../data/attractions";

export default function CityPage() {
  const router = useRouter();
  const { slug } = router.query;

  if (!slug) return <p>Loading...</p>;

  const city = cities.find((c) => c.slug === slug);

  if (!city) return <p>City not found!</p>;

  // Filter attractions for this city
  const cityAttractions = attractions.filter((a) => a.citySlug === slug);

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">{city.name}</h1>
      <p className="text-gray-700 mb-6">{city.description}</p>

      <h2 className="text-2xl font-semibold mb-3">Featured Spots 🌸</h2>
      {cityAttractions.length === 0 ? (
        <p>No attractions listed yet for this city.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {cityAttractions.map((a) => (
            <div
              key={a.slug}
              className="border rounded-lg p-4 shadow-sm hover:shadow-md transition"
            >
              <h3 className="text-xl font-semibold">{a.name}</h3>
              <p className="text-gray-600 mb-3">{a.description}</p>
              <Link
                href={`/attraction/${a.slug}`}
                className="text-blue-600 hover:underline"
              >
                Learn more →
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
