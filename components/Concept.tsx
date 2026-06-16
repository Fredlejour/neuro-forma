"use client";

import { useRef } from "react";
import { useInView } from "@/hooks/useInView";
import { Wrench, Users, Lightbulb, ArrowRight } from "lucide-react";

const pillars = [
  {
    icon: Wrench,
    title: "Un lieu transformé",
    image: "/images/salle-attente.webp",
    alt: "Espace d'attente biophilique Neuro-Campus",
    desc: "Conçu par un ingénieur passionné, chaque mètre carré a été repensé pour servir la santé, la formation et l'innovation.",
  },
  {
    icon: Users,
    title: "Un modèle validé",
    image: "/images/salle-formation.webp",
    alt: "Salle de formation Neuro-Campus en activité",
    desc: "L'association Neuro-Campus exploite déjà les lieux : praticiens, formations, locations d'espaces. Le modèle fonctionne.",
  },
  {
    icon: Lightbulb,
    title: "Une vision d'avenir",
    image: "/images/salle-reunion.webp",
    alt: "Salle de réunion design scandinave Neuro-Campus",
    desc: "Acquérir ce bien, c'est reprendre un concept clé en main ou le faire évoluer selon votre propre vision.",
  },
];

export default function Concept() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, 0.15);

  return (
    <section ref={ref} id="concept" className="section-padding bg-warm-100">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex justify-center mb-4">
            <div className="gold-divider" />
          </div>
          <h2 className="section-title mb-4">
            Neuro-Campus : quand l&apos;immobilier
            <br className="hidden md:block" />
            rencontre <span className="text-gold-500">l&apos;innovation santé</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Plus qu&apos;un local. Un écosystème conçu pour la performance humaine,
            la formation et le bien-être — déjà opérationnel.
          </p>
          <p className="text-sm text-navy-300/80 mt-4 max-w-2xl mx-auto">
            Au-delà de l&apos;immobilier, un scénario premium existe :{" "}
            <strong className="text-gold-600">Neuro Forma</strong> — un concept
            unique associant IA, neurosciences et formation, positionné sur des
            prestations premium à forte valeur ajoutée.
          </p>
        </div>

        {/* 3 Pillars */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {pillars.map((pillar, i) => (
            <div
              key={i}
              className={`group relative overflow-hidden rounded-lg transition-all duration-700 delay-${
                (i + 1) * 150
              } ${
                inView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-12"
              }`}
              style={{ transitionDelay: `${(i + 1) * 150}ms` }}
            >
              {/* Photo */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={pillar.image}
                  alt={pillar.alt}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute top-4 left-4 w-10 h-10 bg-white/10 backdrop-blur rounded-sm flex items-center justify-center">
                  <pillar.icon size={20} className="text-white" />
                </div>
              </div>
              {/* Content */}
              <div className="bg-white p-6">
                <h3 className="font-serif text-xl font-semibold text-navy-800 mb-3">
                  {pillar.title}
                </h3>
                <p className="text-navy-300 text-sm leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div
          className={`text-center transition-all duration-700 delay-700 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <a href="#scenarios" className="btn-ghost group">
            Explorer les scénarios d&apos;exploitation
            <ArrowRight
              size={16}
              className="transition-transform group-hover:translate-x-1"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
