"use client";

import { useRef } from "react";
import { useInView } from "@/hooks/useInView";
import { Cpu, Leaf, Shield, TrendingUp, Sparkles, Landmark } from "lucide-react";

const pillars = [
  {
    icon: Cpu,
    title: "Former",
    color: "from-navy-700 to-navy-600",
    borderColor: "border-gold-500/30",
    items: [
      "IA générative et automatisations",
      "Salariés référents IA",
      "Ingénierie de prompts",
      "Audit des processus",
    ],
  },
  {
    icon: Leaf,
    title: "Régénérer",
    color: "from-gold-600 to-gold-500",
    borderColor: "border-gold-500/50",
    items: [
      "Neurosciences appliquées",
      "Récupération cognitive",
      "Réduction fatigue mentale",
      "Optimisation de l'attention",
    ],
  },
  {
    icon: Shield,
    title: "Ancrer",
    color: "from-navy-600 to-navy-500",
    borderColor: "border-gold-500/30",
    items: [
      "AI Act & conformité",
      "Éthique de l'IA",
      "Responsabilité numérique",
      "Gouvernance cognitive",
    ],
  },
];

const marketData = [
  {
    icon: TrendingUp,
    value: "Marché en essor",
    label: "Formation IA & performance cognitive",
  },
  {
    icon: Sparkles,
    value: "Offre premium",
    label: "Prestations à forte valeur ajoutée",
  },
  {
    icon: Landmark,
    value: "Soutien public",
    label: "Plan d'État « Osez l'IA »",
  },
];

export default function NeuroForma() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, 0.1);

  return (
    <section ref={ref} id="neuro-forma" className="section-padding bg-warm-100 relative overflow-hidden">
      {/* Subtle decorative element */}
      <div className="absolute top-0 right-0 w-1/3 h-full opacity-[0.03] pointer-events-none">
        <svg viewBox="0 0 400 800" fill="none" className="w-full h-full">
          <circle cx="300" cy="200" r="150" stroke="currentColor" strokeWidth="0.5" />
          <circle cx="300" cy="200" r="100" stroke="currentColor" strokeWidth="0.5" />
          <circle cx="300" cy="200" r="50" stroke="currentColor" strokeWidth="0.5" />
          <circle cx="200" cy="500" r="120" stroke="currentColor" strokeWidth="0.5" />
          <circle cx="200" cy="500" r="80" stroke="currentColor" strokeWidth="0.5" />
          <line x1="300" y1="200" x2="200" y2="500" stroke="currentColor" strokeWidth="0.5" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="section-title mb-5">
            <span className="text-gold-500">Former. Régénérer. Ancrer.</span>
            <br className="hidden md:block" />
            Le modèle Neuro Forma.
          </h2>
          <p className="section-subtitle mx-auto">
            Un concept exclusif qui transforme cet actif en centre de performance
            cognitive — le seul dans le Sud de la France.
          </p>
        </div>

        {/* 3 Pillars */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {pillars.map((pillar, i) => (
            <div
              key={i}
              className={`group relative bg-white rounded-xl border-2 ${pillar.borderColor} p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-700 ${
                inView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-12"
              }`}
              style={{ transitionDelay: `${(i + 1) * 200}ms` }}
            >
              {/* Icon header */}
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${pillar.color} flex items-center justify-center mb-6 shadow-lg`}>
                <pillar.icon size={24} className="text-white" />
              </div>

              <h3 className="font-serif text-2xl font-bold text-navy-800 mb-5">
                {pillar.title}
              </h3>

              <ul className="space-y-3">
                {pillar.items.map((item, j) => (
                  <li
                    key={j}
                    className="flex items-start gap-3 text-navy-300 text-sm"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-gold-500 mt-1.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Video section */}
        <div
          className={`mb-20 mt-4 transition-all duration-700 delay-400 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="text-center mb-10">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-0.5 bg-gold-500" />
            </div>
            <h3 className="font-serif text-2xl md:text-3xl lg:text-4xl font-semibold text-navy-800 mb-4">
              Comprendre Neuro Forma{" "}
              <span className="text-gold-500">en quelques minutes</span>
            </h3>
            <p className="text-navy-300 text-base max-w-2xl mx-auto leading-relaxed">
              Découvrez comment ce modèle unique associe intelligence artificielle,
              neurosciences et formation pour répondre aux enjeux cognitifs des
              entreprises.
            </p>
          </div>
          <div className="relative rounded-2xl overflow-hidden shadow-2xl ring-1 ring-black/5">
            <div className="aspect-video">
              <iframe
                src="https://www.youtube.com/embed/8QmJOlnQRLs"
                title="Neuro Forma — Comprendre le concept"
                className="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
              />
            </div>
          </div>
        </div>

        {/* Market data banner */}
        <div
          className={`bg-navy-800 rounded-2xl p-8 md:p-10 transition-all duration-700 delay-500 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="grid md:grid-cols-3 gap-8 md:gap-4">
            {marketData.map((d, i) => (
              <div key={i} className="text-center">
                <div className="w-10 h-10 mx-auto mb-3 rounded-lg bg-gold-500/10 flex items-center justify-center">
                  <d.icon size={20} className="text-gold-400" />
                </div>
                <div className="font-serif text-2xl md:text-3xl font-bold text-gold-400 mb-1">
                  {d.value}
                </div>
                <div className="text-white/50 text-xs tracking-wide uppercase">
                  {d.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
