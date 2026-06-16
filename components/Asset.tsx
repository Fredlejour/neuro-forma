"use client";

import { useRef } from "react";
import { useInView } from "@/hooks/useInView";
import { ArrowRight } from "lucide-react";
import FloorPlan from "@/components/FloorPlan";

const spaces = [
  {
    name: "Académie IA Neuro Forma",
    subtitle: "Former • Transmettre • Monter en compétences",
    desc: "Espace dédié aux formations IA, ateliers, conférences et séminaires professionnels.",
    image: "/images/salle-reunion-2-4.webp",
    alt: "Académie IA Neuro Forma — salle de formation",
  },
  {
    name: "Salle de Régénération Cognitive & Neuro-Physiologique",
    subtitle: "Régénération • Récupération • Neuro-performance",
    desc: "Espace conçu pour la récupération mentale et physiologique, la gestion du stress et la performance durable.",
    image: "/images/bureau-5.webp",
    alt: "Salle de Régénération Cognitive & Neuro-Physiologique Neuro Forma",
  },
  {
    name: "Bureau IA Référent Entreprise",
    subtitle: "Conseil • Audit • Accompagnement",
    desc: "Accompagnement des dirigeants et équipes dans leur transformation IA et leur montée en compétences.",
    image: "/images/bureau-1.webp",
    alt: "Bureau IA Référent Entreprise Neuro Forma",
  },
  {
    name: "Laboratoire de Cognition Augmentée",
    subtitle: "Concentration • Créativité • Performance cognitive",
    desc: "Espace immersif dédié à l'optimisation cognitive, à l'attention et à la récupération mentale.",
    image: "/images/bureau-2-2.webp",
    alt: "Laboratoire de Cognition Augmentée Neuro Forma",
  },
  {
    name: "Centre de Démonstration IA & Neurotechnologies",
    subtitle: "Tester • Découvrir • Expérimenter",
    desc: "Présentation de technologies innovantes, outils IA, neurosciences appliquées et démonstrations professionnelles.",
    image: "/images/veranda.webp",
    alt: "Centre de Démonstration IA & Neurotechnologies Neuro Forma",
  },
  {
    name: "Hub de Performance Collective",
    subtitle: "Collaborer • Réfléchir • Décider",
    desc: "Lieu conçu pour les ateliers d'équipe, séminaires, intelligence collective et sessions de travail collaboratif.",
    image: "/images/salle-formation.webp",
    alt: "Hub de Performance Collective Neuro Forma",
  },
];

export default function Asset() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, 0.1);

  return (
    <section ref={ref} id="actif" className="section-padding bg-white">
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
            193&nbsp;m² pensés pour{" "}
            <span className="text-gold-500">la performance</span>
          </h2>
          <p className="section-subtitle mx-auto">
            6 espaces distincts, entièrement aménagés et équipés — prêts à
            être exploités.
          </p>
        </div>

        {/* Grid of 6 spaces */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 mb-10">
          {spaces.map((space, i) => (
            <div
              key={i}
              className={`group relative overflow-hidden rounded-lg cursor-pointer transition-all duration-700 ${
                inView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${i * 100 + 200}ms` }}
            >
              {/* Photo */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={space.image}
                  alt={space.alt}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent transition-opacity duration-500" />
                {/* Labels */}
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <div className="text-white font-serif text-sm md:text-base lg:text-lg font-semibold leading-snug mb-1">
                    {space.name}
                  </div>
                  <div className="text-gold-300 text-[10px] md:text-[11px] font-medium tracking-wide">
                    {space.subtitle}
                  </div>
                  <p className="text-white/75 text-xs leading-snug max-h-0 opacity-0 group-hover:max-h-40 group-hover:opacity-100 group-hover:mt-2.5 overflow-hidden transition-all duration-500">
                    {space.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Plan interactif — composant partagé (référence unique) */}
        <div
          className={`mb-10 transition-all duration-700 delay-700 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="text-center mb-6">
            <h3 className="font-serif text-xl md:text-2xl font-semibold text-navy-800 mb-2">
              Plan définitif des locaux
            </h3>
            <p className="text-navy-300 text-sm">
              Survolez ou cliquez sur les points pour découvrir chaque espace ·
              cliquez sur le plan pour l&apos;agrandir et zoomer
            </p>
          </div>

          <FloorPlan showStats showLegend />
        </div>

        {/* CTA */}
        <div className="text-center">
          <a href="#chiffres" className="btn-secondary group">
            Découvrir les chiffres clés
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
