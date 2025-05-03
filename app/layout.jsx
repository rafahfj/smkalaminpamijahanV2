import "@/styles/globals.css";
import Navbar from "@/components/navbar";
import LoadingWraper from "../components/LoadingWraper";
import Footer from "@/components/Footer";

// app/layout.js

export const metadata = {
  title: {
    default: "SMK Al Amin Pamijahan",
    template: "%s | SMK Al Amin Pamijahan",
  },
  description:
    "Website resmi SMK Al Amin Pamijahan. Temukan informasi lengkap seputar jurusan, pendaftaran PPDB, tenaga pengajar, ekstrakurikuler, dan kegiatan sekolah lainnya.",
  keywords: [
    "SMK Al Amin",
    "Pamijahan",
    "Sekolah Menengah Kejuruan",
    "PPDB 2025",
    "Sekolah Islam",
    "Sekolah Bogor",
    "Jurusan SMK",
    "Teknik Komputer",
    "Multimedia",
  ],
  authors: [{ name: "rafahfj", url: "https://rafahfajrijuwaeni.vercel.app" }],
  creator: "rafahfj",
  publisher: "SMK Al Amin Pamijahan",
  robots: "index, follow",
  openGraph: {
    title: "SMK Al Amin Pamijahan",
    description:
      "Gabung bersama kami di SMK Al Amin Pamijahan. Sekolah Islam berbasis teknologi dan akhlak mulia.",
    url: "https://smkalaminpamijahan.vercel.app",
    siteName: "SMK Al Amin Pamijahan",
    images: [
      {
        url: "https://smkalaminpamijahan.vercel.app/assets/logo/logo-sec.png", // ganti dengan URL thumbnail og-mu
        width: 1200,
        height: 630,
        alt: "SMK Al Amin Pamijahan",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SMK Al Amin Pamijahan",
    description:
      "Website resmi SMK Al Amin Pamijahan. Informasi lengkap jurusan, guru, dan pendaftaran.",
    images: ["https://smkalaminpamijahan.vercel.app/asset/logo/logo-sec.png"],
    creator: "@SmkAlAminBogor", // jika punya akun Twitter
  },

  // Metadata lainnya ...
  verification: {
    google: "da4ESJ0nUVSozsWN7334N5ZijTOEeQuP8Iw7qI4PMyE",
  },
};

export default function LayoutPage({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="pt-16 transition-all duration-300">
        <LoadingWraper time={3000}>
          <Navbar />
          {children}
          <Footer />
        </LoadingWraper>
      </body>
    </html>
  );
}
