export interface VisitorMetadata {
  visitor_ip: string;
  visitor_country: string;
  visitor_region: string;
  visitor_isp: string;
  visitor_device: string;
  visitor_browser: string;
  visitor_os: string;
  visitor_screen: string;
  visitor_referrer: string;
  submission_time: string;
}

export async function getVisitorMetadata(): Promise<VisitorMetadata> {
  const defaultMeta: VisitorMetadata = {
    visitor_ip: "Unknown",
    visitor_country: "Unknown",
    visitor_region: "Unknown",
    visitor_isp: "Unknown",
    visitor_device: "Desktop",
    visitor_browser: "Unknown Browser",
    visitor_os: "Unknown OS",
    visitor_screen: "Unknown",
    visitor_referrer: "Direct Link",
    submission_time: new Date().toLocaleString(),
  };

  if (typeof window === "undefined") return defaultMeta;

  try {
    // 1. Fetch Geolocation Data using a secure client API
    const geoRes = await fetch("https://ipapi.co/json/");
    if (geoRes.ok) {
      const geo = await geoRes.json();
      defaultMeta.visitor_ip = geo.ip || "Unknown";
      defaultMeta.visitor_country = geo.country_name || "Unknown";
      defaultMeta.visitor_region = `${geo.city || ""}, ${geo.region || ""}`.trim() || "Unknown";
      defaultMeta.visitor_isp = geo.org || "Unknown";
    }
  } catch (err) {
    console.warn("Failed to fetch visitor IP/Geo metadata:", err);
  }

  // 2. Parse User-Agent for Browser, OS & Device
  const ua = navigator.userAgent;
  
  // OS Detection
  if (/windows/i.test(ua)) defaultMeta.visitor_os = "Windows";
  else if (/macintosh|mac os x/i.test(ua)) defaultMeta.visitor_os = "macOS";
  else if (/android/i.test(ua)) defaultMeta.visitor_os = "Android";
  else if (/iphone|ipad|ipod/i.test(ua)) defaultMeta.visitor_os = "iOS";
  else if (/linux/i.test(ua)) defaultMeta.visitor_os = "Linux";

  // Device type detection
  if (/mobile/i.test(ua)) defaultMeta.visitor_device = "Mobile Phone";
  else if (/tablet|ipad/i.test(ua)) defaultMeta.visitor_device = "Tablet";
  else defaultMeta.visitor_device = "Desktop Computer";

  // Browser detection
  if (/chrome|crios/i.test(ua) && !/edge|edg/i.test(ua) && !/opr/i.test(ua)) {
    defaultMeta.visitor_browser = "Google Chrome";
  } else if (/safari/i.test(ua) && !/chrome|crios/i.test(ua)) {
    defaultMeta.visitor_browser = "Apple Safari";
  } else if (/firefox|fxios/i.test(ua)) {
    defaultMeta.visitor_browser = "Mozilla Firefox";
  } else if (/edge|edg/i.test(ua)) {
    defaultMeta.visitor_browser = "Microsoft Edge";
  } else if (/opr/i.test(ua)) {
    defaultMeta.visitor_browser = "Opera";
  }

  // 3. Capture Screen Resolution
  defaultMeta.visitor_screen = `${window.screen.width}x${window.screen.height}`;

  // 4. Capture Referrer
  defaultMeta.visitor_referrer = document.referrer || "Direct Visit";

  return defaultMeta;
}
