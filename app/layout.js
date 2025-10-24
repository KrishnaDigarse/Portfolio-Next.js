import "./globals.css";
import { Fira_Code } from "next/font/google";
import Footer from "./components/Footer";

const fira = Fira_Code({
  subsets: ["latin"],
  weight: ["400", "500", "700"], // include the weights you need
  display: "swap",
});

export const metadata = {
  title: "Krishna Digarse | Portfolio",
  description: "CSE undergraduate specializing in AI/ML and backend development.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={fira.className}>
      <body className="bg-black text-slate-100">{children}</body>
      <Footer />
    </html>
  );
}
