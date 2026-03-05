"use client";

import { useEffect } from "react";

interface SnepModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SnepModal({ isOpen, onClose }: SnepModalProps) {
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
          SNEP Top Charts Analytics
        </h2>
        <p className="mt-1 text-[15px] text-text-secondary">
          Les producteurs dans le Top 200 SNEP
        </p>

        <hr className="my-6 border-border" />

        {/* Le contexte */}
        <h3 className="text-[18px] font-bold">Le contexte</h3>
        <p className="mt-3 text-[15px] leading-[1.7] text-text-secondary">
          Un A&R en maison de disque chez Capitol avait un besoin très concret : pouvoir visualiser quels producteurs dominent les classements français, et surtout suivre la présence des talents qu&apos;il scoute dans le Top 50 et Top 200 du SNEP.
        </p>
        <p className="mt-3 text-[15px] leading-[1.7] text-text-secondary">
          Le problème, c&apos;est que cette donnée n&apos;existe nulle part sous une forme exploitable. Le SNEP publie les classements chaque semaine, mais sans les crédits de production. Spotify for Artists et les autres outils analytics de l&apos;industrie ne donnent pas accès à cette information non plus. C&apos;est une donnée pourtant essentielle pour un A&R dont le métier est justement d&apos;identifier les producteurs qui performent.
        </p>
        <p className="mt-3 text-[15px] leading-[1.7] text-text-secondary">
          Ce projet a été construit pour combler ce manque : un pipeline qui collecte, enrichit et expose ces données dans un dashboard pensé pour un usage métier réel.
        </p>

        <hr className="my-6 border-border" />

        {/* Sources de données */}
        <h3 className="text-[18px] font-bold">Sources de données et enrichissement</h3>

        <h4 className="mt-5 text-[16px] font-bold">SNEP, la base des classements</h4>
        <p className="mt-2 text-[15px] leading-[1.7] text-text-secondary">
          Tout part du site du SNEP, la référence officielle des classements musicaux en France. Un premier scraping massif a permis de récupérer l&apos;intégralité des données depuis 2020 (pas besoin de remonter plus loin pour le besoin). Ensuite, un second script tourne chaque semaine pour enrichir la base avec les nouvelles données dès que le SNEP met à jour son site.
        </p>

        <h4 className="mt-5 text-[16px] font-bold">Genius API, les crédits de production</h4>
        <p className="mt-2 text-[15px] leading-[1.7] text-text-secondary">
          Le site du SNEP donne les artistes et les titres, mais pas les producteurs. Pour récupérer ces crédits, j&apos;ai croisé les données avec l&apos;API de Genius, qui est l&apos;une des rares sources à exposer cette information. Les APIs des plateformes de streaming comme Spotify ne permettent tout simplement pas de récupérer les crédits de production, ce qui rendait Genius indispensable dans ce pipeline.
        </p>

        <hr className="my-6 border-border" />

        {/* Stack technique */}
        <h3 className="text-[18px] font-bold">Stack technique &amp; choix</h3>

        <h4 className="mt-5 text-[16px] font-bold">Python, le moteur du pipeline</h4>
        <p className="mt-2 text-[15px] leading-[1.7] text-text-secondary">
          Comme pour le projet Data Job France, Python gère toute la partie extraction et transformation. Le scraping du SNEP, les appels à l&apos;API Genius, le nettoyage et la normalisation des données : tout est orchestré en Python.
        </p>

        <h4 className="mt-5 text-[16px] font-bold">PostgreSQL (Neon), le stockage</h4>
        <p className="mt-2 text-[15px] leading-[1.7] text-text-secondary">
          Les données nettoyées sont d&apos;abord travaillées en CSV puis chargées dans une base PostgreSQL hébergée sur Neon. Le schéma est normalisé en 9 tables avec plus de 60 000 entrées de classement depuis 2020. Le choix de Neon reste le même que sur le projet précédent : serverless, gratuit, simple à connecter.
        </p>

        <h4 className="mt-5 text-[16px] font-bold">GitHub Actions, orchestration hebdomadaire</h4>
        <p className="mt-2 text-[15px] leading-[1.7] text-text-secondary">
          Le pipeline de mise à jour tourne automatiquement chaque semaine via GitHub Actions, calé sur le rythme de publication du SNEP. Même logique que le projet précédent : pas besoin d&apos;Airflow ou d&apos;un orchestrateur lourd pour un cron hebdomadaire.
        </p>

        <h4 className="mt-5 text-[16px] font-bold">Next.js + Recharts, la visualisation</h4>
        <p className="mt-2 text-[15px] leading-[1.7] text-text-secondary">
          Même choix technique que pour Data Job France, et pour les mêmes raisons. Pour un dashboard destiné à être partagé avec un client externe, Next.js est la solution la plus adaptée : un simple lien suffit, pas de licence à gérer, pas de logiciel à installer côté utilisateur. Power BI ou Tableau auraient imposé des contraintes d&apos;accès incompatibles avec le besoin. Streamlit aurait limité le design et l&apos;expérience utilisateur sur un produit qui doit être agréable à utiliser au quotidien.
        </p>

        <hr className="my-6 border-border" />

        {/* Pipeline */}
        <h3 className="text-[18px] font-bold">Pipeline de données</h3>

        <h4 className="mt-5 text-[16px] font-bold">1. Scraping initial (historique 2020 à aujourd&apos;hui)</h4>
        <p className="mt-2 text-[15px] leading-[1.7] text-text-secondary">
          Un script Python parcourt l&apos;ensemble des classements SNEP semaine par semaine depuis 2020. Pour chaque entrée : artiste, titre, position, semaines de présence, évolution. Les données brutes sont stockées en CSV.
        </p>

        <h4 className="mt-5 text-[16px] font-bold">2. Enrichissement via Genius</h4>
        <p className="mt-2 text-[15px] leading-[1.7] text-text-secondary">
          Un second script prend chaque titre récupéré et interroge l&apos;API Genius pour récupérer les métadonnées manquantes : producteurs, auteurs, date de sortie. Le matching se fait par titre + artiste, avec gestion des cas où Genius ne retourne pas de résultat.
        </p>

        <h4 className="mt-5 text-[16px] font-bold">3. Transformation et chargement</h4>
        <p className="mt-2 text-[15px] leading-[1.7] text-text-secondary">
          Les données brutes et enrichies sont nettoyées en Python (normalisation des noms, déduplication, formatage des dates), puis chargées dans PostgreSQL. Le schéma est normalisé en 9 tables pour permettre des requêtes croisées entre artistes, producteurs, labels et classements.
        </p>

        <h4 className="mt-5 text-[16px] font-bold">4. Mise à jour hebdomadaire</h4>
        <p className="mt-2 text-[15px] leading-[1.7] text-text-secondary">
          Chaque semaine, un workflow GitHub Actions exécute le script de mise à jour qui récupère le dernier classement SNEP, enrichit les nouvelles entrées via Genius, et insère les données dans la base.
        </p>

        <hr className="my-6 border-border" />

        {/* Ce que l'app permet */}
        <h3 className="text-[18px] font-bold">Ce que l&apos;app permet concrètement</h3>
        <p className="mt-3 text-[15px] leading-[1.7] text-text-secondary">
          Le dashboard offre à mon client un outil qu&apos;il n&apos;avait pas avant :
        </p>
        <p className="mt-3 text-[15px] leading-[1.7] text-text-secondary">
          <strong>Visualiser les top producteurs</strong> sur le marché français, sur la période de son choix (depuis 2020). Qui écrit les hits ? Qui produit les morceaux qui restent le plus longtemps dans les charts ?
        </p>
        <p className="mt-3 text-[15px] leading-[1.7] text-text-secondary">
          <strong>Suivre les talents qu&apos;il scoute</strong> grâce à la fonction recherche. Il peut taper le nom d&apos;un producteur ou d&apos;un artiste et voir instantanément sa présence dans le Top 50 / 200, son évolution, ses collaborations.
        </p>
        <p className="mt-3 text-[15px] leading-[1.7] text-text-secondary">
          <strong>Analyser les tendances par éditeur et label</strong>, pour comprendre quelles structures placent le plus de titres dans les classements.
        </p>

        <hr className="my-6 border-border" />

        {/* Ce que ça démontre */}
        <h3 className="text-[18px] font-bold">Ce que ce projet démontre</h3>
        <ul className="mt-3 flex flex-col gap-2 text-[15px] leading-[1.7] text-text-secondary">
          <li>Réponse à un <strong>besoin métier réel</strong> dans l&apos;industrie musicale</li>
          <li>Capacité à <strong>identifier et croiser des sources</strong> quand la donnée n&apos;est pas disponible directement</li>
          <li>Construction d&apos;un <strong>pipeline de scraping + enrichissement API</strong> robuste et automatisé</li>
          <li>Livraison d&apos;un <strong>produit fini utilisable</strong> par un client non technique</li>
          <li>Même rigueur technique que le projet Data Job France, appliquée à un domaine complètement différent</li>
        </ul>

        <hr className="my-6 border-border" />

        {/* Links */}
        <div className="flex flex-wrap gap-4">
          <a
            href="https://vizdashboard.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-[24px] bg-text px-6 py-3 text-[15px] font-medium text-white transition-opacity hover:opacity-80"
          >
            Voir le projet ↗
          </a>
          <a
            href="https://github.com/Camil444/top-single-snep"
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
