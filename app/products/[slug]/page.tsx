import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Download, Mail } from "lucide-react";
import { notFound } from "next/navigation";
import { GsapReveal } from "@/components/gsap-reveal";
import { productCatalog, getAsset, companyInfo } from "@/lib/site-data";

type ProductPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return productCatalog.map((product) => ({
    slug: product.slug
  }));
}

export async function generateMetadata({
  params
}: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = productCatalog.find((item) => item.slug === slug);

  if (!product) {
    return {};
  }

  return {
    title: `${product.name} | UltraChem`,
    description: product.subtitle
  };
}

export default async function ProductDetailsPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const productIndex = productCatalog.findIndex((item) => item.slug === slug);
  const product = productCatalog[productIndex];

  if (!product) {
    notFound();
  }

  return (
    <>
      <section className="relative isolate overflow-hidden bg-safety-black text-white">
        <Image
          src={getAsset(productIndex + 2)}
          alt={product.name}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/45" />
        <div className="container-shell relative py-12 sm:py-16">
          <p className="section-kicker">{product.category}</p>
          <h1 className="mt-4 max-w-3xl text-4xl font-black uppercase leading-tight sm:text-5xl">
            {product.name}
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-white/85">{product.subtitle}</p>
        </div>
      </section>

      <section className="container-shell py-10 sm:py-14">
        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <GsapReveal>
            <article className="panel border-l-4 border-safety-yellow p-8">
              <h2 className="text-3xl font-black uppercase">Description</h2>
              <p className="mt-4 text-safety-gray">{product.description}</p>
            </article>

            <article className="panel mt-6 border-l-4 border-safety-yellow p-8">
              <h2 className="text-3xl font-black uppercase">Features</h2>
              <ul className="mt-4 space-y-3">
                {product.features.map((feature) => (
                  <li key={feature} className="border-l-2 border-safety-yellow pl-3">
                    {feature}
                  </li>
                ))}
              </ul>
            </article>

            <article className="panel mt-6 border-l-4 border-safety-yellow p-8">
              <h2 className="text-3xl font-black uppercase">Applications</h2>
              <ul className="mt-4 space-y-3">
                {product.applications.map((application) => (
                  <li
                    key={application}
                    className="border-l-2 border-safety-yellow pl-3"
                  >
                    {application}
                  </li>
                ))}
              </ul>
            </article>
          </GsapReveal>

          <GsapReveal delay={0.15}>
            <div className="space-y-6">
              <article className="panel p-6">
                <p className="text-xs font-black uppercase tracking-[0.2em] text-safety-gray">
                  Download
                </p>
                <h3 className="mt-2 text-2xl font-black uppercase">
                  Technical Data Sheet
                </h3>
                <p className="mt-2 text-sm text-safety-gray">
                  Access TDS and method statement package for {product.name}.
                </p>
                <Link
                  href={product.tdsUrl}
                  className="mt-4 inline-flex items-center gap-2 bg-safety-yellow px-4 py-2 text-sm font-black uppercase text-safety-black hover:bg-safety-black hover:text-safety-yellow"
                >
                  <Download className="h-4 w-4" />
                  Download TDS
                </Link>
              </article>

              <article className="panel p-6">
                <p className="text-xs font-black uppercase tracking-[0.2em] text-safety-gray">
                  Inquiry
                </p>
                <h3 className="mt-2 text-2xl font-black uppercase">
                  Need Support For This Product?
                </h3>
                <p className="mt-2 text-sm text-safety-gray">
                  Reach our technical service team for dosage advisory and
                  application guidance.
                </p>
                <a
                  href={`mailto:${companyInfo.email}?subject=Inquiry%20for%20${encodeURIComponent(product.name)}`}
                  className="mt-4 inline-flex items-center gap-2 border border-safety-black px-4 py-2 text-sm font-black uppercase text-safety-black hover:border-safety-yellow hover:text-safety-yellow"
                >
                  <Mail className="h-4 w-4" />
                  Send Inquiry
                </a>
              </article>
            </div>
          </GsapReveal>
        </div>
      </section>
    </>
  );
}
