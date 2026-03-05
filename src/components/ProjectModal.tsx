"use client";

import { useEffect } from "react";

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ProjectModal({ isOpen, onClose }: ProjectModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative mx-4 max-h-[85vh] w-full max-w-3xl overflow-y-auto rounded-[20px] bg-white p-8 shadow-2xl md:p-12"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full text-[20px] text-text-secondary transition-colors hover:bg-black/10"
        >
          ✕
        </button>

        {/* Header */}
        <h2 className="pr-10 text-[24px] font-bold leading-tight">
          Data Job France
        </h2>
        <p className="mt-1 text-[15px] text-text-secondary">
          Analyse du marché de l&apos;emploi data en France
        </p>

        <hr className="my-6 border-border" />

        {/* Le problème */}
        <h3 className="text-[18px] font-bold">Le problème</h3>
        <p className="mt-3 text-[15px] leading-[1.7] text-text-secondary">
          Quels métiers data recrutent le plus en France ? Quelles compétences font vraiment la différence sur le marché ? Quel salaire viser selon son profil ?
        </p>
        <p className="mt-3 text-[15px] leading-[1.7] text-text-secondary">
          Ces questions, tout professionnel de la data se les pose, mais les réponses sont éclatées sur des dizaines de plateformes, noyées dans des milliers d&apos;offres aux formats tous différents. Impossible d&apos;avoir une vision claire sans un vrai travail de collecte et de normalisation.
        </p>
        <p className="mt-3 text-[15px] leading-[1.7] text-text-secondary">
          Ce projet y répond en construisant <strong>un pipeline de données complet</strong>, de l&apos;extraction à la visualisation, qui agrège et analyse automatiquement les offres d&apos;emploi data en France.
        </p>

        <hr className="my-6 border-border" />

        {/* Stack technique */}
        <h3 className="text-[18px] font-bold">Stack technique &amp; choix</h3>

        <h4 className="mt-5 text-[16px] font-bold">Python, le socle du pipeline</h4>
        <p className="mt-2 text-[15px] leading-[1.7] text-text-secondary">
          Python est le langage sur lequel je suis le plus à l&apos;aise. Je connais son écosystème, ses limites, et surtout ses possibilités pour ce type de projet : scraping, manipulation de données, connexion aux APIs et aux bases. C&apos;était le choix naturel pour toute la partie extraction et chargement.
        </p>

        <h4 className="mt-5 text-[16px] font-bold">dbt, transformation et modélisation</h4>
        <p className="mt-2 text-[15px] leading-[1.7] text-text-secondary">
          J&apos;ai choisi dbt pour la couche transformation, d&apos;abord parce que c&apos;est un outil qui s&apos;est imposé comme un standard dans les équipes data modernes. Mais aussi parce que je voulais aller au-delà d&apos;un simple usage théorique : le manipuler sur un cas d&apos;utilisation réel, avec de vraies problématiques de nettoyage, de déduplication et de modélisation. Le projet m&apos;a permis de mettre en place un star schema complet (table de faits, dimensions, bridge table) entièrement géré par dbt, avec seeds, tests et documentation.
        </p>

        <h4 className="mt-5 text-[16px] font-bold">Neon PostgreSQL, la base serverless</h4>
        <p className="mt-2 text-[15px] leading-[1.7] text-text-secondary">
          Neon offre une instance PostgreSQL serverless gratuite, idéale pour un projet personnel : pas de serveur à gérer, connexion simple, et compatible nativement avec dbt-postgres. Le choix s&apos;est fait naturellement.
        </p>

        <h4 className="mt-5 text-[16px] font-bold">GitHub Actions, orchestration</h4>
        <p className="mt-2 text-[15px] leading-[1.7] text-text-secondary">
          Le pipeline s&apos;exécute automatiquement via un cron GitHub Actions. Pas besoin d&apos;un orchestrateur dédié (Airflow, Prefect…) pour un projet de cette envergure. GitHub Actions fait le travail proprement, gratuitement, et c&apos;est déjà intégré au repo.
        </p>

        <hr className="my-6 border-border" />

        {/* Sources */}
        <h3 className="text-[18px] font-bold">Sources de données</h3>

        <h4 className="mt-5 text-[16px] font-bold">JobSpy (LinkedIn + Indeed)</h4>
        <p className="mt-2 text-[15px] leading-[1.7] text-text-secondary">
          Scraper LinkedIn et Indeed directement, c&apos;est s&apos;exposer à des blocages quasi systématiques. Les alternatives comme les APIs Apify sont souvent peu fiables et rapidement coûteuses pour le service rendu. <strong>python-jobspy</strong> résout ce problème proprement : c&apos;est une librairie open source qui gère l&apos;extraction de ces deux plateformes sans friction, avec un format de sortie standardisé.
        </p>

        <h4 className="mt-5 text-[16px] font-bold">France Travail (API officielle)</h4>
        <p className="mt-2 text-[15px] leading-[1.7] text-text-secondary">
          France Travail s&apos;imposait comme source complémentaire pour plusieurs raisons : c&apos;est le site institutionnel du marché de l&apos;emploi français, le projet se concentre sur le marché FR, et l&apos;API est publique, bien documentée et simple à intégrer via OAuth2. Elle apporte un volume significatif (~500 offres/semaine sur les mots-clés data) et une typologie d&apos;offres différente des plateformes privées.
        </p>

        <hr className="my-6 border-border" />

        {/* Pipeline */}
        <h3 className="text-[18px] font-bold">Pipeline de données</h3>
        <p className="mt-3 text-[15px] leading-[1.7] text-text-secondary">
          Le pipeline suit une architecture <strong>ELT classique</strong> en quatre étapes :
        </p>

        <h4 className="mt-5 text-[16px] font-bold">1. Extraction</h4>
        <p className="mt-2 text-[15px] leading-[1.7] text-text-secondary">
          Un script Python orchestre la collecte depuis les trois sources. Pour chaque source, un extracteur dédié gère l&apos;authentification (OAuth2 pour France Travail) et la récupération des offres sur une liste de 10 mots-clés data. Les données brutes sont chargées dans des tables staging sur Neon, avec une déduplication à l&apos;insertion pour éviter les doublons entre runs.
        </p>

        <h4 className="mt-5 text-[16px] font-bold">2. Staging (dbt)</h4>
        <p className="mt-2 text-[15px] leading-[1.7] text-text-secondary">
          Les modèles staging nettoient chaque source indépendamment : uniformisation des formats de date, nettoyage des champs texte, premières normalisations. Une vue par source.
        </p>

        <h4 className="mt-5 text-[16px] font-bold">3. Intermediate (dbt)</h4>
        <p className="mt-2 text-[15px] leading-[1.7] text-text-secondary">
          C&apos;est ici que le gros du travail se fait. Les trois sources sont unifiées, puis enrichies : <strong>normalisation des titres</strong> (chaque offre est rattachée à l&apos;un des 10 métiers référencés via du pattern matching), <strong>détection des compétences</strong> (parsing des descriptions pour extraire 76 skills classés en 9 catégories), et <strong>enrichissement géographique</strong> (rattachement département/région).
        </p>

        <h4 className="mt-5 text-[16px] font-bold">4. Marts — Star Schema (dbt)</h4>
        <p className="mt-2 text-[15px] leading-[1.7] text-text-secondary">
          Les données transformées alimentent un <strong>star schema</strong> : <em>fact_jobs</em> (table de faits centrale), <em>dim_job_titles</em> (10 métiers normalisés en 4 familles), <em>dim_skills</em> (76 compétences en 9 catégories), et <em>bridge_job_skills</em> (relation N:N entre offres et compétences).
        </p>

        <hr className="my-6 border-border" />

        {/* Visualisation */}
        <h3 className="text-[18px] font-bold">Visualisation — pourquoi Next.js</h3>
        <p className="mt-3 text-[15px] leading-[1.7] text-text-secondary">
          <strong>Pourquoi pas Streamlit ?</strong> Streamlit est pratique pour du prototypage rapide, mais dès qu&apos;on veut un design soigné ou des interactions avancées, on se heurte vite à ses limites. La personnalisation est contrainte et le rendu reste très « outil interne ».
        </p>
        <p className="mt-3 text-[15px] leading-[1.7] text-text-secondary">
          <strong>Pourquoi pas Power BI ?</strong> Power BI est un excellent outil d&apos;entreprise, mais il masque tout le travail technique derrière une interface drag-and-drop. Dans un portfolio, je veux montrer que je sais construire une solution de bout en bout.
        </p>
        <p className="mt-3 text-[15px] leading-[1.7] text-text-secondary">
          <strong>Pourquoi Next.js ?</strong> Pour un jeu de données de cette taille, une web app légère est la solution optimale. Next.js permet un rendu rapide, un déploiement gratuit sur Vercel, un partage par simple lien, et une liberté totale sur le design. Le dashboard propose 4 vues thématiques avec des filtres globaux et des visualisations adaptées : treemap, heatmaps skills × expérience, comparatifs cloud providers, distribution des salaires.
        </p>

        <hr className="my-6 border-border" />

        {/* Ce que ça démontre */}
        <h3 className="text-[18px] font-bold">Ce que ce projet démontre</h3>
        <ul className="mt-3 flex flex-col gap-2 text-[15px] leading-[1.7] text-text-secondary">
          <li>Conception et implémentation d&apos;un <strong>pipeline de données end-to-end</strong></li>
          <li>Modélisation en <strong>star schema</strong> avec dbt (staging → intermediate → marts)</li>
          <li><strong>Collecte multi-sources</strong> avec gestion des API, scraping et déduplication</li>
          <li>Capacité à faire des <strong>choix techniques argumentés</strong> et adaptés au contexte</li>
          <li>Compétences <strong>full-stack data</strong> : de l&apos;extraction brute à la visualisation interactive</li>
        </ul>

        <hr className="my-6 border-border" />

        {/* Links */}
        <div className="flex flex-wrap gap-4">
          <a
            href="https://data-job-analysis.vercel.app/overview"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-[24px] bg-text px-6 py-3 text-[15px] font-medium text-white transition-opacity hover:opacity-80"
          >
            Voir le projet ↗
          </a>
          <a
            href="https://github.com/Camil444/data-job-analysis"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-[24px] border border-text px-6 py-3 text-[15px] font-medium text-text transition-colors hover:bg-text hover:text-white"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
            </svg>
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
}
