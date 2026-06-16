"use client";

import { useRef, useState } from "react";
import { useInView } from "@/hooks/useInView";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "Quel est le prix exact du bien ?",
    a: "Le prix est inférieur à 300 000 €. Le montant détaillé, les frais de notaire estimés et les conditions de vente sont disponibles dans le dossier investisseur.",
    cta: { label: "Recevoir le dossier", href: "#contact" },
  },
  {
    q: "Le bien est-il aux normes (ERP, accessibilité) ?",
    a: "Oui. Le bien respecte les réglementations en vigueur. L'ensemble des diagnostics et certifications est disponible dans la fiche technique complète.",
  },
  {
    q: "Peut-on visiter physiquement les locaux ?",
    a: "Absolument. Les visites se font sur rendez-vous. Vous pouvez réserver un créneau directement via notre formulaire de contact.",
    cta: { label: "Planifier une visite", href: "#contact" },
  },
  {
    q: "Y a-t-il des travaux à prévoir ?",
    a: "Le bien est entièrement aménagé et en activité. Un état des lieux technique détaillé est disponible sur demande, incluant l'historique complet des travaux réalisés.",
  },
  {
    q: "Le concept Neuro-Campus est-il transférable ?",
    a: "Oui. Le concept est entièrement documenté. Une période de transition accompagnée peut être envisagée pour assurer la continuité ou l'évolution du projet.",
  },
  {
    q: "Peut-on financer cet achat par emprunt ?",
    a: "Le bien est éligible au financement bancaire classique. Son caractère clé en main et son prix sous le marché facilitent le montage du dossier de financement. Étude disponible sur demande.",
  },
  {
    q: "Quel est le délai de disponibilité ?",
    a: "Le calendrier est à convenir ensemble. Une transition accompagnée est possible pour garantir une reprise fluide de l'activité.",
  },
  {
    q: "Quels sont les frais annexes ?",
    a: "Les estimations complètes (frais de notaire, charges courantes, taxe foncière) sont détaillées dans le dossier investisseur.",
    cta: { label: "Recevoir le dossier", href: "#contact" },
  },
  {
    q: "Qu'est-ce que Neuro Forma ?",
    a: "Neuro Forma est un concept exclusif de formation IA & neurosciences reposant sur 3 piliers : Former (IA générative, prompts, audit), Régénérer (récupération cognitive, neurosciences), Ancrer (AI Act, éthique, conformité). Ce modèle positionne l'actif sur des prestations premium à forte valeur ajoutée.",
    cta: { label: "En savoir plus", href: "#neuro-forma" },
  },
  {
    q: "L'AI Act impacte-t-il ce projet ?",
    a: "Oui. L'AI Act européen crée une obligation de formation et de conformité pour toutes les entreprises utilisant l'IA. Cela génère une forte demande de centres spécialisés. Le plan d'État « Osez l'IA » soutient directement ces formations, renforçant le potentiel du modèle.",
  },
];

export default function FAQ() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, 0.1);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section ref={ref} id="faq" className="section-padding bg-warm-100">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div
          className={`text-center mb-12 transition-all duration-700 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex justify-center mb-4">
            <div className="gold-divider" />
          </div>
          <h2 className="section-title mb-4">
            Vos questions,{" "}
            <span className="text-gold-500">nos réponses</span>
          </h2>
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`bg-white rounded-lg border border-warm-300 overflow-hidden transition-all duration-700 ${
                inView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: `${i * 80 + 200}ms` }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-warm-50 transition-colors"
              >
                <span className="font-medium text-navy-800 pr-4 text-sm lg:text-base">
                  {faq.q}
                </span>
                <ChevronDown
                  size={18}
                  className={`text-gold-500 shrink-0 transition-transform duration-300 ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`accordion-content ${
                  openIndex === i ? "open" : ""
                }`}
              >
                <div>
                  <div className="px-6 pb-5 border-t border-warm-200 pt-4">
                    <p className="text-navy-300 text-sm leading-relaxed">
                      {faq.a}
                    </p>
                    {faq.cta && (
                      <a
                        href={faq.cta.href}
                        className="inline-flex items-center gap-1 text-gold-500 text-sm font-semibold mt-3 hover:text-gold-600 transition-colors"
                      >
                        {faq.cta.label} →
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
