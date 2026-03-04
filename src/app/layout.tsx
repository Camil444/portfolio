import type { Metadata } from "next";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Camil Hennebert — Data Analyst",
  description:
    "Portfolio de Camil Hennebert — Data Analyst spécialisé en suivi d'activité, pilotage de performance et automatisation.",
  openGraph: {
    title: "Camil Hennebert — Data Analyst",
    description:
      "Je transforme vos données en décisions. Suivi d'activité, pilotage de performance, automatisation.",
    type: "website",
    locale: "fr_FR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className="antialiased">
        <NavBar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
