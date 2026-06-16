"use client";

import { useRef } from "react";
import { useInView } from "@/hooks/useInView";
import { Building2, PieChart, Scale, Check, type LucideIcon } from "lucide-react";

type Mode = {
  icon: LucideIcon;
  badge: string;
  title: string;
  items: string[];
};

const modes: Mode[] = [
  {
    icon: Building2,
    badge: "Acquisition des murs",
    title: "Financement immobilier classique",
    items: [
      "Achat direct du bien immobilier",
      "Financement bancaire immobilier traditionnel",
      "Frais de notaire applicables",
      "Structure libre (personne physique, SCI, société)",
      "Solution simple et connue des banques",
    ],
  },
  {
    icon: PieChart,
    badge: "Acquisition des parts de SCI",
    title: "Reprise de la Société Civile Immobilière (SCI) propriétaire",
    items: [
      "Acquisition des parts de la SCI propriétaire",
      "Reprise du financement existant sous réserve d'accord bancaire",
      "Frais juridiques généralement inférieurs aux frais de notaire",
      "Reprise de l'historique comptable de la société",
      "Potentiel d'optimisation fiscale à étudier avec les conseils de l'acquéreur",
      "Possibilité de conserver la structure déjà en place",
    ],
  },
];

export default function AcquisitionModes() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, 0.1);

  return (
    <section
      ref={ref}
      id="acquisition"
      className="section-padding bg-warm-50"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div
          className={`text-center mb-14 transition-all duration-700 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex justify-center mb-5">
            <div className="w-12 h-0.5 bg-gold-500" />
          </div>
          <h2 className="section-title mb-5">
            Deux modes d&apos;acquisition{" "}
            <span className="text-gold-500">possibles</span>
          </h2>
          <p className="max-w-3xl mx-auto text-navy-300 text-base md:text-lg leading-relaxed">
            Choisissez la stratégie d&apos;acquisition la plus adaptée à votre
            situation patrimoniale, fiscale et financière.
          </p>
        </div>

        {/* Cartes comparatives */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 mb-12">
          {modes.map((mode, i) => (
            <div
              key={i}
              className={`group h-full flex flex-col rounded-2xl bg-white border border-warm-300 shadow-sm p-7 lg:p-9 transition-all duration-700 hover:shadow-lg hover:border-gold-500/30 hover:-translate-y-1 ${
                inView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${i * 150 + 200}ms` }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gold-500/10 border border-gold-500/20 flex items-center justify-center flex-shrink-0 transition-colors group-hover:bg-gold-500/15">
                  <mode.icon size={24} className="text-gold-500" />
                </div>
                <div>
                  <span className="block text-xs font-semibold uppercase tracking-wide text-gold-600 mb-1">
                    {mode.badge}
                  </span>
                  <h3 className="font-serif text-xl md:text-2xl font-semibold text-navy-800 leading-tight">
                    {mode.title}
                  </h3>
                </div>
              </div>
              <ul className="space-y-3 mt-auto">
                {mode.items.map((item, j) => (
                  <li key={j} className="flex items-start gap-3">
                    <Check
                      size={18}
                      className="text-gold-500 mt-1 flex-shrink-0"
                    />
                    <span className="text-navy-600 text-sm md:text-[15px] leading-snug">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bloc central de synthèse */}
        <div
          className={`max-w-3xl mx-auto rounded-2xl bg-navy-800 text-white shadow-xl px-7 py-9 md:px-10 md:py-10 transition-all duration-700 delay-500 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex items-center gap-3 mb-5">
            <div className="w-11 h-11 rounded-xl bg-gold-500/15 border border-gold-500/30 flex items-center justify-center flex-shrink-0">
              <Scale size={22} className="text-gold-400" />
            </div>
            <h3 className="font-serif text-2xl font-semibold text-white">
              Avantages fiscaux et financiers potentiels
            </h3>
          </div>
          <p className="text-white/70 text-base md:text-lg leading-relaxed">
            Selon le mode d&apos;acquisition retenu, l&apos;acquéreur peut
            bénéficier d&apos;avantages financiers significatifs.
            L&apos;acquisition des parts de la SCI peut notamment permettre de
            réduire certains coûts de transaction et de reprendre une structure
            déjà opérationnelle. Cette option doit toutefois être analysée avec
            un avocat et un expert-comptable afin de valider sa pertinence au
            regard de la situation de chaque acquéreur.
          </p>
        </div>
      </div>
    </section>
  );
}
