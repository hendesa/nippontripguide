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
