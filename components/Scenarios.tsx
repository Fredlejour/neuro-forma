"use client";

import { useRef } from "react";
import { useInView } from "@/hooks/useInView";
import {
  GraduationCap,
  HeartPulse,
  Network,
  Rocket,
  Puzzle,
  ArrowRight,
  Check,
  ShieldCheck,
  Repeat,
  Landmark,
  Layers,
} from "lucide-react";

const scenarios = [
  {
    icon: GraduationCap,
    title: "Centre de formation",
    desc: "Salles équipées, certifiables Qualiopi, capacité 12+ stagiaires.",
    model: "Récurrent · Finançable",
    funding: "OPCO · CPF · FNE · France 2030",
    benefits: [
      "Éligible aux dispositifs de financement de la formation",
      "Sessions inter & intra-entreprises",
      "Demande soutenue en montée en compétences IA",
    ],
    image: "/images/salle-formation.webp",
    alt: "Salle de formation professionnelle",
    accent: "text-gold-400",
  },
  {
    icon: HeartPulse,
    title: "Cabinet santé & bien-être",
    desc: "Espaces praticiens clé en main, en synergie avec le Neuro-Campus.",
    model: "Locatif · Récurrent",
    funding: "Baux professionnels",
    benefits: [
      "Espaces praticiens sécurisés par baux pro",
      "Patientèle mutualisée Neuro-Campus",
      "Demande locative professionnelle soutenue",
    ],
    image: "/images/bureau-3.webp",
    alt: "Cabinet de soins et bien-être",
    accent: "text-white",
  },
  {
    icon: Network,
    title: "Coworking thématique",
    desc: "15+ postes possibles sur un modèle d'abonnement récurrent.",
    model: "Abonnement · Récurrent",
    funding: "Abonnements professionnels",
    benefits: [
      "Modèle par abonnements récurrents",
      "Capacité 15+ postes à forte modularité",
      "Services additionnels valorisables",
    ],
    image: "/images/salle-reunion.webp",
    alt: "Espace coworking design",
    accent: "text-gold-400",
  },
  {
    icon: Rocket,
    title: "Siège social innovant",
    desc: "Positionnement santé-tech avec aides publiques mobilisables.",
    model: "Occupation propre · Image",
    funding: "Aides à l'implantation",
    benefits: [
      "Image santé-tech valorisante",
      "Aides à l'implantation mobilisables",
      "Maîtrise de ses charges d'occupation",
    ],
    image: "/images/bureau-1.webp",
    alt: "Bureau siège social",
    accent: "text-gold-300",
  },
  {
    icon: Puzzle,
    title: "Neuro Forma Premium",
    desc: "IA + Neurosciences + Formation, le modèle à plus forte valeur ajoutée.",
    model: "Premium · Forte valeur ajoutée",
    funding: "France 2030 · Plan « Osez l'IA »",
    benefits: [
      "Prestations premium à forte valeur ajoutée",
      "Adossé au Plan d'État « Osez l'IA »",
      "Positionnement premium rare",
    ],
    image: "/images/bureau-5.webp",
    alt: "Espace Neuro Forma — IA & Neurosciences",
    accent: "text-white",
    badge: "⭐ Scénario Premium",
  },
];

const businessPillars = [
  {
    icon: Repeat,
    title: "Modèles récurrents",
    desc: "Abonnements, baux & sessions de formation",
  },
  {
    icon: Landmark,
    title: "Sources de financement",
    desc: "OPCO, CPF, FNE, France 2030, « Osez l'IA »",
  },
  {
    icon: Layers,
    title: "Modèles cumulables",
    desc: "Plusieurs activités exploitables en parallèle",
  },
  {
    icon: ShieldCheck,
    title: "Actif clé en main",
    desc: "Espaces aménagés, exploitation immédiate",
  },
];

export default function Scenarios() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, 0.1);

  return (
    <section ref={ref} id="scenarios" className="section-padding bg-warm-100">
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
            5 façons de{" "}
            <span className="text-gold-500">rentabiliser cet actif</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Cinq modèles d&apos;exploitation activables — seuls ou combinés —
            pour valoriser pleinement les 193&nbsp;m².
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {scenarios.map((s, i) => (
            <div
              key={i}
              className={`group relative overflow-hidden rounded-lg transition-all duration-700 hover:shadow-2xl hover:-translate-y-1 ${
                i === 4 ? "sm:col-span-2 lg:col-span-1" : ""
              } ${
                inView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-12"
              }`}
              style={{ transitionDelay: `${i * 120 + 200}ms` }}
            >
              {/* Top image section */}
              <div className="relative h-44 overflow-hidden">
                <img
                  src={s.image}
                  alt={s.alt}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/90 via-navy-800/50 to-navy-800/20" />
                {/* Badge */}
                {"badge" in s && s.badge && (
                  <div className="absolute top-4 right-4 bg-gold-500/90 backdrop-blur-sm text-white text-[10px] font-bold tracking-wider uppercase px-3 py-1 rounded-full">
                    {s.badge}
                  </div>
                )}
                <div className="absolute bottom-0 left-0 right-0 px-6 pb-5">
                  <s.icon size={24} className={`${s.accent} mb-2`} />
                  <h3 className="font-serif text-xl font-semibold text-white mb-1">
                    {s.title}
                  </h3>
                  <p className="text-white/70 text-sm leading-relaxed line-clamp-2">
                    {s.desc}
                  </p>
                </div>
              </div>

              {/* Bottom section — modèle & avantages */}
              <div className="bg-white px-6 py-5 flex flex-col gap-4">
                {/* Modèle d'exploitation */}
                <div>
                  <div className="text-navy-300 text-[10px] font-semibold uppercase tracking-wider mb-1.5">
                    Modèle d&apos;exploitation
                  </div>
                  <span className="inline-flex items-center rounded-full bg-gold-500/10 border border-gold-500/20 px-3 py-1 text-[11px] font-semibold text-gold-700">
                    {s.model}
                  </span>
                </div>

                {/* Avantages */}
                <ul className="space-y-1.5 pt-1 border-t border-warm-200">
                  {s.benefits.map((b, j) => (
                    <li key={j} className="flex items-start gap-2">
                      <span className="mt-0.5 w-4 h-4 rounded-full bg-gold-500/10 flex items-center justify-center flex-shrink-0">
                        <Check size={11} className="text-gold-600" />
                      </span>
                      <span className="text-navy-600 text-xs leading-snug">
                        {b}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Sources de financement (sans chiffrage) */}
                <div className="flex items-start gap-2 pt-1 border-t border-warm-200">
                  <Landmark size={13} className="text-navy-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="block text-navy-300 text-[10px] font-semibold uppercase tracking-wider">
                      Financements possibles
                    </span>
                    <span className="block text-navy-600 text-xs leading-snug">
                      {s.funding}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Synthèse économique — piliers business */}
        <div
          className={`mb-12 transition-all duration-700 delay-500 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="bg-navy-800 rounded-2xl px-6 py-8 md:px-10 md:py-10">
            <div className="text-center mb-8">
              <h3 className="font-serif text-xl md:text-2xl font-semibold text-white mb-2">
                Un actif, plusieurs modèles d&apos;exploitation
              </h3>
              <p className="text-navy-100/70 text-sm max-w-2xl mx-auto">
                Ces scénarios ne s&apos;excluent pas : ils se combinent pour
                diversifier l&apos;exploitation, mutualiser les charges et
                optimiser l&apos;usage des 193&nbsp;m².
              </p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {businessPillars.map((p, i) => (
                <div
                  key={i}
                  className="bg-white/5 border border-white/10 rounded-xl p-5 text-center hover:bg-white/10 transition-colors"
                >
                  <div className="w-11 h-11 mx-auto mb-3 rounded-lg bg-gold-500/15 flex items-center justify-center">
                    <p.icon size={20} className="text-gold-400" />
                  </div>
                  <div className="font-serif text-base md:text-lg font-semibold text-white mb-1">
                    {p.title}
                  </div>
                  <div className="text-navy-100/60 text-xs leading-snug">
                    {p.desc}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div
          className={`text-center transition-all duration-700 delay-700 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <a href="#chiffres" className="btn-secondary group">
            Comparer tous les scénarios
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
