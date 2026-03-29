import Tag from "../components/ui/tag/Tag";
import "./globals.css";
import CTA from "../components/ui/cta/Cta";
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
      <body className="design-system">
        <h1>h1</h1>
        <h2>h2</h2>
        <h3>h3</h3>
        <h4>h4</h4>
        <h5>h5</h5>
        <h6>h6</h6>
        <p className="h7">h7</p>
        <p className="h8">h8</p>
        <p className="body-xxl">body-xxl</p>
        <p className="body-xl">body-xl</p>
        <p className="body-l">body-l</p>
        <p className="body-m">body-m</p>
        <p className="body-s">body-s</p>
        <p className="body-xs">body-xs</p>
        <Tag color="green" size="small">Tag</Tag>
        <Tag color="blue" size="medium">Tag</Tag>
        <CTA color="white" size="xs" icon="cross">Call To action</CTA>
        <CTA color="white" size="s" icon="cross">Call To action</CTA>
        <CTA color="white" size="m" icon="cross">Call To action</CTA>
        <CTA color="black" size="xs" icon="cross">Call To action</CTA>
        <CTA color="black" size="s" icon="cross">Call To action</CTA>
        <CTA color="black" size="m" icon="cross">Call To action</CTA>
        <CTA color="light-grey" size="xs" icon="cross">Call To action</CTA>
        <CTA color="light-grey" size="s" icon="cross">Call To action</CTA>
        <CTA color="light-grey" size="m" icon="cross">Call To action</CTA>
        <CTA color="transparent" size="xs" icon="cross">Call To action</CTA>
        <CTA color="transparent" size="s" icon="cross">Call To action</CTA>
        <CTA color="transparent" size="m" icon="cross">Call To action</CTA>
      </body>
    </html>
  );
}
