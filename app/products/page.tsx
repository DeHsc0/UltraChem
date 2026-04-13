import { PageHero } from "@/components/page-hero";
import { GsapReveal } from "@/components/gsap-reveal";
import { ProductCard } from "@/components/product-card";
import { CtaBand } from "@/components/cta-band";
import {
  categories,
  otherProductRanges,
  productCatalog,
  productHierarchy
} from "@/lib/site-data";

export default function ProductsPage() {
  return (
    <>
      <PageHero
        title="Products"
        subtitle="Explore UltraChem's engineered systems for durability enhancement, waterproofing, curing, corrosion protection, and joint sealing."
        accent="Construction Chemical Portfolio"
        imageIndex={5}
      />

      <section className="container-shell py-10 sm:py-14">
        <GsapReveal>
          <p className="section-kicker">Product Categories</p>
          <h2 className="mt-4 text-4xl font-black uppercase leading-tight">
            Solution Families
          </h2>
        </GsapReveal>
        <div className="mt-6 grid auto-rows-fr gap-4 md:grid-cols-2 xl:grid-cols-3">
          {categories.map((category, index) => (
            <GsapReveal key={category.name} delay={index * 0.08} className="h-full">
              <article className="panel h-full border-l-4 border-safety-yellow p-5">
                <h3 className="text-2xl font-black uppercase">{category.name}</h3>
                <p className="mt-3 text-sm text-safety-gray">{category.description}</p>
              </article>
            </GsapReveal>
          ))}
        </div>
      </section>

      <section className="bg-safety-light py-10 sm:py-14">
        <div className="container-shell">
          <GsapReveal>
            <p className="section-kicker">Catalog</p>
            <h2 className="mt-4 text-4xl font-black uppercase leading-tight">
              Detailed Products
            </h2>
          </GsapReveal>

          <div className="mt-6 grid auto-rows-fr gap-6 md:grid-cols-2 xl:grid-cols-3">
            {productCatalog.map((product, index) => (
              <GsapReveal key={product.slug} delay={index * 0.05} className="h-full">
                <ProductCard product={product} imageIndex={index + 1} />
              </GsapReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="container-shell py-10 sm:py-14">
        <GsapReveal>
          <p className="section-kicker">Product Structure</p>
          <h2 className="mt-4 text-4xl font-black uppercase leading-tight">
            Category & Sub-Product Flow
          </h2>
        </GsapReveal>

        <div className="mt-6 grid auto-rows-fr gap-4 lg:grid-cols-2">
          {productHierarchy.map((group, index) => (
            <GsapReveal key={group.category} delay={index * 0.07} className="h-full">
              <article className="panel h-full border-l-4 border-safety-yellow p-6">
                <h3 className="text-2xl font-black uppercase">{group.category}</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.products.map((product) => (
                    <span
                      key={product}
                      className="border border-black/15 bg-safety-light px-3 py-1.5 text-xs font-bold uppercase tracking-wide"
                    >
                      {product}
                    </span>
                  ))}
                </div>
              </article>
            </GsapReveal>
          ))}
        </div>
      </section>

      <section className="bg-safety-light py-10 sm:py-12">
        <div className="container-shell">
          <GsapReveal>
            <p className="section-kicker">Other Range Of Products</p>
            <h2 className="mt-4 text-4xl font-black uppercase leading-tight">
              Extended Portfolio
            </h2>
          </GsapReveal>

          <div className="mt-6 grid auto-rows-fr gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {otherProductRanges.map((range, index) => (
              <GsapReveal key={range} delay={index * 0.06} className="h-full">
                <article className="panel h-full border-l-4 border-safety-yellow bg-white p-4 text-sm font-bold uppercase tracking-wide">
                  {range}
                </article>
              </GsapReveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Need TDS, Dosage, Or Application Advice?"
        description="Our technical team can help you pick the right product system for your site conditions."
      />
    </>
  );
}
