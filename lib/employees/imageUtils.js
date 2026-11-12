// Client-safe helpers for employee cards (no server-only imports here).

// Remote images (Cloudinary or a pasted URL) are already optimised by Cloudinary,
// so they bypass the Next.js optimiser. Local /public images are optimised.
export const isRemoteImage = (url) => /^https?:\/\//i.test(url || "");

// "Aarav Shah" -> "AS"
export const getInitials = (name) =>
  (name || "")
    .trim()
    .split(/\s+/)
    .map((w) => w.charAt(0))
    .join("")
    .slice(0, 3)
    .toUpperCase();
