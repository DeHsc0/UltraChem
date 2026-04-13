import Image from "next/image";
import { getAsset } from "@/lib/site-data";

type PageHeroProps = {
  title: string;
  subtitle: string;
  accent?: string;
  imageIndex?: number;
};

export function PageHero({
  title,
  subtitle,
  accent = "Built for Reliability",
  imageIndex = 0
}: PageHeroProps) {
  return (
    <section className="relative isolate overflow-hidden bg-safety-black text-white">
      <Image
        src={getAsset(imageIndex)}
        alt={title}
        fill
        className="object-cover opacity-40"
        priority
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(252,194,0,0.35),transparent_60%)]" />
      <div className="absolute inset-0 bg-grid-pattern bg-[size:40px_40px] opacity-25" />

      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24">
        <p className="inline-flex bg-safety-yellow px-3 py-1 text-xs font-black uppercase tracking-[0.2em] text-safety-black">
          {accent}
        </p>
        <h1 className="mt-5 max-w-3xl text-4xl font-black uppercase leading-tight sm:text-5xl">
          {title}
        </h1>
        <p className="mt-5 max-w-2xl text-base text-white/85 sm:text-lg">
          {subtitle}
        </p>
      </div>
    </section>
  );
}
