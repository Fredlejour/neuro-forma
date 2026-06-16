"use client";

import { useRef } from "react";
import { useInView } from "@/hooks/useInView";
import {
  Briefcase,
  GraduationCap,
  ShieldCheck,
  Rocket,
  Mic,
  Brain,
  Microscope,
  type LucideIcon,
} from "lucide-react";

type Offer = { label: string; price: string };
type Category = { icon: LucideIcon; title: string; offers: Offer[] };

const categories: Category[] = [
  {
    icon: GraduationCap,
    title: "Formation IA en entreprise",
    offers: [
      { label: "Atelier 1/2 journée", price: "800 € à 2 000 €" },
      { label: "Journée de formation", price: "1 500 € à 4 000 €" },
      { label: "Formation certifiante", price: "3 000 € à 15 000 €" },
    ],
  },
  {
    icon: ShieldCheck,
    title: "IA Act & Gouvernance",
    offers: [
      { label: "Audit de conformité", price: "2 000 € à 10 000 €" },
      { label: "Accompagnement complet", price: "5 000 € à 30 000 €" },
    ],
  },
  {
    icon: Rocket,
    title: "Conseil & Transformation IA",
    offers: [
      { label: "Diagnostic IA PME", price: "1 500 € à 5 000 €" },
      { label: "Mission de transformation", price: "5 000 € à 50 000 €+" },
    ],
  },
  {
    icon: Mic,
    title: "Conférences & Séminaires",
    offers: [
      { label: "Conférence entreprise", price: "1 000 € à 5 000 €" },
      { label: "Journée séminaire", price: "3 000 € à 15 000 €" },
    ],
  },
  {
    icon: Brain,
    title: "Performance cognitive",
    offers: [
      { label: "Atelier collectif", price: "500 € à 2 000 €" },
      { label: "Programme entreprise", price: "2 000 € à 20 000 €" },
    ],
  },
  {
    icon: Microscope,
    title: "Centre de démonstration IA",
    offers: [
      { label: "Journée découverte", price: "500 € à 3 000 €" },
      { label: "Parcours immersion innovation", price: "2 000 € à 10 000 €" },
    ],
  },
];

export default function PricingExamples() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, 0.1);

  return (
    <section ref={ref} id="prestations" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div
          className={`text-center mb-14 transition-all duration-700 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex justify-center mb-5">
            <div className="w-14 h-14 rounded-2xl bg-gold-500/10 border border-gold-500/20 flex items-center justify-center">
              <Briefcase size={26} className="text-gold-500" />
            </div>
          </div>
          <h2 className="section-title mb-5">
            Exemples de prestations et{" "}
            <span className="text-gold-500">niveaux de facturation</span>{" "}
            observés
          </h2>
          <div className="max-w-3xl mx-auto space-y-3 text-navy-300 text-base md:text-lg leading-relaxed">
            <p>
              Les exemples ci-dessous sont donnés à titre indicatif et
              illustrent les niveaux de facturation généralement observés sur le
              marché de la formation, du conseil, de l&apos;intelligence
              artificielle et de la performance cognitive.
            </p>
            <p className="text-navy-400 text-sm md:text-base italic">
              Ils ne constituent ni une promesse de revenus, ni une prévision
              d&apos;exploitation.
            </p>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {categories.map((cat, i) => (
            <div
              key={i}
              className={`group h-full flex flex-col rounded-2xl bg-white border border-warm-300 shadow-sm p-7 lg:p-8 transition-all duration-700 hover:shadow-lg hover:border-gold-500/30 hover:-translate-y-1 ${
                inView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${i * 100 + 200}ms` }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gold-500/10 border border-gold-500/20 flex items-center justify-center flex-shrink-0 transition-colors group-hover:bg-gold-500/15">
                  <cat.icon size={22} className="text-gold-500" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-navy-800 leading-tight">
                  {cat.title}
                </h3>
              </div>
              <ul className="space-y-3 mt-auto">
                {cat.offers.map((o, j) => (
                  <li
                    key={j}
                    className="flex items-baseline justify-between gap-4 border-t border-warm-200 pt-3 first:border-t-0 first:pt-0"
                  >
                    <span className="text-navy-600 text-sm md:text-[15px] leading-snug">
                      {o.label}
                    </span>
                    <span className="text-gold-600 font-semibold text-sm md:text-[15px] whitespace-nowrap">
                      {o.price}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
