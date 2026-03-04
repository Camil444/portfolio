import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "À propos — Camil Hennebert",
};

const contactItems = [
  {
    label: "Email",
    value: "camilhennebertpro@gmail.com",
    href: "mailto:camilhennebertpro@gmail.com",
  },
  {
    label: "Téléphone",
    value: "+33 7 82 39 37 78",
    href: "tel:+33782393778",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/camil-hennebert-1532661a9",
    href: "https://www.linkedin.com/in/camil-hennebert-1532661a9-1532661a9/",
  },
  {
    label: "GitHub",
    value: "github.com/Camil444",
    href: "https://github.com/Camil444",
  },
];

export default function AboutPage() {
  return (
    <section className="mx-auto max-w-5xl px-6 pt-20 pb-24 md:px-12">
      <h1 className="text-[36px] font-bold">À propos</h1>

      <div className="mt-10 flex flex-col gap-6 text-[16px] leading-[1.8] text-[#333]">
        <p>
          Mon chemin vers la data n&apos;a rien de linéaire. J&apos;ai vendu du matériel audio à la FNAC, géré des dossiers sensibles chez BNP Paribas, avant de trouver ce qui me fait vibrer : transformer des données brutes en outils que les gens utilisent vraiment.
        </p>
        <p>
          Chez MAIF, j&apos;ai eu carte blanche pour construire tout le dispositif analytique d&apos;un service de zéro, des flux de données aux dashboards interactifs, en passant par la transformation et l&apos;automatisation avec Python. Le résultat : un service entièrement autonome dans son pilotage, sans qu&apos;on ait besoin de moi chaque lundi matin.
        </p>
        <p>
          Ce qui me plaît, c&apos;est le moment où quelqu&apos;un regarde un dashboard et dit « ah ok, du coup on fait ça ». C&apos;est là que le travail prend son sens.
        </p>
        <p>
          Quand je ne suis pas devant un notebook Jupyter, je suis probablement sur un ring de boxe, derrière un piano, ou quelque part entre Tokyo et Kinshasa.
        </p>
      </div>

      {/* Contact */}
      <div className="mt-14">
        <p className="mb-4 text-[13px] font-medium uppercase tracking-[2px] text-[#888]">
          Contact
        </p>
        <div className="flex flex-col gap-3">
          {contactItems.map((item) => (
            <div key={item.label} className="flex items-baseline gap-3">
              <span className="w-24 shrink-0 text-[14px] font-semibold text-[#888]">
                {item.label}
              </span>
              <a
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  item.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                className="text-[14px] underline decoration-accent underline-offset-3"
              >
                {item.value}
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Langues */}
      <div className="mt-12">
        <p className="mb-3 text-[13px] font-medium uppercase tracking-[2px] text-[#888]">
          Langues
        </p>
        <p className="text-[14px] text-text-secondary">
          Français (langue maternelle) · Anglais (B2)
        </p>
      </div>

      {/* Centres d'intérêt */}
      <div className="mt-12">
        <p className="mb-3 text-[13px] font-medium uppercase tracking-[2px] text-[#888]">
          Centres d&apos;intérêt
        </p>
        <p className="text-[14px] text-text-secondary">
          Boxe anglaise · Piano · Voyage (PVT Australie, Japon, Corée du Sud,
          Indonésie, RDC)
        </p>
      </div>
    </section>
  );
}
