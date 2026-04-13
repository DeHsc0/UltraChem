import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BadgeCheck } from "lucide-react";
import { HomeHero } from "@/components/home-hero";
import { GsapReveal } from "@/components/gsap-reveal";
import { StatCounters } from "@/components/stat-counters";
import { ProductCard } from "@/components/product-card";
import { CtaBand } from "@/components/cta-band";
import {
  categories,
  clientShowcase,
  companyInfo,
  differentiators,
  getAsset,
  homeFlowHighlights,
  productCatalog,
  sectors
} from "@/lib/site-data";

export default function HomePage() {
  return (
    <>
      <HomeHero />

      <section className="container-shell py-10 sm:py-14">
        <GsapReveal>
          <div className="mb-6 max-w-3xl">
            <p className="section-kicker">About UltraChem</p>
            <h2 className="mt-4 text-4xl font-black uppercase leading-tight">
              Reliable Construction Chemistry For Modern Infrastructure
            </h2>
            <p className="mt-4 text-base text-safety-gray sm:text-lg">
              {companyInfo.name}, headquartered in {companyInfo.location},
              delivers high-performance and cost-efficient systems with technical
              support that extends structural service life.
            </p>
          </div>
        </GsapReveal>

        <StatCounters />
      </section>

      <section className="bg-safety-light py-10 sm:py-14">
        <div className="container-shell">
          <GsapReveal>
            <div className="mb-6 flex items-end justify-between gap-4">
              <div>
                <p className="section-kicker">Product Categories</p>
                <h2 className="mt-4 text-4xl font-black uppercase leading-tight">
                  Core Solutions
                </h2>
              </div>
              <Link
                href="/products"
                className="hidden items-center gap-2 border-b-2 border-safety-yellow pb-1 text-sm font-black uppercase text-safety-black hover:text-safety-yellow sm:inline-flex"
              >
                View All Products
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </GsapReveal>

          <div className="grid auto-rows-fr gap-5 md:grid-cols-2 lg:grid-cols-3">
            {categories.map((category, index) => (
              <GsapReveal key={category.name} delay={index * 0.08} className="h-full">
                <article className="panel h-full border-l-4 border-safety-yellow p-6">
                  <h3 className="text-2xl font-black uppercase leading-tight">
                    {category.name}
                  </h3>
                  <p className="mt-3 text-sm text-safety-gray">
                    {category.description}
                  </p>
                </article>
              </GsapReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="container-shell py-10 sm:py-14">
        <GsapReveal>
          <div className="mb-6 max-w-3xl">
            <p className="section-kicker">Home Flow Highlights</p>
            <h2 className="mt-4 text-4xl font-black uppercase leading-tight">
              Engineered Product Families
            </h2>
          </div>
        </GsapReveal>

        <div className="grid auto-rows-fr gap-4 lg:grid-cols-5">
          {homeFlowHighlights.map((item, index) => (
            <GsapReveal key={item.title} delay={index * 0.06} className="h-full">
              <article className="panel h-full border-l-4 border-safety-yellow p-5">
                <p className="text-xs font-black uppercase tracking-[0.2em] text-safety-gray">
                  0{index + 1}
                </p>
                <h3 className="mt-2 text-xl font-black uppercase leading-tight">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm text-safety-gray">{item.description}</p>
              </article>
            </GsapReveal>
          ))}
        </div>
      </section>

      <section className="container-shell py-10 sm:py-14">
        <GsapReveal>
          <div className="mb-6">
            <p className="section-kicker">Featured Products</p>
            <h2 className="mt-4 text-4xl font-black uppercase leading-tight">
              Performance You Can Depend On
            </h2>
          </div>
        </GsapReveal>

        <div className="grid auto-rows-fr gap-6 md:grid-cols-2 xl:grid-cols-3">
          {productCatalog.slice(0, 6).map((product, index) => (
            <GsapReveal key={product.slug} delay={index * 0.07} className="h-full">
              <ProductCard product={product} imageIndex={index + 3} />
            </GsapReveal>
          ))}
        </div>
      </section>

      <section className="bg-safety-light py-10 sm:py-12">
        <div className="container-shell">
          <GsapReveal>
            <div className="mb-7">
              <p className="section-kicker">Client Logo</p>
              <h2 className="mt-4 text-4xl font-black uppercase leading-tight">
                Trusted By Demanding Sectors
              </h2>
            </div>
          </GsapReveal>

          <div className="grid auto-rows-fr gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {clientShowcase.map((client, index) => (
              <GsapReveal key={client} delay={index * 0.05} className="h-full">
                <article className="panel h-full border-l-4 border-safety-yellow bg-white p-4">
                  <p className="text-sm font-bold uppercase tracking-wide">{client}</p>
                </article>
              </GsapReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-safety-black py-10 text-white sm:py-14">
        <div className="container-shell">
          <GsapReveal>
            <p className="section-kicker">Why Choose UltraChem</p>
            <h2 className="mt-4 max-w-4xl text-4xl font-black uppercase leading-tight text-white">
              Not Just Products. Complete Technical Performance.
            </h2>
          </GsapReveal>

          <div className="mt-6 grid auto-rows-fr gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {differentiators.map((item, index) => (
              <GsapReveal key={item.title} delay={index * 0.05} className="h-full">
                <article className="h-full border border-white/20 bg-white/5 p-5">
                  <BadgeCheck className="h-5 w-5 text-white" />
                  <h3 className="mt-3 text-xl font-black uppercase text-white">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-white/80">{item.description}</p>
                </article>
              </GsapReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="container-shell py-10 sm:py-14">
        <GsapReveal>
          <div className="grid gap-6 lg:grid-cols-[1.15fr_1fr]">
            <div>
              <p className="section-kicker">Sectors</p>
              <h2 className="mt-4 text-4xl font-black uppercase leading-tight">
                Trusted Across Critical Industries
              </h2>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {sectors.map((sector) => (
                  <p
                    key={sector}
                    className="border-l-2 border-safety-yellow bg-safety-light px-3 py-2 text-sm font-semibold uppercase tracking-wide"
                  >
                    {sector}
                  </p>
                ))}
              </div>
            </div>

            <div className="relative min-h-[420px] overflow-hidden border-b-4 border-safety-yellow shadow-panel">
              <Image
                src={getAsset(9)}
                alt="UltraChem project sectors"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </GsapReveal>
      </section>

      <CtaBand
        title="Need Product Selection Or Site Support?"
        description="Share your project details and our technical team will propose the right chemistry, dosage range, and application pathway."
      />
    </>
  );
}
