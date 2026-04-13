"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { stats } from "@/lib/site-data";

export function StatCounters() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const container = containerRef.current;
    if (!container) {
      return;
    }

    const counters = Array.from(
      container.querySelectorAll<HTMLElement>("[data-counter]")
    );

    const animations = counters.map((counter) => {
      const target = Number(counter.dataset.counter);
      const state = { value: 0 };
      return gsap.to(state, {
        value: target,
        duration: 1.3,
        ease: "power2.out",
        scrollTrigger: {
          trigger: container,
          start: "top 82%",
          once: true
        },
        onUpdate: () => {
          counter.textContent = Math.round(state.value).toString();
        }
      });
    });

    return () => {
      animations.forEach((animation) => {
        animation.scrollTrigger?.kill();
        animation.kill();
      });
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
      id="stats"
    >
      {stats.map((stat) => (
        <article
          key={stat.label}
          className="border-l-4 border-safety-yellow bg-white p-6 shadow-panel"
        >
          <p className="text-4xl font-black text-safety-black">
            <span data-counter={stat.value}>0</span>
            <span>{stat.suffix}</span>
          </p>
          <p className="mt-2 text-sm font-semibold uppercase tracking-wide text-safety-gray">
            {stat.label}
          </p>
        </article>
      ))}
    </div>
  );
}
