import Link from "next/link";

type CtaBandProps = {
  title: string;
  description: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
};

export function CtaBand({
  title,
  description,
  primaryLabel = "Contact Us",
  primaryHref = "/contact",
  secondaryLabel = "Explore Products",
  secondaryHref = "/products"
}: CtaBandProps) {
  return (
    <section className="bg-safety-black px-4 py-10 text-white sm:px-6 sm:py-12">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-3xl">
          <p className="inline-block bg-safety-yellow px-3 py-1 text-xs font-black uppercase tracking-[0.2em] text-white">
            Performance Beyond Products
          </p>
          <h2 className="mt-4 text-3xl font-black uppercase leading-tight sm:text-4xl">
            {title}
          </h2>
          <p className="mt-3 text-white/80">{description}</p>
        </div>

        <div className="flex flex-wrap gap-3">
          <Link
            href={primaryHref}
            className="bg-safety-yellow px-5 py-3 text-sm font-black uppercase text-white hover:bg-white hover:text-safety-black"
          >
            {primaryLabel}
          </Link>
          <Link
            href={secondaryHref}
            className="border border-white px-5 py-3 text-sm font-black uppercase text-white hover:border-safety-yellow hover:text-safety-yellow"
          >
            {secondaryLabel}
          </Link>
        </div>
      </div>
    </section>
  );
}
