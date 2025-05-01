import "@/styles/globals.css";
import Navbar from "@/components/navbar";
import StoreProvider from "./StoreProvider";
import LoadingWraper from "./LoadingWraper";
export const metadata = {
  title: "SMK Al Amin Pamijahan",
  description: "created by rafahfj",
};

export default function LayoutPage({ children }) {
  return (
    <StoreProvider>
      <html lang="en" className="scroll-smooth">
        <body className="pt-16">
          <LoadingWraper>
            <Navbar />
            {children}
          </LoadingWraper>
        </body>
      </html>
    </StoreProvider>
  );
}
