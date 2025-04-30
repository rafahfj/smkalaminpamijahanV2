import "@/styles/globals.css";
import Navbar from "@/components/navbar";

export const metadata = {
  title: "SMK Al Amin Pamijahan",
  description: "created by rafahfj",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="pt-16">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
