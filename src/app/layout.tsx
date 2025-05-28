import type { Metadata } from "next";
import "./globals.css";
import { AuthProvider } from "../lib/auth-context";

export const metadata: Metadata = {
  title: "Nguyen Phi Huyen - Senior Associate | Oriental International Law Firm",
  description: "Professional portfolio of Nguyen Phi Huyen (阮 非 玄), Senior Associate at Oriental International Law Firm specializing in international law, academic translation, and legal services.",
  keywords: ["legal", "lawyer", "Oriental International Law Firm", "Vietnam", "international law", "senior associate", "legal services"],
  authors: [{ name: "Nguyen Phi Huyen" }],
  openGraph: {
    title: "Nguyen Phi Huyen - Senior Associate",
    description: "Professional portfolio of Nguyen Phi Huyen, Senior Associate at Oriental International Law Firm",
    type: "website",
    locale: "vi_VN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
