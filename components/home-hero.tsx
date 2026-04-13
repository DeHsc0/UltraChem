"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { companyInfo, getAsset } from "@/lib/site-data";

export function HomeHero() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const headingRef = useRef<HTMLHeadingElement | null>(null);
  const copyRef = useRef<HTMLParagraphElement | null>(null);
  const actionsRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.fromTo(
      headingRef.current,
      { opacity: 0, y: 24 },
      { opacity: 1, y: 0, duration: 0.9 }
    )
      .fromTo(
        copyRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8 },
        "-=0.45"
      )
      .fromTo(
        actionsRef.current?.children ?? [],
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.7, stagger: 0.13 },
        "-=0.4"
      );

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative isolate overflow-hidden border-b-4 border-safety-yellow bg-safety-black text-white"
    >
      <Image
        src={getAsset(1)}
        alt="UltraChem infrastructure materials"
        fill
        priority
        className="object-cover opacity-35"
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(252,194,0,0.35),transparent_55%)]" />
      <div className="absolute inset-0 bg-grid-pattern bg-[size:40px_40px] opacity-25" />

      <div className="container-shell relative py-24 sm:py-28">
        <p className="section-kicker">Industrial Grade Construction Chemistry</p>
        <h1
          ref={headingRef}
          className="mt-5 max-w-4xl text-5xl font-black uppercase leading-[0.95] sm:text-6xl lg:text-7xl"
        >
          {companyInfo.heroTitle}
        </h1>
        <p ref={copyRef} className="mt-6 max-w-2xl text-lg text-white/85 sm:text-xl">
          {companyInfo.heroDescription}
        </p>

        <div ref={actionsRef} className="mt-8 flex flex-wrap gap-4">
          <Link
            href="/products"
            className="bg-safety-yellow px-5 py-3 text-sm font-black uppercase tracking-wide text-safety-black hover:bg-white"
          >
            Explore Products
          </Link>
          <Link
            href="/contact"
            className="border border-white px-5 py-3 text-sm font-black uppercase tracking-wide text-white hover:border-safety-yellow hover:text-safety-yellow"
          >
            Contact Team
          </Link>
        </div>
      </div>
    </section>
  );
}
