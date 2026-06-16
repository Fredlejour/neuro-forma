"use client";

import { useRef } from "react";
import { useInView } from "@/hooks/useInView";
import { FileText, CheckCircle2, User } from "lucide-react";

const metrics = [
  { value: "193 m²", label: "Centre immédiatement exploitable" },
  { value: "ERP / PMR", label: "Infrastructure conforme et accessible" },
  { value: "21 praticiens", label: "Capacité d'exploitation déjà démontrée" },
  { value: "1,5 km", label: "Distance d'Agroparc" },
  { value: "600+ entreprises", label: "À proximité immédiate" },
  { value: "0 jour", label: "Démarrage immédiat" },
];

const conditions = [
  "un marché en croissance,",
  "un emplacement stratégique,",
  "une infrastructure immédiatement opérationnelle.",
];

export default function KeyFigures() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, 0.2);

  return (
    <section
      ref={ref}
      id="chiffres"
      className="section-padding bg-navy-800 text-white relative overflow-hidden"
    >
      {/* Background texture — mur végétal */}
      <div className="absolute inset-0">
        <img
          src="/images/mur-vegetal.webp"
          alt=""
          loading="lazy"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-navy-800/90" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex justify-center mb-4">
            <div className="w-16 h-0.5 bg-gold-500" />
          </div>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-white leading-tight mb-4">
            Un centre <span className="text-gold-400">déjà opérationnel</span>
          </h2>
          <p className="text-lg md:text-xl text-white/50 max-w-3xl mx-auto">
            193 m² déjà aménagés pour former, accompagner et démontrer les
            usages de l&apos;intelligence artificielle en entreprise.
          </p>
        </div>

        {/* Metrics grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-14">
          {metrics.map((m, i) => (
            <div
              key={i}
              className={`text-center p-6 lg:p-8 rounded-lg border border-white/10 bg-white/[0.03] transition-all duration-700 ${
                inView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${i * 100 + 300}ms` }}
            >
              <div className="font-serif text-2xl lg:text-3xl font-bold text-gold-400 mb-2 leading-tight">
                {m.value}
              </div>
              <div className="text-white/70 text-sm leading-snug">
                {m.label}
              </div>
            </div>
          ))}
        </div>

        {/* Bloc de conclusion */}
        <div
          className={`max-w-3xl mx-auto mb-12 rounded-2xl border border-white/10 bg-white/[0.05] px-7 py-9 md:px-10 md:py-10 transition-all duration-700 delay-700 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h3 className="font-serif text-2xl md:text-3xl font-semibold text-white text-center mb-5">
            Prêt à être exploité dès aujourd&apos;hui
          </h3>
          <p className="text-white/70 text-center text-base md:text-lg mb-6">
            Neuro Forma réunit déjà trois conditions essentielles au
            développement d&apos;une activité :
          </p>
          <ul className="space-y-3 max-w-md mx-auto">
            {conditions.map((c, i) => (
              <li key={i} className="flex items-center gap-3">
                <CheckCircle2
                  size={20}
                  className="text-gold-400 flex-shrink-0"
                />
                <span className="text-white/85 text-base">{c}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* CTA */}
        <div
          className={`text-center transition-all duration-700 delay-1000 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex flex-col sm:flex-row items-center sm:items-start justify-center gap-4">
            <a href="#contact-form" className="btn-primary text-base">
              <FileText size={18} />
              Recevoir le dossier de présentation complet
            </a>
            <div className="flex flex-col items-center gap-1.5">
              <a
                href="#contact-frederic"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white/40 text-white font-semibold text-sm tracking-wide uppercase rounded-sm hover:bg-white/10 transition-all duration-300"
              >
                <User size={18} />
                Contacter Frédéric Lejour
              </a>
              <span className="text-white/50 text-xs">
                Chargé de la commercialisation des locaux Neuro Forma
              </span>
            </div>
          </div>
          <p className="text-white/30 text-xs mt-6">
            Présentation détaillée des espaces et de leurs usages. Informations
            non contractuelles.
          </p>
        </div>
      </div>
    </section>
  );
}
