import Link from "next/link";
import { companyInfo } from "@/lib/site-data";

const aboutLinks = [
  { label: "Company Profile", href: "/about" },
  { label: "Vision & Mission", href: "/about#vision" },
  { label: "Technical Services", href: "/about#services" },
  { label: "Contact Us", href: "/contact" }
];

const popularCategories = [
  "Laboratory",
  "Metallurgy",
  "Construction",
  "Industrial Coatings",
  "Waterproofing Systems"
];

const productCategories = [
  "Concrete Admixtures",
  "Corrosion Inhibitors",
  "Curing Compounds",
  "Joint Sealants",
  "Crystalline Systems"
];

export function SiteFooter() {
  return (
    <footer className="mt-10 border-t-4 border-safety-yellow bg-safety-black text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-4">
        <div>
          <p className="text-2xl font-black uppercase tracking-wide text-safety-yellow">
            UltraChem
          </p>
          <p className="mt-4 text-sm leading-relaxed text-white/80">
            Performance-oriented construction chemical solutions built for modern
            infrastructure and reliable long-term durability.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-black uppercase tracking-[0.2em] text-safety-yellow">
            About
          </h3>
          <ul className="mt-4 space-y-2 text-sm text-white/80">
            {aboutLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-safety-yellow">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-black uppercase tracking-[0.2em] text-safety-yellow">
            Popular Categories
          </h3>
          <ul className="mt-4 space-y-2 text-sm text-white/80">
            {popularCategories.map((category) => (
              <li key={category}>{category}</li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-black uppercase tracking-[0.2em] text-safety-yellow">
            Product Categories
          </h3>
          <ul className="mt-4 space-y-2 text-sm text-white/80">
            {productCategories.map((category) => (
              <li key={category}>{category}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-4 text-xs text-white/70 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p>Copyright {new Date().getFullYear()} {companyInfo.name}</p>
          <p>{companyInfo.location} | {companyInfo.phone}</p>
        </div>
      </div>
    </footer>
  );
}
