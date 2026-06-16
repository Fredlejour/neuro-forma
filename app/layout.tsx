import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title:
    "Neuro-Campus Avignon — 193 m² à vendre | Centre formation, santé & coworking",
  description:
    "Actif immobilier premium de 193 m² à Avignon-Montfavet. 6 espaces aménagés, exploitation immédiate, concept Neuro-Campus éprouvé. Formation IA, neurosciences, santé. Moins de 300 000 €. Visite virtuelle disponible.",
  keywords:
    "immobilier professionnel Avignon, local commercial Montfavet, investissement immobilier, centre de formation IA, espace santé bien-être, coworking Avignon, Neuro-Campus, neurosciences, AI Act formation",
  openGraph: {
    title: "Neuro-Campus Avignon — Un actif rare. Plusieurs futurs possibles.",
    description:
      "193 m² opérationnels à Avignon-Montfavet. Centre de formation, espace santé, coworking ou Neuro-Campus. 6 espaces aménagés, exploitation dès le 1er jour. Moins de 300 000 €.",
    url: "https://neuro-campus.fr",
    siteName: "Neuro-Campus Avignon",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "/images/entree.webp",
        width: 1200,
        height: 630,
        alt: "Neuro-Campus Avignon — 193 m² d'opportunité immobilière premium",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Neuro-Campus Avignon — Un actif rare. Plusieurs futurs possibles.",
    description:
      "193 m² opérationnels à Avignon-Montfavet. Exploitation immédiate. Moins de 300 000 €.",
    images: ["/images/entree.webp"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://neuro-campus.fr",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "RealEstateListing",
  name: "Neuro-Campus Avignon — 193 m² professionnel",
  description:
    "Actif immobilier premium de 193 m² à Avignon-Montfavet. 6 espaces aménagés, concept Neuro-Campus éprouvé, exploitation immédiate.",
  url: "https://neuro-campus.fr",
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
    <html lang="fr">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
