"use client";

import { useEffect, useState } from "react";
import { FileText, Calendar, Building2, Euro, LayoutGrid, TrendingUp, CheckCircle2 } from "lucide-react";

export default function Hero() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 200);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/entree.webp"
          alt="Neuro-Campus Avignon — Hall d'entrée biophilique"
          className="w-full h-full object-cover object-center"
          fetchPriority="high"
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-navy-900/85 via-navy-800/75 to-navy-700/65" />
        {/* Bottom gradient reinforcement */}
        <div className="absolute inset-0 bg-gradient-to-t from-navy-900/90 via-transparent to-navy-900/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-20 pt-32 pb-20">
        <div className="max-w-4xl">
          {/* Eyebrow */}
          <div
            className={`flex items-center gap-3 mb-6 transition-all duration-700 delay-300 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <div className="gold-divider" />
            <span className="text-gold-400 text-xs font-semibold tracking-[0.25em] uppercase">
              Centre de Formation IA & Performance Cognitive à vendre ·
              Avignon-Montfavet
            </span>
          </div>

          {/* Title */}
          <h1
            className={`font-serif text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-white leading-[1.05] tracking-tight mb-3 transition-all duration-700 delay-400 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            NEURO <span className="text-gold-400">FORMA</span>
          </h1>

          {/* Accroche acquisition */}
          <p
            className={`font-serif text-lg md:text-xl lg:text-2xl font-semibold text-gold-400 leading-snug mb-5 transition-all duration-700 delay-[450ms] ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Centre de Formation IA &amp; Performance Cognitive à vendre
          </p>

          {/* Sous-titre principal */}
          <p
            className={`font-serif text-xl md:text-2xl lg:text-3xl text-white/90 max-w-3xl mb-3 leading-snug transition-all duration-700 delay-500 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Le premier Centre de Formation dédié à l&apos;IA et à la{" "}
            <span className="text-gold-400">Prévention Cognitive</span>
          </p>

          {/* Réassurance actif */}
          <p
            className={`flex items-center gap-2 text-white/60 text-sm md:text-base font-medium tracking-wide mb-9 transition-all duration-700 delay-[550ms] ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <CheckCircle2 size={16} className="text-gold-500/70 flex-shrink-0" />
            <span>
              <strong className="text-white/80 font-semibold">
                193&nbsp;m²
              </strong>{" "}
              déjà aménagés et immédiatement exploitables
            </span>
          </p>

          {/* Texte */}
          <p
            className={`text-base md:text-lg text-white/70 max-w-2xl mb-10 leading-relaxed transition-all duration-700 delay-[600ms] ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Achetez les murs et les équipements de ce centre aménagé,
            immédiatement exploitable, conçu pour répondre aux nouveaux besoins
            des entreprises face à l&apos;intelligence artificielle, au cœur
            d&apos;Avignon-Montfavet.
          </p>

          {/* CTAs */}
          <div
            className={`flex flex-col sm:flex-row gap-4 mb-16 transition-all duration-700 delay-600 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <a href="#contact-form" className="btn-primary text-base">
              <FileText size={18} />
              Recevoir le dossier d&apos;acquisition
            </a>
            <a
              href="#contact-form"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white/30 text-white font-semibold text-sm tracking-wide uppercase rounded-sm hover:bg-white/10 transition-all duration-300"
            >
              <Calendar size={18} />
              Planifier une visite
            </a>
          </div>
        </div>

        {/* Metrics bar */}
        <div
          className={`transition-all duration-700 delay-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6 max-w-4xl">
            {[
              { icon: Building2, value: "193 m²", label: "Surface totale" },
              { icon: Euro, value: "< 300 000 €", label: "Prix de vente Murs et équipements" },
              { icon: LayoutGrid, value: "6 espaces", label: "Aménagés & équipés" },
              { icon: TrendingUp, value: "Jour 1", label: "Exploitation immédiate" },
            ].map((m, i) => (
              <div
                key={i}
                className="bg-white/[0.07] backdrop-blur-sm border border-white/10 rounded-sm px-5 py-4"
              >
                <m.icon size={18} className="text-gold-400 mb-2" />
                <div className="text-white font-serif text-xl font-semibold">
                  {m.value}
                </div>
                <div className="text-white/50 text-xs tracking-wide uppercase mt-0.5">
                  {m.label}
                </div>
              </div>
            ))}
          </div>

          {/* Micro-reassurance */}
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 mt-8 text-white/40 text-xs tracking-wide">
            {[
              "Bien en activité",
              "Visite virtuelle disponible",
              "Dossier technique complet",
            ].map((text, i) => (
              <span key={i} className="flex items-center gap-1.5">
                <CheckCircle2 size={12} className="text-gold-500/60" />
                {text}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="w-5 h-9 border-2 border-white/20 rounded-full flex items-start justify-center p-1.5">
          <div className="w-1 h-2 bg-gold-400 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}
