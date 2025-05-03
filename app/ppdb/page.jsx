import LoadingWraper from "@/components/LoadingWraper";
import { sosmed } from "../data";

export const metadata = {
  title: "PPDB - SMK Al Amin Pamijahan",
  description:
    "Informasi lengkap Penerimaan Peserta Didik Baru (PPDB) SMK Al Amin Pamijahan.",
};

export default function PPDB() {
  return (
    <div>
      <LoadingWraper time={1000}>
        <main>
          <div className="space-y-7 bg-primary p-6 md:p-10">
            {/* Judul */}
            <h1 className="font-bold text-3xl text-center">
              Penerimaan Peserta Didik Baru (PPDB) SMK Al-Amin 2025/2026
            </h1>

            {/* Brosur */}
            <div className="text-center">
              <h2 className="mb-4 font-semibold text-xl">Brosur PPDB</h2>
              <img
                src="/assets/photos/brosur1.webp"
                alt="Brosur PPDB SMK Al-Amin"
                className="shadow-md mx-auto rounded-lg max-w-full"
              />
            </div>

            {/* Link Pendaftaran */}
            <div className="text-center">
              <h2 className="mb-4 font-semibold text-xl">Link Pendaftaran</h2>
              <a
                href="https://forms.gle/contoh-link-ppdb"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-accent hover:bg-green-700 shadow-md px-6 py-3 rounded-lg text-white transition"
              >
                Daftar Sekarang
              </a>
            </div>
          </div>

          {/* Kontak */}
          <div className="relative">
            <svg
              viewBox="0 0 1440 200"
              xmlns="http://www.w3.org/2000/svg"
              className="drop-shadow-standard w-full"
              preserveAspectRatio="none"
            >
              <path
                d="M0,80 C360,160 1080,0 1440,80 L1440,200 L0,200 Z"
                fill="#5db996"
              />
            </svg>
            <div className="-top-1 relative md:flex gap-5 bg-third -mb-16 px-4 pb-20">
              <div className="flex-1/2">
                <h2 className="mb-4 font-semibold text-xl text-center">
                  Kontak Informasi
                </h2>
                <div className="bg-gray-100 shadow-md mx-auto mb-16 p-6 rounded-lg max-w-3xl text-center">
                  <p>
                    <strong>Alamat:</strong> Jl. Thamrin No. 1, Desa Cibening
                    Kecamatan Pamijahan Kabupaten Bogor
                  </p>

                  <p>
                    <strong>WhatsApp:</strong>{" "}
                    <a
                      href="https://wa.me/6285691962354"
                      className="text-blue-600"
                    >
                      0856-9196-2354
                    </a>
                  </p>
                  <div className="flex justify-center gap-5">
                    {sosmed.map((sosmed) => {
                      return (
                        <a
                          href={sosmed.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600"
                          key={sosmed.alt}
                        >
                          <img
                            src={sosmed.logo}
                            className="w-10"
                            alt={sosmed.alt}
                            title={sosmed.alt}
                          />
                        </a>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="flex-1/2">
                <h2 className="mb-4 font-semibold text-xl text-center">
                  Lokasi Sekolah
                </h2>
                <div className="shadow-md mx-auto rounded-lg max-w-3xl overflow-hidden">
                  <iframe
                    title="Lokasi SMK Al-Amin"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d428.07538451309233!2d106.67192188026331!3d-6.634766941117376!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69d081a1b52263%3A0x36891f5e6b6b1207!2sSMK%20AL%20AMIN!5e0!3m2!1sid!2sid!4v1746168560704!5m2!1sid!2sid"
                    width="100%"
                    height="400"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </main>
      </LoadingWraper>
    </div>
  );
}
