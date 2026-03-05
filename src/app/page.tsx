import Image from "next/image";
import Marquee from "@/components/Marquee";

const skills = [
  { name: "Python", logo: "/logos/python.png" },
  { name: "SQL", logo: "/logos/postgree_sql.png" },
  { name: "Power BI", logo: "/logos/New_Power_BI_Logo.svg.png" },
  { name: "Excel", logo: "/logos/excel.png" },
  { name: "Spotfire", logo: "/logos/spotfire.png" },
  { name: "dbt", logo: "/logos/dbt.png" },
];


export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="mx-auto max-w-5xl px-6 pt-20 pb-32 md:px-12">
        <div className="flex flex-col items-start gap-10 md:flex-row md:items-center">
          <div className="relative h-40 w-40 shrink-0 overflow-hidden rounded-full md:h-52 md:w-52">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/photo_camil.png"
              alt="Camil Hennebert"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="flex-1">
            <div className="mb-2 flex items-center gap-2 text-[14px] text-text-secondary">
              <span
                className="inline-block h-2.5 w-2.5 rounded-full bg-green-500"
                style={{ animation: "pulse-dot 2s ease-in-out infinite" }}
              />
              Disponible pour de nouvelles opportunités
            </div>

            <h1 className="whitespace-nowrap uppercase text-[clamp(32px,5vw,58px)] font-[800] leading-[1.05] tracking-[-0.03em]">
              Camil Hennebert
            </h1>
            <p className="mt-1 text-[clamp(16px,2.5vw,22px)] font-bold uppercase tracking-[0.02em] text-text">
              Data Analyst
            </p>

            <p className="mt-3 text-[15px] leading-relaxed text-text-secondary">
              Personne ne devrait perdre sa matinée sur un reporting Excel.
              Je construis les outils qui libèrent vos équipes pour de bon.
            </p>

            <div className="mt-5 flex flex-wrap items-center gap-4">
              <a
                href="/about"
                className="inline-flex items-center rounded-[24px] bg-text px-6 py-3 text-[15px] font-medium text-white transition-opacity hover:opacity-90"
              >
                À propos
              </a>
              <a
                href="mailto:camilhennebertpro@gmail.com"
                className="inline-flex items-center rounded-[24px] border border-text px-6 py-3 text-[15px] font-medium text-text transition-colors hover:bg-text hover:text-white"
              >
                Contact
              </a>
              <a
                href="https://github.com/Camil444"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-text transition-colors hover:bg-text hover:text-white"
                aria-label="GitHub"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/camil-hennebert-1532661a9/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-text transition-colors hover:bg-text hover:text-white"
                aria-label="LinkedIn"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stack Technique */}
      <section className="w-full bg-white py-14">
        <Marquee skills={skills} />
      </section>

      {/* Derniers Travaux */}
      <section className="mx-auto max-w-5xl px-6 pt-20 pb-24 md:px-12">
        <h2 className="mb-12 text-[22px] font-bold">Derniers travaux</h2>

        <a
          href="https://french-top-charts-analytics-2wf17g1mu-camil444s-projects.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex flex-col gap-10 md:flex-row"
        >
          {/* Image */}
          <div className="overflow-hidden rounded-[16px] md:w-1/2">
            <img
              src="/dashboard_example.png"
              alt="Dashboard Top 200 SNEP"
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
            />
          </div>

          {/* Contenu */}
          <div className="flex flex-col justify-center md:w-1/2">
            <div className="mb-4 h-1 w-12 rounded-full bg-accent" />
            <h3 className="text-[20px] font-bold leading-tight">
              Les compositeurs dans le Top 200 SNEP ↗
            </h3>
            <p className="mt-4 text-[15px] leading-[1.7] text-text-secondary">
              Outil conçu pour un A&R (chasseur de talents en maison de disque) qui avait besoin de visualiser rapidement la présence des compositeurs dans les classements Top 200 et Top 50 SNEP. Une donnée absente des plateformes comme Spotify for Artists et globalement difficile d&apos;accès dans l&apos;industrie musicale. Cette application comble ce manque en rendant la data compositeur lisible et exploitable en quelques clics.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {["Python", "Next.js", "PostgreSQL", "Neon", "Vercel"].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-black/5 px-3 py-1 text-[12px] font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </a>
      </section>

      {/* Projet 2 — Data Job Analysis */}
      <section className="mx-auto max-w-5xl px-6 pb-24 md:px-12">
        <a
          href="https://data-job-analysis.vercel.app/overview"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex flex-col-reverse gap-10 md:flex-row"
        >
          {/* Contenu — gauche */}
          <div className="flex flex-col justify-center md:w-1/2">
            <div className="mb-4 h-1 w-12 rounded-full bg-accent" />
            <h3 className="text-[20px] font-bold leading-tight">
              Le marché de l&apos;emploi data en France ↗
            </h3>
            <p className="mt-4 text-[15px] leading-[1.7] text-text-secondary">
              Ce dashboard analyse le marché de l&apos;emploi data en France en collectant et croisant des milliers d&apos;offres provenant de plusieurs plateformes. Quels métiers sont les plus recherchés ? Quelles compétences sont les plus demandées ? Quel salaire attendre selon son profil ? Les données sont collectées automatiquement, nettoyées et normalisées par un pipeline avant d&apos;être affichées.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {["Python", "dbt", "Neon", "PostgreSQL", "Next.js", "Vercel"].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-black/5 px-3 py-1 text-[12px] font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Image — droite */}
          <div className="overflow-hidden rounded-[16px] md:w-1/2">
            <img
              src="/datajob_dashboard.png"
              alt="Dashboard emploi data France"
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
            />
          </div>
        </a>
      </section>
    </>
  );
}
