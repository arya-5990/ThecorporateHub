import { createClient as createSupabaseClient } from "@supabase/supabase-js";

// Anon client: RLS ("Public read active employees") only exposes rows with is_active = true.
function getPublicSupabaseClient() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL?.startsWith("http")
    ? process.env.NEXT_PUBLIC_SUPABASE_URL
    : "https://placeholder.supabase.co";
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "placeholder-key";
  return createSupabaseClient(supabaseUrl, supabaseKey, {
    auth: { persistSession: false, autoRefreshToken: false },
  });
}

const CLOUD_NAME = (process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME || "").trim();

// Cloudinary delivery URL: resized, auto-format (WebP/AVIF), face-centred.
// Built from the stored public_id when the cloud name is configured,
// otherwise falls back to the image_url saved by the admin panel.
function getPhotoUrl(row, width = 600, height = 460) {
  const transform = `f_auto,q_auto,c_fill,g_face,w_${width},h_${height}`;

  if (row.image_public_id && CLOUD_NAME) {
    return `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/${transform}/${row.image_public_id}`;
  }

  const url = row.image_url || "";
  if (url.includes("res.cloudinary.com") && url.includes("/image/upload/")) {
    return url.replace("/image/upload/", `/image/upload/${transform}/`);
  }
  return url; // local /public image or pasted URL
}

// DB row (snake_case) -> UI object
const fromRow = (row) => ({
  id: row.id,
  name: row.name,
  designation: row.designation,
  experience: row.experience || "",
  description: row.description || "",
  responsibilities: Array.isArray(row.responsibilities) ? row.responsibilities : [],
  image: getPhotoUrl(row),
});

/**
 * Visible employees ("Our Team" cards) managed from the admin panel, in admin sort order.
 * Never throws: returns [] on failure so the page still renders.
 */
export async function getEmployees() {
  try {
    const supabase = getPublicSupabaseClient();
    const { data, error } = await supabase
      .from("employees")
      .select("id, name, designation, experience, description, responsibilities, image_url, image_public_id")
      .eq("is_active", true)
      .order("sort_order", { ascending: true })
      .order("created_at", { ascending: true });

    if (error) throw error;
    return (data || []).map(fromRow);
  } catch (err) {
    console.error("[getEmployees] Could not load employees:", err?.message || err);
    return [];
  }
}
