"use client";

import Image from "next/image";
import { ArrowUpRight, Building2, X } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { GsapReveal } from "@/components/gsap-reveal";
import { cn } from "@/lib/utils";
import { getAsset, type SectorProfile } from "@/lib/site-data";

type SectorShowcaseGridProps = {
  sectors: SectorProfile[];
};

export function SectorShowcaseGrid({ sectors }: SectorShowcaseGridProps) {
  const [activeSlug, setActiveSlug] = useState<string | null>(null);

  const activeSector = useMemo(
    () => sectors.find((sector) => sector.slug === activeSlug) ?? null,
    [activeSlug, sectors]
  );

  useEffect(() => {
    document.body.style.overflow = activeSector ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [activeSector]);

  useEffect(() => {
    const onEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveSlug(null);
      }
    };

    window.addEventListener("keydown", onEscape);
    return () => {
      window.removeEventListener("keydown", onEscape);
    };
  }, []);

  return (
    <>
      <div className="mt-8 grid auto-rows-fr gap-4 md:grid-cols-2 xl:grid-cols-3">
        {sectors.map((sector, index) => (
          <GsapReveal key={sector.slug} delay={index * 0.04} className="h-full">
            <article className="panel flex h-full flex-col border-l-4 border-safety-yellow p-6">
              <p className="text-xs font-black uppercase tracking-[0.2em] text-safety-gray">
                Sector Focus
              </p>
              <h3 className="mt-3 text-2xl font-black uppercase leading-tight text-safety-black">
                {sector.title}
              </h3>
              <p className="mt-3 text-sm text-safety-gray">
                {sector.shortDescription}
              </p>

              <button
                type="button"
                onClick={() => setActiveSlug(sector.slug)}
                className="mt-auto pt-5 inline-flex items-center gap-2 border-b-2 border-safety-yellow pb-1 text-sm font-black uppercase text-safety-black transition hover:text-safety-yellow"
              >
                Read More
                <ArrowUpRight className="h-4 w-4" />
              </button>
            </article>
          </GsapReveal>
        ))}
      </div>

      {activeSector ? (
        <div className="fixed inset-0 z-[90] flex items-center justify-center p-4 sm:p-6">
          <button
            type="button"
            aria-label="Close sector dialog backdrop"
            className="absolute inset-0 bg-black/60"
            onClick={() => setActiveSlug(null)}
          />

          <article
            role="dialog"
            aria-modal="true"
            aria-labelledby="sector-dialog-title"
            className="relative z-[91] w-full max-w-5xl overflow-hidden border border-black/10 bg-white shadow-panel"
          >
            <button
              type="button"
              onClick={() => setActiveSlug(null)}
              className="absolute right-3 top-3 z-20 inline-flex rounded-none border border-black/20 bg-white/90 p-2 text-safety-black transition hover:border-safety-yellow hover:text-safety-yellow"
              aria-label="Close sector dialog"
            >
              <X className="h-4 w-4" />
            </button>

            <div className="grid max-h-[88vh] overflow-y-auto lg:grid-cols-[0.9fr_1.1fr]">
              <div className="relative min-h-[260px] lg:min-h-[620px]">
                <Image
                  src={getAsset(activeSector.imageIndex)}
                  alt={activeSector.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/45 to-black/10" />
                <p className="absolute bottom-4 left-4 inline-flex items-center gap-2 bg-white/95 px-3 py-2 text-xs font-black uppercase tracking-[0.18em] text-safety-black">
                  <Building2 className="h-3.5 w-3.5 text-safety-yellow" />
                  Project Sector
                </p>
              </div>

              <div className="p-6 sm:p-8">
                <p className="section-kicker">Sector Detail</p>
                <h3
                  id="sector-dialog-title"
                  className="mt-4 text-3xl font-black uppercase leading-tight text-safety-black"
                >
                  {activeSector.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-safety-gray sm:text-base">
                  {activeSector.detailDescription}
                </p>

                <div className="mt-6 space-y-3">
                  {activeSector.focusPoints.map((point) => (
                    <p
                      key={point}
                      className={cn(
                        "border-l-2 border-safety-yellow bg-safety-light px-3 py-2 text-sm font-semibold uppercase tracking-wide text-safety-black"
                      )}
                    >
                      {point}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </article>
        </div>
      ) : null}
    </>
  );
}
