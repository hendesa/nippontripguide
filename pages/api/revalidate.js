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
