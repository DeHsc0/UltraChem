"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu, Phone, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { companyInfo, menuLinks } from "@/lib/site-data";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 shadow-panel">
      <div className="bg-safety-black text-xs text-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6">
          <p>{companyInfo.hours}</p>
          <a
            href={`tel:${companyInfo.phone.replace(/\s+/g, "")}`}
            className="inline-flex items-center gap-2 font-semibold text-safety-yellow"
          >
            <Phone className="h-3.5 w-3.5" />
            {companyInfo.phone}
          </a>
        </div>
      </div>

      <div className="border-b-4 border-safety-yellow bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6">
          <Link href="/" className="flex items-center">
            <div className="relative h-14 w-40 overflow-hidden sm:h-16 sm:w-48">
              <Image
                src="/assets/logo.svg"
                alt="UltraChem Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>

          <nav className="hidden items-center gap-6 lg:flex">
            {menuLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm font-bold uppercase tracking-wide transition-colors",
                  pathname === link.href
                    ? "text-safety-yellow"
                    : "text-safety-black hover:text-safety-yellow"
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <Link
            href="/contact"
            className="hidden rounded-none bg-safety-yellow px-5 py-2 text-sm font-extrabold uppercase text-safety-black transition hover:bg-safety-black hover:text-safety-yellow lg:inline-block"
          >
            Get A Quote
          </Link>

          <button
            type="button"
            className="inline-flex rounded-sm border border-safety-black p-2 text-safety-black lg:hidden"
            onClick={() => setOpen((current) => !current)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {open ? (
          <div className="border-t border-black/10 bg-white px-4 py-4 lg:hidden">
            <nav className="flex flex-col gap-4">
              {menuLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "text-sm font-bold uppercase tracking-wide",
                    pathname === link.href
                      ? "text-safety-yellow"
                      : "text-safety-black"
                  )}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/contact"
                className="mt-2 inline-flex w-fit bg-safety-yellow px-4 py-2 text-xs font-black uppercase text-safety-black"
                onClick={() => setOpen(false)}
              >
                Get A Quote
              </Link>
            </nav>
          </div>
        ) : null}
      </div>
    </header>
  );
}
