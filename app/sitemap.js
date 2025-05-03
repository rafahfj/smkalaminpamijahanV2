// app/sitemap.js

export async function GET() {
  const baseUrl = "https://smkalaminpamijahan.vercel.app";

  const pages = [
    "", // beranda
    "pengajar",
    "jurusan",
    "galeri",
    "ekskul",
    "sejarah",
    "ppdb",
  ];

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${pages
    .map((page) => {
      return `
    <url>
      <loc>${baseUrl}/${page}</loc>
      <lastmod>${new Date().toISOString()}</lastmod>
    </url>`;
    })
    .join("")}
</urlset>`;

  return new Response(body, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
