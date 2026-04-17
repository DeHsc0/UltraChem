import Image from "next/image";
import { PageHero } from "@/components/page-hero";
import { GsapReveal } from "@/components/gsap-reveal";
import { CtaBand } from "@/components/cta-band";
import { assetImages, getAsset } from "@/lib/site-data";

export default function GalleryPage() {
  return (
    <>
      <PageHero
        title="Gallery"
        subtitle="Explore project visuals across infrastructure, industrial, transport, and water-retaining applications."
        accent="Project Gallery"
        imageIndex={9}
      />

      <section className="container-shell py-10 sm:py-14">
        <GsapReveal>
          <p className="section-kicker">Visual Library</p>
          <h2 className="mt-4 max-w-4xl text-4xl font-black uppercase leading-tight">
            Site Conditions, Real Applications, Proven Performance
          </h2>
          <p className="mt-4 max-w-3xl text-safety-gray">
            A curated gallery of project visuals that reflect field conditions,
            execution quality, and durability-focused construction outcomes.
          </p>
        </GsapReveal>

        <div className="mt-8 grid auto-rows-[220px] gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {assetImages.map((image, index) => (
            <GsapReveal
              key={image}
              delay={index * 0.04}
              className={index % 5 === 0 ? "sm:col-span-2 sm:row-span-2" : ""}
            >
              <article className="group relative h-full overflow-hidden border border-black/10 shadow-panel">
                <Image
                  src={getAsset(index)}
                  alt={`UltraChem gallery image ${index + 1}`}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent opacity-90" />
                <p className="absolute bottom-3 left-3 text-xs font-black uppercase tracking-[0.2em] text-white">
                  Project {String(index + 1).padStart(2, "0")}
                </p>
              </article>
            </GsapReveal>
          ))}
        </div>
      </section>

      <CtaBand
        title="Need Product Advice For Similar Site Conditions?"
        description="Share your project brief and our team will recommend the right system and application pathway."
      />
    </>
  );
}
