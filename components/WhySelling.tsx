"use client";

import { useRef } from "react";
import { useInView } from "@/hooks/useInView";

export default function WhySelling() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, 0.1);

  return (
    <section
      ref={ref}
      id="pourquoi-vendre"
      className="section-padding bg-warm-100"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div
          className={`text-center mb-14 transition-all duration-700 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex justify-center mb-4">
            <div className="gold-divider" />
          </div>
          <h2 className="section-title">
            Pourquoi le centre est-il{" "}
            <span className="text-gold-500">à vendre ?</span>
          </h2>
        </div>

        {/* Bloc premium unique */}
        <div
          className={`mx-auto rounded-2xl bg-white border border-warm-300 shadow-sm px-7 py-9 md:px-12 md:py-12 transition-all duration-700 delay-200 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ maxWidth: "900px" }}
        >
          <div className="space-y-5 text-navy-600 text-base md:text-lg leading-relaxed text-left">
            <p>
              Neuro Forma est né d&apos;une conviction simple : les entreprises
              et les professionnels auront besoin de lieux capables de réunir
              formation, innovation,{" "}
              <strong className="font-semibold text-navy-900">
                intelligence artificielle et performance humaine
              </strong>
              .
            </p>
            <p>
              Le fondateur a consacré plusieurs années à identifier, aménager
              et structurer ce site de 193&nbsp;m² afin d&apos;en faire un
              environnement immédiatement exploitable.
            </p>
            <p>
              Aujourd&apos;hui, il a choisi de transmettre ce lieu pour
              rejoindre sa famille déjà installée en{" "}
              <strong className="font-semibold text-navy-900">
                Amérique du Sud
              </strong>{" "}
              et participer à un{" "}
              <strong className="font-semibold text-navy-900">
                projet de développement durable
              </strong>{" "}
              aligné avec ses convictions personnelles.
            </p>
            <p>
              L&apos;acquéreur bénéficie ainsi d&apos;un{" "}
              <strong className="font-semibold text-navy-900">
                actif déjà aménagé
              </strong>
              ,{" "}
              <strong className="font-semibold text-navy-900">
                accessible PMR
              </strong>
              , stratégiquement situé à{" "}
              <strong className="font-semibold text-navy-900">
                proximité d&apos;Agroparc
              </strong>{" "}
              et prêt à accueillir des activités de formation, de conseil,
              d&apos;innovation, de santé ou de bien-être.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
