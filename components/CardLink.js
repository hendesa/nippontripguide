import Link from "next/link";

export default function CardLink({ href, title, children }) {
  return (
    <Link href={href} className="border rounded-xl p-4 hover:shadow transition block">
      <h3 className="font-semibold mb-1">{title}</h3>
      <p className="text-sm text-gray-600">{children}</p>
    </Link>
  );
}
