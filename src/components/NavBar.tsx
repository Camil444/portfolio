"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "CV", href: "/cv" },
  { label: "À propos", href: "/about" },
];

export default function NavBar() {
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-beige/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-8 py-4 md:px-12">
        <Link href="/" className="leading-[1.1] transition-opacity hover:opacity-60">
          <span className="block text-[14px] font-light uppercase tracking-[3px]">
            Camil
          </span>
          <span className="block text-[14px] font-light uppercase tracking-[3px]">
            Hennebert
          </span>
        </Link>

        <div className="flex gap-2">
          {navItems.map((item) => {
            const isActive = pathname.startsWith(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-full px-4 py-2 text-[14px] font-medium transition-all ${
                  isActive
                    ? "bg-text text-white"
                    : "text-text hover:bg-black/10"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
