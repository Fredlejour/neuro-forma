import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

const GA_MEASUREMENT_ID = "G-YGP1Z9PRPV";

export const metadata: Metadata = {
  title: "Neuro Forma — Formation IA & Prévention Cognitive à vendre",
  description:
    "Achetez les murs et les équipements de ce centre de formation IA et prévention cognitive. 193 m² aménagés, immédiatement exploitables à Avignon-Montfavet.",
  keywords:
    "Neuro Forma, centre de formation IA, prévention cognitive, formation intelligence artificielle, immobilier professionnel Avignon, local commercial Montfavet, Avignon-Montfavet, AI Act formation",
  openGraph: {
    title: "Neuro Forma — Formation IA & Prévention Cognitive à vendre",
    description:
      "Achetez les murs et équipements de ce centre de formation IA. 193 m² aménagés, immédiatement exploitables à Avignon-Montfavet.",
    url: "https://neuro-forma.vercel.app",
    siteName: "Neuro Forma",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "/images/og-neuro-forma.webp",
        width: 1200,
        height: 630,
        alt: "Neuro Forma — Centre de Formation IA & Prévention Cognitive à Avignon-Montfavet",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Neuro Forma — Formation IA & Prévention Cognitive à vendre",
    description:
      "Achetez les murs et équipements de ce centre de formation IA. 193 m² aménagés, immédiatement exploitables à Avignon-Montfavet.",
    images: ["/images/og-neuro-forma.webp"],
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: "S7ZRsc_rOWU3SkM_VmcxTfq6ri-gylArkquqgjoYIJg",
  },
  alternates: {
    canonical: "https://neuro-forma.vercel.app",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "RealEstateListing",
  name: "Neuro Forma — Centre de Formation IA & Prévention Cognitive",
  description:
    "Achetez les murs et les équipements de ce centre de formation IA et prévention cognitive de 193 m² à Avignon-Montfavet. Espaces aménagés, immédiatement exploitables.",
  url: "https://neuro-forma.vercel.app",
  image: "/images/entree.webp",
  address: {
    "@type": "PostalAddress",
    streetAddress: "203 avenue de la Croix-Rouge",
    addressLocality: "Avignon",
    addressRegion: "Provence-Alpes-Côte d'Azur",
    postalCode: "84140",
    addressCountry: "FR",
  },
  floorSize: {
    "@type": "QuantitativeValue",
    value: 193,
    unitCode: "MTK",
  },
  offers: {
    "@type": "Offer",
    priceCurrency: "EUR",
    price: "300000",
    availability: "https://schema.org/InStock",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased" suppressHydrationWarning>
        {children}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
          `}
        </Script>
      </body>
    </html>
  );
}
