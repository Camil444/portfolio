import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CV — Camil Hennebert",
};

const experiences = [
  {
    period: "09/2024 – 12/2025",
    role: "Data Analyst",
    company: "MAIF",
    location: "Niort, France",
    details: [
      "Conception et déploiement de l'ensemble des solutions analytiques du service : structuration des flux de données, processus ETL et création de 5 tableaux de bord interactifs.",
      "Automatisation de tâches métiers (Python, Excel) générant jusqu'à 80 % de gains de productivité.",
      "Analyses de performance : impact inter-services, profils comportementaux, aide à la décision.",
      "Industrialisation du dispositif de pilotage pour une autonomie complète du service.",
    ],
  },
  {
    period: "01/2024 – 08/2024",
    role: "Conseiller Client",
    company: "BNP Paribas Banque en ligne",
    location: "Lille, France",
    details: [
      "Gestion confidentielle de dossiers clients à profil sensible (personnalités politiques, publiques).",
      "Application stricte des procédures de conformité RGPD et garantie du secret bancaire.",
    ],
  },
  {
    period: "08/2022 – 09/2023",
    role: "Vendeur",
    company: "FNAC",
    location: "Lille, France",
    details: [
      "Identification des besoins clients et vente de solutions audio.",
      "Maximisation du panier moyen : jusqu'à 60 % de ventes additionnelles, 3ᵉ meilleur vendeur du magasin.",
    ],
  },
];

const formations = [
  {
    period: "09/2024 – 12/2025",
    title: "Développeur en Intelligence Artificielle",
    school: "IRONHACK",
    location: "Paris, France",
    description:
      "Expertise opérationnelle en analyse de données (Python, MySQL, Excel). Préparation à la certification RNCP37827BC01.",
  },
  {
    period: "09/2018 – 07/2020",
    title: "DUT Techniques de Commercialisation",
    school: "Université Polytechnique des Hauts-de-France",
    location: "Cambrai, France",
    description:
      "Analyse des performances web, leviers d'acquisition digitaux (SEO/SEA), stratégies marketing et gestion de projets.",
  },
];

export default function CVPage() {
  return (
    <section className="mx-auto max-w-5xl px-6 pt-20 pb-24 md:px-12">
      <h1 className="text-[36px] font-bold">CV</h1>
      <p className="mt-2 text-[15px] text-text-secondary">
        Expériences professionnelles et formations
      </p>

      {/* Expériences */}
      <div className="mt-14">
        <p className="mb-6 text-[13px] font-medium uppercase tracking-[2px] text-[#888]">
          Expériences professionnelles
        </p>
        <div className="flex flex-col gap-10">
          {experiences.map((exp) => (
            <div
              key={exp.period + exp.company}
              className="border-l-[3px] border-accent pl-6"
            >
              <p className="text-[13px] font-medium text-text-secondary">
                {exp.period}
              </p>
              <h3 className="mt-1 text-[17px] font-bold">
                {exp.role}{" "}
                <span className="font-normal text-text-secondary">
                  | {exp.company} · {exp.location}
                </span>
              </h3>
              <ul className="mt-3 flex flex-col gap-2">
                {exp.details.map((detail, i) => (
                  <li
                    key={i}
                    className="text-[14px] leading-relaxed text-text-secondary"
                  >
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Formation */}
      <div className="mt-16">
        <p className="mb-6 text-[13px] font-medium uppercase tracking-[2px] text-[#888]">
          Formation
        </p>
        <div className="flex flex-col gap-10">
          {formations.map((f) => (
            <div
              key={f.period + f.school}
              className="border-l-[3px] border-accent pl-6"
            >
              <p className="text-[13px] font-medium text-text-secondary">
                {f.period}
              </p>
              <h3 className="mt-1 text-[17px] font-bold">
                {f.title}{" "}
                <span className="font-normal text-text-secondary">
                  | {f.school} · {f.location}
                </span>
              </h3>
              <p className="mt-3 text-[14px] leading-relaxed text-text-secondary">
                {f.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
