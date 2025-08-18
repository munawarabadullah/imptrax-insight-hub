// Supabase Keep-Alive script (Node.js / ESM)
// Uses Node 20+ native fetch and repository secrets.

const { SUPABASE_URL, SUPABASE_API_KEY } = process.env;

(async () => {
  try {
    if (!SUPABASE_URL || !SUPABASE_API_KEY) {
      throw new Error("Missing SUPABASE_URL or SUPABASE_API_KEY environment variables");
    }

    const url = `${SUPABASE_URL.replace(/\/$/, "")}/rest/v1/keep_alive?select=id`;

    const response = await fetch(url, {
      method: "GET",
      headers: {
        apikey: SUPABASE_API_KEY,
        Authorization: `Bearer ${SUPABASE_API_KEY}`,
      },
    });

    console.log(`Status: ${response.status}`);

    if (!response.ok) {
      const body = await response.text().catch(() => "<no body>");
      throw new Error(`Request failed: ${response.status} ${body}`);
    }

    console.log("✅ Supabase ping successful");
  } catch (error) {
    console.error("❌ Error:", error?.message || error);
    process.exit(1);
  }
})();