export interface VisitorMetadata {
  ip: string;
  country: string;
  region: string;
  city: string;
  device: string;
  browser: string;
  time: string;
  page_url: string;
}

export async function getVisitorMetadata(): Promise<VisitorMetadata> {
  const meta: VisitorMetadata = {
    ip: "Unknown",
    country: "Unknown",
    region: "Unknown",
    city: "Unknown",
    device: "Desktop",
    browser: "Unknown Browser",
    time: new Date().toLocaleString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      timeZoneName: "short",
    }),
    page_url: typeof window !== "undefined" ? window.location.href : "Unknown",
  };

  if (typeof window === "undefined") return meta;

  try {
    // Fetch Geolocation Data
    const geoRes = await fetch("https://ipapi.co/json/");
    if (geoRes.ok) {
      const geo = await geoRes.json();
      meta.ip = geo.ip || "Unknown";
      meta.country = geo.country_name || "Unknown";
      meta.region = geo.region || "Unknown";
      meta.city = geo.city || "Unknown";
    }
  } catch (err) {
    console.warn("Failed to fetch visitor IP/Geo metadata:", err);
  }

  // Parse User-Agent for Browser & Device
  const ua = navigator.userAgent;

  // OS Detection
  let os = "Unknown OS";
  if (/windows/i.test(ua)) os = "Windows";
  else if (/macintosh|mac os x/i.test(ua)) os = "macOS";
  else if (/android/i.test(ua)) os = "Android";
  else if (/iphone|ipad|ipod/i.test(ua)) os = "iOS";
  else if (/linux/i.test(ua)) os = "Linux";

  // Device type detection
  if (/mobile/i.test(ua)) meta.device = `Mobile Phone (${os})`;
  else if (/tablet|ipad/i.test(ua)) meta.device = `Tablet (${os})`;
  else meta.device = `Desktop Computer (${os})`;

  // Browser detection
  if (/chrome|crios/i.test(ua) && !/edge|edg/i.test(ua) && !/opr/i.test(ua)) {
    meta.browser = "Google Chrome";
  } else if (/safari/i.test(ua) && !/chrome|crios/i.test(ua)) {
    meta.browser = "Apple Safari";
  } else if (/firefox|fxios/i.test(ua)) {
    meta.browser = "Mozilla Firefox";
  } else if (/edge|edg/i.test(ua)) {
    meta.browser = "Microsoft Edge";
  } else if (/opr/i.test(ua)) {
    meta.browser = "Opera";
  }

  // Add screen resolution to device info
  meta.device += ` — ${window.screen.width}x${window.screen.height}`;

  return meta;
}
