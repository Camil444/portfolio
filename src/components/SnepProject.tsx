"use client";

import { useState } from "react";
import SnepModal from "./SnepModal";

export default function SnepProject() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <a
        href="https://vizdashboard.vercel.app"
        target="_blank"
        rel="noopener noreferrer"
        className="group flex flex-col-reverse gap-10 md:flex-row"
      >
        {/* Contenu — gauche, aligné à droite */}
        <div className="flex flex-col justify-center md:w-1/2 md:items-end md:text-right">
          <div className="mb-4 h-1 w-12 rounded-full bg-accent" />
          <h3 className="text-[20px] font-bold leading-tight">
            Les compositeurs dans le Top 200 SNEP ↗
          </h3>
          <p className="mt-4 text-[15px] leading-[1.7] text-text-secondary">
            Outil conçu pour un A&R (chasseur de talents en maison de disque) qui avait besoin de visualiser rapidement la présence des compositeurs dans les classements Top 200 et Top 50 SNEP. Une donnée absente des plateformes comme Spotify for Artists et globalement difficile d&apos;accès dans l&apos;industrie musicale. Cette application comble ce manque en rendant la data compositeur lisible et exploitable en quelques clics.
          </p>
          <div className="mt-5 flex flex-wrap gap-2 md:justify-end">
            {["Python", "Next.js", "PostgreSQL", "Neon", "Vercel"].map((tag) => (
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

        {/* Image — droite */}
        <div className="overflow-hidden rounded-[16px] md:w-1/2">
          <img
            src="/dashboard_example.png"
            alt="Dashboard Top 200 SNEP"
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
          />
        </div>
      </a>

      <SnepModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
