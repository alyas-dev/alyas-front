import Tag from "../components/ui/tag/Tag";
import "./globals.css";
import CTA from "../components/ui/cta/Cta";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Next.js Starter Kit - Launch Your SAAS",
  description:
    "A modern, full-stack Next.js starter kit with authentication, payments, and dashboard. Built with TypeScript, Tailwind CSS, and shadcn/ui.",
  openGraph: {
    title: "Next.js Starter Kit",
    description:
      "A modern, full-stack Next.js starter kit with authentication, payments, and dashboard. Built with TypeScript, Tailwind CSS, and shadcn/ui.",
    url: "nextstarter.xyz",
    siteName: "Next.js Starter Kit",
    images: [
      {
        url: "https://jdj14ctwppwprnqu.public.blob.vercel-storage.com/nsk-w9fFwBBmLDLxrB896I4xqngTUEEovS.png",
        width: 1200,
        height: 630,
        alt: "Next.js Starter Kit",
      },
    ],
    locale: "en-US",
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
