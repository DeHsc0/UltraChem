"use client";

import Link from "next/link";
import Image from "next/image";
import { ChevronDown, Menu, Phone, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { companyInfo, menuLinks, navMenu } from "@/lib/site-data";

type DropdownLink = {
  label: string;
  href: string;
};

type DesktopMenu = {
  label: string;
  href: string;
  kind: "simple" | "mega";
  links: DropdownLink[];
  note?: string;
};

const desktopMenus: DesktopMenu[] = [
  {
    label: "About Us",
    href: "/about",
    kind: "simple",
    links: navMenu.about
  },
  {
    label: "Products",
    href: "/products",
    kind: "mega",
    links: [
      ...navMenu.products.flatMap((group) =>
        group.children
          ? [{ label: group.label, href: group.href }, ...group.children]
          : [{ label: group.label, href: group.href }]
      )
    ],
    note: "Hover a category, then select the exact product page"
  },
  {
    label: "Sectors",
    href: "/sectors",
    kind: "simple",
    links: navMenu.sectors
  },
  {
    label: "Resources",
    href: "/resources",
    kind: "simple",
    links: navMenu.resources
  }
];

function DropdownPanel({
  menu
}: {
  menu: DesktopMenu;
}) {
  if (menu.kind === "simple") {
    return (
      <div className="absolute left-1/2 top-full z-50 w-[18rem] -translate-x-1/2 pt-1 opacity-0 invisible transition duration-150 group-hover:opacity-100 group-hover:visible group-focus-within:opacity-100 group-focus-within:visible">
        <div className="border border-black/10 bg-white p-3 shadow-panel">
          <div className="space-y-1">
            {menu.links.map((link) => (
              <Link
                key={link.href + link.label}
                href={link.href}
                className="block px-3 py-2 text-sm font-semibold uppercase tracking-wide text-safety-black transition hover:bg-safety-yellow hover:text-safety-black"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    );
  }

  const groups = [
    {
      heading: "Concrete Admixtures",
      links: [
        { label: "ULTRAMIX PC-M", href: "/products/ultramix-pc-m" },
        { label: "ULTRAMIX PC-H", href: "/products/ultramix-pc-h" },
        { label: "ULTRAMIX PC", href: "/products/ultramix-pc" }
      ]
    },
    {
      heading: "Corrosion Inhibitors",
      links: [
        { label: "UltraShield TTCI", href: "/products/ultrashield-ttci" },
        { label: "UltraGuard ST", href: "/products/ultraguard-st" }
      ]
    },
    {
      heading: "Curing Compounds",
      links: [
        { label: "UltraCure RB7", href: "/products/ultracure-rb7" },
        { label: "UltraCure WB", href: "/products/ultracure-wb" }
      ]
    },
    {
      heading: "Joint Sealants",
      links: [
        {
          label: "Polysulphide Sealant (PS)",
          href: "/products/polysulphide-sealant-ps"
        },
        { label: "Polyurethane Sealant (PU)", href: "/products/ultraseal-pu" },
        { label: "UltraPrime", href: "/products/ultraprime" }
      ]
    },
    {
      heading: "Waterproofing Systems",
      links: [
        { label: "UltraDeck Seal", href: "/products/ultradeck-seal" },
        { label: "UltraLiquid Plus", href: "/products/ultraliquid-plus" }
      ]
    }
  ];

  return (
    <div className="absolute left-1/2 top-full z-50 w-[min(72rem,92vw)] -translate-x-1/2 pt-1 opacity-0 invisible transition duration-150 group-hover:opacity-100 group-hover:visible group-focus-within:opacity-100 group-focus-within:visible">
      <div className="border border-black/10 bg-white p-4 shadow-panel">
        <div className="mb-3 flex items-center justify-between border-b border-black/10 pb-3">
          <p className="text-xs font-black uppercase tracking-[0.2em] text-safety-gray">
            {menu.note}
          </p>
          <Link
            href={menu.href}
            className="text-xs font-black uppercase tracking-[0.2em] text-safety-yellow"
          >
            View All Products
          </Link>
        </div>

        <div className="grid gap-4 xl:grid-cols-5">
          {groups.map((group) => (
            <div key={group.heading} className="space-y-2">
              <Link
                href="/products"
                className="block border-l-4 border-safety-yellow pl-3 text-sm font-black uppercase tracking-wide text-safety-black hover:text-safety-yellow"
              >
                {group.heading}
              </Link>
              <div className="space-y-1 pl-3">
                {group.links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block rounded-none px-2 py-1 text-sm font-medium text-safety-gray transition hover:bg-safety-light hover:text-safety-black"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-50 shadow-panel">
      <div className="bg-safety-black text-xs text-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6">
          <p>{companyInfo.hours}</p>
          <a
            href={`tel:${companyInfo.phone.replace(/\s+/g, "")}`}
            className="inline-flex items-center gap-2 font-semibold text-safety-yellow"
          >
            <Phone className="h-3.5 w-3.5" />
            {companyInfo.phone}
          </a>
        </div>
      </div>

      <div className="border-b-4 border-safety-yellow bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6">
          <Link href="/" className="flex items-center">
            <div className="relative h-14 w-40 overflow-hidden sm:h-16 sm:w-48">
              <Image
                src="/assets/logo.svg"
                alt="UltraChem Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>

          <nav className="hidden items-stretch lg:flex">
            {desktopMenus.map((menu) => (
              <div
                key={menu.label}
                className="group relative"
                onMouseEnter={() => setActiveMenu(menu.label)}
                onMouseLeave={() => setActiveMenu(null)}
                onFocusCapture={() => setActiveMenu(menu.label)}
                onBlurCapture={(event) => {
                  if (!event.currentTarget.contains(event.relatedTarget as Node)) {
                    setActiveMenu(null);
                  }
                }}
              >
                <Link
                  href={menu.href}
                  className={cn(
                    "inline-flex h-full items-center gap-1 px-4 py-6 text-sm font-black uppercase tracking-wide transition-colors",
                    pathname.startsWith(menu.href)
                      ? "text-safety-yellow"
                      : "text-safety-black hover:text-safety-yellow"
                  )}
                  >
                  {menu.label}
                  <ChevronDown className="h-4 w-4" />
                </Link>
                <div
                  className={cn(
                    "pointer-events-none",
                    activeMenu === menu.label && "pointer-events-auto"
                  )}
                >
                  <div
                    className={cn(
                      activeMenu === menu.label
                        ? "opacity-100 visible"
                        : "opacity-0 invisible"
                    )}
                  >
                    <DropdownPanel menu={menu} />
                  </div>
                </div>
              </div>
            ))}

            <Link
              href="/careers"
              className={cn(
                "inline-flex h-full items-center px-4 py-6 text-sm font-black uppercase tracking-wide transition-colors",
                pathname === "/careers"
                  ? "text-safety-yellow"
                  : "text-safety-black hover:text-safety-yellow"
              )}
            >
              Careers
            </Link>
            <Link
              href="/contact"
              className={cn(
                "inline-flex h-full items-center px-4 py-6 text-sm font-black uppercase tracking-wide transition-colors",
                pathname === "/contact"
                  ? "text-safety-yellow"
                  : "text-safety-black hover:text-safety-yellow"
              )}
            >
              Contact
            </Link>
          </nav>

          <Link
            href="/contact"
            className="hidden rounded-none bg-safety-yellow px-5 py-2 text-sm font-extrabold uppercase text-safety-black transition hover:bg-safety-black hover:text-safety-yellow lg:inline-block"
          >
            Get A Quote
          </Link>

          <button
            type="button"
            className="inline-flex rounded-sm border border-safety-black p-2 text-safety-black lg:hidden"
            onClick={() => setOpen((current) => !current)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {open ? (
          <div className="border-t border-black/10 bg-white px-4 py-4 lg:hidden">
            <nav className="flex flex-col gap-4">
              {menuLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "text-sm font-bold uppercase tracking-wide",
                    pathname === link.href
                      ? "text-safety-yellow"
                      : "text-safety-black"
                  )}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/contact"
                className="mt-2 inline-flex w-fit bg-safety-yellow px-4 py-2 text-xs font-black uppercase text-safety-black"
                onClick={() => setOpen(false)}
              >
                Get A Quote
              </Link>
            </nav>
          </div>
        ) : null}
      </div>
    </header>
  );
}
