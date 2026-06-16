"use client";

import { useRef, useState, useEffect } from "react";
import { useInView } from "@/hooks/useInView";
import {
  Building2,
  X,
  ZoomIn,
  Boxes,
  Sparkles,
  LayoutGrid,
  Maximize,
  Armchair,
  Trees,
  Accessibility,
  GraduationCap,
  Activity,
  Zap,
  BookOpen,
  BrainCircuit,
  Users,
  MonitorPlay,
  Award,
  Network,
  Repeat,
  FileText,
  ArrowRight,
  User,
  type LucideIcon,
} from "lucide-react";
import FloorPlan from "@/components/FloorPlan";

const physicalAssets: { icon: LucideIcon; label: string }[] = [
  { icon: Maximize, label: "193 m² exploitables" },
  { icon: LayoutGrid, label: "12 espaces distincts" },
  { icon: Armchair, label: "Salles déjà aménagées" },
  { icon: Trees, label: "Patio extérieur" },
  { icon: Accessibility, label: "Accès public & PMR" },
  { icon: GraduationCap, label: "Formation, démo, détente & accompagnement" },
  { icon: Activity, label: "Équipements bio-régénération / neuro-performance" },
  { icon: Zap, label: "Infrastructure prête à l'usage" },
];

const intangibleAssets: { icon: LucideIcon; label: string }[] = [
  { icon: BookOpen, label: "Méthodes & programmes Neuro Forma" },
  { icon: BrainCircuit, label: "Positionnement IA & neurotechnologies" },
  { icon: Users, label: "Scénarios pédagogiques" },
  { icon: MonitorPlay, label: "Parcours de démonstration" },
  { icon: Award, label: "Marque & storytelling" },
  { icon: Network, label: "Réseau de formateurs / experts" },
  { icon: Repeat, label: "Modèle d'exploitation réplicable" },
];

const spaces: { name: string; fn: string; image: string }[] = [
  {
    name: "Académie IA Neuro Forma",
    fn: "Former • Transmettre",
    image: "/images/salle-reunion-2-4.webp",
  },
  {
    name: "Salle de Régénération Cognitive & Neuro-Physiologique",
    fn: "Régénération • Récupération",
    image: "/images/bureau-5.webp",
  },
  {
    name: "Bureau IA Référent Entreprise",
    fn: "Conseil • Accompagnement",
    image: "/images/bureau-1.webp",
  },
  {
    name: "Laboratoire de Cognition Augmentée",
    fn: "Concentration • Performance",
    image: "/images/bureau-2-2.webp",
  },
  {
    name: "Centre de Démonstration IA & Neurotechnologies",
    fn: "Tester • Découvrir",
    image: "/images/veranda.webp",
  },
  {
    name: "Hub de Performance Collective",
    fn: "Collaborer • Décider",
    image: "/images/salle-formation.webp",
  },
  {
    name: "Détente Café-Repas",
    fn: "Pause • Échanges • Convivialité",
    image: "/images/cafetaria.jpg",
  },
  {
    name: "Cabinet IA Act & Gouvernance",
    fn: "Conformité • Gouvernance",
    image: "/images/bureau-4-2.webp",
  },
  {
    name: "Patio Extérieur Sol Naturel",
    fn: "Décompression • Respiration • Nature",
    image: "/images/patio-jardin-2.jpg",
  },
  {
    name: "Cellule Audit & Transformation IA",
    fn: "Audit • Transformation",
    image: "/images/bureau-3.webp",
  },
  {
    name: "Centre d'Orientation Neuro Forma",
    fn: "Accueil • Orientation",
    image: "/images/entree.webp",
  },
  {
    name: "Espace Pré-Induction Cognitive",
    fn: "Transition • Préparation",
    image: "/images/salle-attente.webp",
  },
];

function BlockHeader({
  number,
  title,
  icon: Icon,
}: {
  number: string;
  title: string;
  icon: LucideIcon;
}) {
  return (
    <div className="flex items-center gap-4">
      <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-navy-800 text-gold-400 font-serif text-lg font-semibold flex-shrink-0">
        {number}
      </div>
      <div className="flex items-center gap-2.5">
        <Icon size={20} className="text-gold-500" />
        <h3 className="font-serif text-2xl md:text-3xl font-semibold text-navy-800">
          {title}
        </h3>
      </div>
    </div>
  );
}

export default function NeuroPlace() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, 0.1);
  const [lightbox, setLightbox] = useState<number | null>(null);

  useEffect(() => {
    if (lightbox === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(null);
    };
    window.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [lightbox]);

  return (
    <section
      ref={ref}
      id="actif"
      className="section-padding bg-white relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="inline-flex items-center gap-2 bg-navy-800/5 border border-navy-800/10 rounded-full px-4 py-1.5 mb-6">
            <span className="text-navy-800 text-xs font-semibold tracking-[0.2em] uppercase">
              Un actif complet
            </span>
          </div>
          <h2 className="section-title mb-5">
            Vous n&apos;achetez pas uniquement un lieu.
            <br className="hidden md:block" />
            Vous achetez une{" "}
            <span className="text-gold-500">vision exploitable</span>.
          </h2>
          <p className="section-subtitle mx-auto">
            193&nbsp;m² déjà configurés pour accueillir le modèle Neuro Forma
            dès le jour&nbsp;1.
          </p>
        </div>

        {/* Bloc 1 — Actif immobilier */}
        <div
          className={`mb-16 transition-all duration-700 delay-100 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex justify-center">
            <BlockHeader number="1" title="Actif immobilier" icon={Building2} />
          </div>

          {/* Plan — élément dominant, pleine largeur */}
          <div className="mt-10 max-w-5xl mx-auto">
            <FloorPlan
              showHotspots={false}
              enableZoom={false}
              showLegend={false}
              showStats={false}
              caption=""
            />
          </div>

          {/* Texte explicatif centré */}
          <p className="mt-10 max-w-3xl mx-auto text-center text-navy-700 text-xl md:text-2xl font-light leading-relaxed">
            Un plateau de{" "}
            <span className="text-navy-900 font-medium">193&nbsp;m²</span> déjà
            structuré, accessible PMR, ancien centre médical, immédiatement
            exploitable.
          </p>

          {/* 3 indicateurs clés centrés */}
          <div className="mt-10 max-w-xl mx-auto grid grid-cols-3 gap-4 md:gap-6">
            {[
              { icon: Maximize, value: "193 m²", label: "Surface" },
              { icon: LayoutGrid, value: "12", label: "Espaces" },
              { icon: Accessibility, value: "PMR", label: "Accessible" },
            ].map((s, i) => (
              <div
                key={i}
                className="rounded-xl bg-warm-100 border border-warm-200 px-4 py-5 text-center"
              >
                <s.icon size={22} className="text-gold-600 mx-auto mb-2" />
                <div className="font-serif text-lg font-semibold text-navy-800">
                  {s.value}
                </div>
                <div className="text-navy-300 text-xs">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Bloc 2 — 12 espaces prêts à exploiter */}
        <div
          className={`mb-20 transition-all duration-700 delay-200 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex justify-center">
            <BlockHeader
              number="2"
              title="12 espaces prêts à exploiter"
              icon={LayoutGrid}
            />
          </div>
          <p className="text-navy-300 text-base mt-4 mb-8 max-w-2xl mx-auto text-center">
            12 espaces distincts, entièrement aménagés et équipés — prêts à
            être exploités.
          </p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {spaces.map((space, i) => (
              <button
                type="button"
                key={i}
                onClick={() => setLightbox(i)}
                aria-label={`Agrandir ${space.name}`}
                className="group relative overflow-hidden rounded-xl aspect-[4/3] text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-500"
              >
                <img
                  src={space.image}
                  alt={`${space.name} — Neuro Forma`}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/15 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <ZoomIn size={15} className="text-white" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <div className="text-white font-serif text-sm md:text-base font-semibold leading-snug drop-shadow-md">
                    {space.name}
                  </div>
                  <div className="text-gold-300 text-[10px] md:text-[11px] font-medium tracking-wide mt-1">
                    {space.fn}
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Bloc 3 — Actifs physiques */}
        <div
          className={`mb-20 transition-all duration-700 delay-200 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex justify-center">
            <BlockHeader number="3" title="Actifs physiques" icon={Boxes} />
          </div>
          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            {physicalAssets.map((a, i) => (
              <div
                key={i}
                className="flex flex-col items-center text-center gap-3 p-5 rounded-xl bg-warm-50 border border-warm-200 hover:border-gold-500/30 transition-colors"
              >
                <div className="w-11 h-11 rounded-lg bg-gold-500/10 flex items-center justify-center flex-shrink-0">
                  <a.icon size={20} className="text-gold-600" />
                </div>
                <span className="text-navy-800 text-sm font-medium leading-snug">
                  {a.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Bloc 4 — Actifs immatériels */}
        <div
          className={`mb-12 transition-all duration-700 delay-300 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex justify-center">
            <BlockHeader
              number="4"
              title="Actifs immatériels"
              icon={Sparkles}
            />
          </div>
          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            {intangibleAssets.map((a, i) => (
              <div
                key={i}
                className="flex flex-col items-center text-center gap-3 p-5 rounded-xl bg-navy-800 hover:bg-navy-700 transition-colors"
              >
                <div className="w-11 h-11 rounded-lg bg-gold-500/15 flex items-center justify-center flex-shrink-0">
                  <a.icon size={20} className="text-gold-400" />
                </div>
                <span className="text-white/90 text-sm font-medium leading-snug">
                  {a.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div
          className={`flex flex-col sm:flex-row sm:flex-wrap items-center sm:items-start justify-center gap-4 transition-all duration-700 delay-300 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <a href="#contact-form" className="btn-primary">
            <FileText size={18} />
            Recevoir le dossier Neuro Forma
          </a>
          <a href="#chiffres" className="btn-secondary group">
            Découvrir les chiffres clés
            <ArrowRight
              size={16}
              className="transition-transform group-hover:translate-x-1"
            />
          </a>
          <div className="flex flex-col items-center gap-1.5">
            <a href="#contact-frederic" className="btn-secondary">
              <User size={18} />
              Contacter Frédéric Lejour
            </a>
            <span className="text-navy-300 text-xs">
              Chargé de la commercialisation des locaux Neuro Forma
            </span>
          </div>
        </div>
      </div>

      {/* Lightbox galerie des 12 espaces */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-[70] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 md:p-8"
          onClick={() => setLightbox(null)}
          role="dialog"
          aria-modal="true"
          aria-label={spaces[lightbox].name}
        >
          <button
            type="button"
            onClick={() => setLightbox(null)}
            className="absolute top-5 right-5 z-10 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
            aria-label="Fermer"
          >
            <X size={22} className="text-white" />
          </button>
          <div
            className="max-w-5xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={spaces[lightbox].image}
              alt={`${spaces[lightbox].name} — Neuro Forma`}
              className="w-full max-h-[78vh] object-contain rounded-lg shadow-2xl"
            />
            <div className="mt-5 text-center">
              <div className="text-white font-serif text-lg md:text-2xl font-semibold">
                {spaces[lightbox].name}
              </div>
              <div className="text-gold-300 text-sm md:text-base mt-1.5">
                {spaces[lightbox].fn}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
