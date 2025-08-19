// pages/city/[slug].js
import { useRouter } from "next/router";
import Link from "next/link";
import attractions from "../../data/attractions.json"; // <-- we’ll keep all attractions in a JSON file

export default function CityPage() {
  const router = useRouter();
  const { slug } = router.query;

  // Find attractions that belong to this city
  const cityAttractions = attractions.filter(
    (place) => place.city.toLowerCase() === slug?.toLowerCase()
  );

  if (!slug) return <p>Loading...</p>;

  return (
    <div style={{ padding: "2rem" }}>
      <h1 style={{ fontSize: "2rem", fontWeight: "bold" }}>
        Explore {slug.charAt(0).toUpperCase() + slug.slice(1)}
      </h1>
      <p style={{ marginBottom: "1rem" }}>
        Our handpicked attractions for {slug}.
      </p>

      {cityAttractions.length === 0 ? (
        <p>No attractions found for this city yet!</p>
      ) : (
        <ul style={{ display: "grid", gap: "1rem" }}>
          {cityAttractions.map((place) => (
            <li
              key={place.slug}
              style={{
                border: "1px solid #ddd",
                padding: "1rem",
                borderRadius: "8px",
              }}
            >
              <h2 style={{ fontSize: "1.2rem", marginBottom: "0.5rem" }}>
                {place.name}
              </h2>
              <p>{place.shortDescription}</p>
              <Link href={`/attraction/${place.slug}`}>
                <span style={{ color: "blue", cursor: "pointer" }}>
                  👉 Read more
                </span>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}/* city page code goes here (we added this earlier).
   If you need me to paste it again, say "send city page code". */
