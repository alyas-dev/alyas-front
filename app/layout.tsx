import Tag from "../components/ui/tag/Tag";
import "./global.css";
import CTA from "../components/ui/cta/Cta";
import Field from "../components/ui/field/Field";
import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"
  ),
  title: "alyas",
  description:
    "Votre solution de devis et facturation",
  icons: {
    icon: "/assets/images/Favicon.svg",
  },
  openGraph: {
    title: "alyas",
    description:
      "Votre solution de devis et facturation",
    url: "alyas.fr",
    siteName: "alyas",
    images: [
      {
        url: "/assets/images/OpenGraph.jpg",
        width: 1200,
        height: 631,
        alt: "alyas, votre solution de devis et facturation",
      },
    ],
    locale: "fr-FR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="global-layout">
        {children}
      </body>
    </html>
  );
}
