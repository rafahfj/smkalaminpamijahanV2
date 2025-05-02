import "@/styles/globals.css";
import Navbar from "@/components/navbar";
import LoadingWraper from "../components/LoadingWraper";
import Footer from "@/components/Footer";

export const metadata = {
  title: "SMK Al Amin Pamijahan",
  description: "created by rafahfj",
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
