"use client";

import { useState } from "react";
import ProjectModal from "./ProjectModal";

export default function DataJobProject() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <a
        href="https://data-job-analysis.vercel.app/overview"
        target="_blank"
        rel="noopener noreferrer"
        className="group flex flex-col gap-10 md:flex-row"
      >
        {/* Image — gauche */}
        <div className="overflow-hidden rounded-[16px] md:w-1/2">
          <img
            src="/datajob_dashboard.png"
            alt="Dashboard emploi data France"
            className="h-full w-full scale-[1.03] object-cover transition-transform duration-300 group-hover:scale-[1.05]"
          />
        </div>

        {/* Contenu — droite */}
        <div className="flex flex-col justify-center md:w-1/2">
          <div className="mb-4 h-1 w-12 rounded-full bg-accent" />
          <h3 className="text-[20px] font-bold leading-tight">
            Le marché de la data en France ↗
          </h3>
          <p className="mt-4 text-[15px] leading-[1.7] text-text-secondary">
            Quels métiers recrutent le plus ? Quelles compétences font la différence ? Difficile d&apos;y voir clair quand les offres sont dispersées sur des dizaines de plateformes. Ce dashboard agrège et analyse des milliers d&apos;offres d&apos;emploi issues de LinkedIn, Indeed et France Travail pour répondre à ces questions en un coup d&apos;œil. Les données sont collectées automatiquement, nettoyées et normalisées via un pipeline dédié avant d&apos;alimenter les visualisations.
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            {["Python", "dbt", "Neon", "PostgreSQL", "Next.js"].map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-black/5 px-3 py-1 text-[12px] font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setIsModalOpen(true);
            }}
            className="mt-5 w-fit rounded-full border border-text px-5 py-2 text-[13px] font-medium text-text transition-colors hover:bg-text hover:text-white"
          >
            Plus d&apos;infos
          </button>
        </div>
      </a>

      <ProjectModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
