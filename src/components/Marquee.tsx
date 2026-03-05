"use client";

import Image from "next/image";

interface Skill {
  name: string;
  logo: string;
}

function SkillItem({ skill }: { skill: Skill }) {
  return (
    <div className="flex flex-col items-center gap-3 mx-12" style={{ minWidth: "100px" }}>
      <Image
        src={skill.logo}
        alt={skill.name}
        width={128}
        height={128}
        className="h-[80px] w-[80px] object-contain"
      />
      <span className="text-[15px] font-medium text-text">{skill.name}</span>
    </div>
  );
}

export default function Marquee({ skills }: { skills: Skill[] }) {
  // Repeat enough times to always fill the screen
  const repeated = [...skills, ...skills, ...skills, ...skills];

  return (
    <div className="relative overflow-hidden py-4">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-32 md:w-[480px] bg-gradient-to-r from-white to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-32 md:w-[480px] bg-gradient-to-l from-white to-transparent" />

      <div className="marquee-wrapper">
        <div className="marquee-content">
          {repeated.map((skill, i) => (
            <SkillItem key={i} skill={skill} />
          ))}
        </div>
        <div className="marquee-content" aria-hidden="true">
          {repeated.map((skill, i) => (
            <SkillItem key={`dup-${i}`} skill={skill} />
          ))}
        </div>
      </div>
    </div>
  );
}
