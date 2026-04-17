"use client";

import Link from "next/link";
import Image from "next/image";
import { ChevronDown, Menu, Phone, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { companyInfo, navMenu } from "@/lib/site-data";

type DropdownLink = {
  label: string;
  href: string;
};

type DesktopMenu = {
  label: string;
  href: string;
  kind: "link" | "simple" | "mega" | "resource";
  links: DropdownLink[];
  note?: string;
};

const desktopMenus: DesktopMenu[] = [
  {
    label: "About Us",
    href: "/about",
    kind: "link",
    links: []
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
    note: "Click a category, then select the exact product page"
  },
  {
    label: "Sectors",
    href: "/sectors",
    kind: "link",
    links: []
  },
  {
    label: "Resources",
    href: "/resources",
    kind: "resource",
    links: []
  }
];

function DropdownPanel({ menu }: { menu: DesktopMenu }) {
  const [activeGroup, setActiveGroup] = useState<string | null>(null);
  const [resourcesDownloadsOpen, setResourcesDownloadsOpen] = useState(false);

  if (menu.kind === "simple") {
    return (
      <div className="absolute left-1/2 top-full z-50 w-[18rem] -translate-x-1/2 pt-1 opacity-0 invisible transition duration-150 group-hover:opacity-100 group-hover:visible group-focus-within:opacity-100 group-focus-within:visible">
        <div className="border border-black/10 bg-white p-3 shadow-panel">
          <div className="space-y-1">
            {menu.links.map((link) => (
              <Link
                key={link.href + link.label}
                href={link.href}
                className="block px-3 py-2 text-sm font-semibold uppercase tracking-wide text-safety-black transition hover:bg-safety-yellow hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (menu.kind !== "mega") {
    if (menu.kind !== "resource") {
      return null;
    }

    return (
      <div className="absolute left-1/2 top-full z-50 w-[min(24rem,92vw)] -translate-x-1/2 pt-1 opacity-0 invisible transition duration-150 group-hover:opacity-100 group-hover:visible group-focus-within:opacity-100 group-focus-within:visible">
        <div className="border border-black/10 bg-white p-3 shadow-panel">
          <div className="space-y-2">
            <div
              className="cursor-pointer rounded-none border border-black/10 bg-safety-light/30 p-2.5"
              role="button"
              tabIndex={0}
              aria-expanded={resourcesDownloadsOpen}
              onClick={(event) => {
                const target = event.target as HTMLElement;
                if (target.closest("a")) {
                  return;
                }
                setResourcesDownloadsOpen((current) => !current);
              }}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  event.preventDefault();
                  setResourcesDownloadsOpen((current) => !current);
                }
              }}
            >
              <div className="flex w-full items-center justify-between border-l-4 border-safety-yellow pl-3 text-left text-sm font-black uppercase tracking-wide text-safety-black transition hover:text-safety-yellow">
                <span>Downloads</span>
                <ChevronDown
                  className={cn(
                    "h-4 w-4 transition-transform duration-150",
                    resourcesDownloadsOpen && "rotate-180"
                  )}
                />
              </div>
              <div
                className={cn(
                  "mt-2 space-y-1 pl-3",
                  resourcesDownloadsOpen ? "block" : "hidden"
                )}
              >
                <Link
                  href="/Prodcut-Catlouge-UltraChem.pdf"
                  className="block rounded-none px-2 py-1 text-sm font-medium text-safety-gray transition hover:bg-white hover:text-safety-black"
                >
                  Product Catalogue
                </Link>
                <Link
                  href="/resources#downloads"
                  className="block rounded-none px-2 py-1 text-sm font-medium text-safety-gray transition hover:bg-white hover:text-safety-black"
                >
                  Technical Data Sheets
                </Link>
                <Link
                  href="/Brochure-UltraChem.pdf"
                  className="block rounded-none px-2 py-1 text-sm font-medium text-safety-gray transition hover:bg-white hover:text-safety-black"
                >
                  Brochures
                </Link>
              </div>
            </div>

            <Link
              href="/gallery"
              className="block rounded-none border border-black/10 bg-safety-light/30 px-3 py-2 text-sm font-black uppercase tracking-wide text-safety-black transition hover:border-safety-yellow hover:text-safety-yellow"
            >
              Gallery
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const groups = [
    {
      heading: "Crystalline Durability Admixture",
      href: "/products/ultraheal-2106",
      links: []
    },
    {
      heading: "Concrete Admixtures",
      links: [
        { label: "ULTRAMIX PC-M", href: "/products/ultramix-pc-m" },
        { label: "ULTRAMIX PC-H", href: "/products/ultramix-pc-h" }
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
    <div className="absolute left-1/2 top-full z-50 w-[min(34rem,92vw)] -translate-x-1/2 pt-1 opacity-0 invisible transition duration-150 group-hover:opacity-100 group-hover:visible group-focus-within:opacity-100 group-focus-within:visible">
      <div className="border border-black/10 bg-white p-3 shadow-panel">
        
        

        <div className="max-h-[65vh] space-y-2 overflow-y-auto pr-1">
          {groups.map((group) => (
            <div
              key={group.heading}
              className="rounded-none border border-black/10 bg-safety-light/30 p-2.5"
            >
              {group.links.length === 0 ? (
                <Link
                  href={group.href ?? "/products"}
                  className="block border-l-4 border-safety-yellow pl-3 text-sm font-black uppercase tracking-wide text-safety-black transition hover:text-safety-yellow"
                >
                  {group.heading}
                </Link>
              ) : (
                <>
                  <div
                    className="cursor-pointer"
                    role="button"
                    tabIndex={0}
                    aria-expanded={activeGroup === group.heading}
                    onClick={(event) => {
                      const target = event.target as HTMLElement;
                      if (target.closest("a")) {
                        return;
                      }
                      setActiveGroup((current) =>
                        current === group.heading ? null : group.heading
                      );
                    }}
                    onKeyDown={(event) => {
                      if (event.key === "Enter" || event.key === " ") {
                        event.preventDefault();
                        setActiveGroup((current) =>
                          current === group.heading ? null : group.heading
                        );
                      }
                    }}
                  >
                    <div className="flex w-full items-center justify-between border-l-4 border-safety-yellow pl-3 text-left text-sm font-black uppercase tracking-wide text-safety-black transition hover:text-safety-yellow">
                      <span>{group.heading}</span>
                      <ChevronDown
                        className={cn(
                          "h-4 w-4 transition-transform duration-150",
                          activeGroup === group.heading && "rotate-180"
                        )}
                      />
                    </div>
                  </div>
                  <div
                    className={cn(
                      "mt-2 space-y-1 pl-3",
                      activeGroup === group.heading ? "block" : "hidden"
                    )}
                  >
                    {group.links.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="block rounded-none px-2 py-1 text-sm font-medium text-safety-gray transition hover:bg-white hover:text-safety-black"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </>
              )}
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
  const [mobileMenu, setMobileMenu] = useState<string | null>(null);
  const [mobileResourcesDownloadsOpen, setMobileResourcesDownloadsOpen] =
    useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 shadow-panel">
      <div className="bg-safety-black text-xs text-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6">
          <p>{companyInfo.hours}</p>
          <a
            href={`tel:${companyInfo.phone.replace(/\s+/g, "")}`}
            className="inline-flex items-center gap-2 font-semibold text-white"
          >
            <Phone className="h-3.5 w-3.5" />
            {companyInfo.phone}
          </a>
        </div>
      </div>

      <div className="border-b-4 border-safety-yellow bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6">
          <Link href="/" className="flex items-center">
            <div className="relative h-16 w-48 overflow-hidden sm:h-20 sm:w-64">
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
            {desktopMenus.map((menu) =>
              menu.kind === "link" ? (
                <Link
                  key={menu.label}
                  href={menu.href}
                  className={cn(
                    "inline-flex h-full items-center px-4 py-6 text-sm font-black uppercase tracking-wide transition-colors",
                    pathname.startsWith(menu.href)
                      ? "text-safety-yellow"
                      : "text-safety-black hover:text-safety-yellow"
                  )}
                >
                  {menu.label}
                </Link>
              ) : (
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
              )
            )}

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
            className="hidden rounded-none bg-safety-yellow px-5 py-2 text-sm font-extrabold uppercase text-white transition hover:bg-safety-black hover:text-safety-yellow lg:inline-block"
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
          <div className="fixed inset-0 z-[60] lg:hidden">
            <button
              type="button"
              className="absolute inset-0 bg-black/35"
              onClick={() => {
                setOpen(false);
                setMobileMenu(null);
                setMobileResourcesDownloadsOpen(false);
              }}
              aria-label="Close menu backdrop"
            />

            <aside className="no-scrollbar absolute left-0 top-0 h-dvh w-[min(86vw,22rem)] overflow-y-auto overscroll-contain border-r border-black/10 bg-white shadow-panel">
              <div className="flex items-center justify-between border-b border-black/10 px-4 py-4">
                <p className="text-sm font-black uppercase tracking-wide text-safety-black">
                  Menu
                </p>
                <button
                  type="button"
                  className="inline-flex rounded-sm border border-safety-black p-2 text-safety-black"
                  onClick={() => {
                    setOpen(false);
                    setMobileMenu(null);
                    setMobileResourcesDownloadsOpen(false);
                  }}
                  aria-label="Close menu"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="px-4 py-4">
                <nav className="flex flex-col gap-3">
                  <Link
                    href="/about"
                    className={cn(
                      "text-sm font-bold uppercase tracking-wide",
                      pathname === "/about"
                        ? "text-safety-yellow"
                        : "text-safety-black"
                    )}
                    onClick={() => setOpen(false)}
                  >
                    About Us
                  </Link>

                  <div className="rounded-none border border-black/10 bg-safety-light/60">
                    <button
                      type="button"
                      className="flex w-full items-center justify-between px-3 py-3 text-left text-sm font-black uppercase tracking-wide text-safety-black"
                      onClick={() =>
                        setMobileMenu((current) =>
                          current === "products" ? null : "products"
                        )
                      }
                    >
                      Products
                      <ChevronDown
                        className={cn(
                          "h-4 w-4 transition-transform",
                          mobileMenu === "products" && "rotate-180"
                        )}
                      />
                    </button>

                    {mobileMenu === "products" ? (
                      <div className="mx-3 mb-3 rounded-none border border-black/10 bg-white p-3">
                        <div className="space-y-3">
                          <Link
                            href="/products/ultraheal-2106"
                            className="block border-l-4 border-safety-yellow pl-3 text-sm font-black uppercase tracking-wide text-safety-black hover:text-safety-yellow"
                            onClick={() => setOpen(false)}
                          >
                            Crystalline Durability Admixture
                          </Link>

                          <div>
                            <p className="border-l-4 border-safety-yellow pl-3 text-xs font-black uppercase tracking-[0.2em] text-safety-gray">
                              Concrete Admixtures
                            </p>
                            <div className="mt-2 space-y-1 pl-4">
                              <Link
                                href="/products/ultramix-pc-m"
                                className="block py-1 text-sm font-medium text-safety-gray hover:text-safety-black"
                                onClick={() => setOpen(false)}
                              >
                                ULTRAMIX PC-M
                              </Link>
                              <Link
                                href="/products/ultramix-pc-h"
                                className="block py-1 text-sm font-medium text-safety-gray hover:text-safety-black"
                                onClick={() => setOpen(false)}
                              >
                                ULTRAMIX PC-H
                              </Link>
                            </div>
                          </div>

                          <div>
                            <p className="border-l-4 border-safety-yellow pl-3 text-xs font-black uppercase tracking-[0.2em] text-safety-gray">
                              Corrosion Inhibitors
                            </p>
                            <div className="mt-2 space-y-1 pl-4">
                              <Link
                                href="/products/ultrashield-ttci"
                                className="block py-1 text-sm font-medium text-safety-gray hover:text-safety-black"
                                onClick={() => setOpen(false)}
                              >
                                UltraShield TTCI
                              </Link>
                              <Link
                                href="/products/ultraguard-st"
                                className="block py-1 text-sm font-medium text-safety-gray hover:text-safety-black"
                                onClick={() => setOpen(false)}
                              >
                                UltraGuard ST
                              </Link>
                            </div>
                          </div>

                          <div>
                            <p className="border-l-4 border-safety-yellow pl-3 text-xs font-black uppercase tracking-[0.2em] text-safety-gray">
                              Curing Compounds
                            </p>
                            <div className="mt-2 space-y-1 pl-4">
                              <Link
                                href="/products/ultracure-rb7"
                                className="block py-1 text-sm font-medium text-safety-gray hover:text-safety-black"
                                onClick={() => setOpen(false)}
                              >
                                UltraCure RB7
                              </Link>
                              <Link
                                href="/products/ultracure-wb"
                                className="block py-1 text-sm font-medium text-safety-gray hover:text-safety-black"
                                onClick={() => setOpen(false)}
                              >
                                UltraCure WB
                              </Link>
                            </div>
                          </div>

                          <div>
                            <p className="border-l-4 border-safety-yellow pl-3 text-xs font-black uppercase tracking-[0.2em] text-safety-gray">
                              Joint Sealants
                            </p>
                            <div className="mt-2 space-y-1 pl-4">
                              <Link
                                href="/products/polysulphide-sealant-ps"
                                className="block py-1 text-sm font-medium text-safety-gray hover:text-safety-black"
                                onClick={() => setOpen(false)}
                              >
                                Polysulphide Sealant (PS)
                              </Link>
                              <Link
                                href="/products/ultraseal-pu"
                                className="block py-1 text-sm font-medium text-safety-gray hover:text-safety-black"
                                onClick={() => setOpen(false)}
                              >
                                Polyurethane Sealant (PU)
                              </Link>
                              <Link
                                href="/products/ultraprime"
                                className="block py-1 text-sm font-medium text-safety-gray hover:text-safety-black"
                                onClick={() => setOpen(false)}
                              >
                                UltraPrime
                              </Link>
                            </div>
                          </div>

                          <div>
                            <p className="border-l-4 border-safety-yellow pl-3 text-xs font-black uppercase tracking-[0.2em] text-safety-gray">
                              Waterproofing Systems
                            </p>
                            <div className="mt-2 space-y-1 pl-4">
                              <Link
                                href="/products/ultradeck-seal"
                                className="block py-1 text-sm font-medium text-safety-gray hover:text-safety-black"
                                onClick={() => setOpen(false)}
                              >
                                UltraDeck Seal
                              </Link>
                              <Link
                                href="/products/ultraliquid-plus"
                                className="block py-1 text-sm font-medium text-safety-gray hover:text-safety-black"
                                onClick={() => setOpen(false)}
                              >
                                UltraLiquid Plus
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : null}
                  </div>

                  <Link
                    href="/sectors"
                    className={cn(
                      "text-sm font-bold uppercase tracking-wide",
                      pathname === "/sectors"
                        ? "text-safety-yellow"
                        : "text-safety-black"
                    )}
                    onClick={() => setOpen(false)}
                  >
                    Sectors
                  </Link>

                  <div className="rounded-none border border-black/10 bg-safety-light/60">
                    <button
                      type="button"
                      className="flex w-full items-center justify-between px-3 py-3 text-left text-sm font-black uppercase tracking-wide text-safety-black"
                      onClick={() =>
                        setMobileMenu((current) => {
                          const next = current === "resources" ? null : "resources";
                          if (next !== "resources") {
                            setMobileResourcesDownloadsOpen(false);
                          }
                          return next;
                        })
                      }
                    >
                      Resources
                      <ChevronDown
                        className={cn(
                          "h-4 w-4 transition-transform",
                          mobileMenu === "resources" && "rotate-180"
                        )}
                      />
                    </button>

                    {mobileMenu === "resources" ? (
                      <div className="mx-3 mb-3 rounded-none border border-black/10 bg-white p-3">
                        <div className="space-y-2">
                          <div
                            className="cursor-pointer rounded-none border border-black/10 bg-safety-light/30 p-2.5"
                            role="button"
                            tabIndex={0}
                            aria-expanded={mobileResourcesDownloadsOpen}
                            onClick={(event) => {
                              const target = event.target as HTMLElement;
                              if (target.closest("a")) {
                                return;
                              }
                              setMobileResourcesDownloadsOpen((current) => !current);
                            }}
                            onKeyDown={(event) => {
                              if (event.key === "Enter" || event.key === " ") {
                                event.preventDefault();
                                setMobileResourcesDownloadsOpen((current) => !current);
                              }
                            }}
                          >
                            <div className="flex w-full items-center justify-between border-l-4 border-safety-yellow pl-3 text-left text-sm font-black uppercase tracking-wide text-safety-black">
                              Downloads
                              <ChevronDown
                                className={cn(
                                  "h-4 w-4 transition-transform",
                                  mobileResourcesDownloadsOpen && "rotate-180"
                                )}
                              />
                            </div>

                            {mobileResourcesDownloadsOpen ? (
                              <div className="mt-2 space-y-1 pl-3">
                                <Link
                                  href="/Prodcut-Catlouge-UltraChem.pdf"
                                  className="block rounded-none px-2 py-1 text-sm font-medium text-safety-gray hover:text-safety-black"
                                  onClick={() => setOpen(false)}
                                >
                                  Product Catalogue
                                </Link>
                                <Link
                                  href="/resources#downloads"
                                  className="block rounded-none px-2 py-1 text-sm font-medium text-safety-gray hover:text-safety-black"
                                  onClick={() => setOpen(false)}
                                >
                                  Technical Data Sheets
                                </Link>
                                <Link
                                  href="/Brochure-UltraChem.pdf"
                                  className="block rounded-none px-2 py-1 text-sm font-medium text-safety-gray hover:text-safety-black"
                                  onClick={() => setOpen(false)}
                                >
                                  Brochures
                                </Link>
                              </div>
                            ) : null}
                          </div>

                          <Link
                            href="/gallery"
                            className="block rounded-none px-2 py-1 text-sm font-medium text-safety-gray hover:text-safety-black"
                            onClick={() => setOpen(false)}
                          >
                            Gallery
                          </Link>
                        </div>
                      </div>
                    ) : null}
                  </div>

                  <Link
                    href="/careers"
                    className={cn(
                      "text-sm font-bold uppercase tracking-wide",
                      pathname === "/careers"
                        ? "text-safety-yellow"
                        : "text-safety-black"
                    )}
                    onClick={() => setOpen(false)}
                  >
                    Careers
                  </Link>
                  <Link
                    href="/contact"
                    className={cn(
                      "text-sm font-bold uppercase tracking-wide",
                      pathname === "/contact"
                        ? "text-safety-yellow"
                        : "text-safety-black"
                    )}
                    onClick={() => setOpen(false)}
                  >
                    Contact
                  </Link>
                  <Link
                    href="/contact"
                    className="mt-2 inline-flex w-fit bg-safety-yellow px-4 py-2 text-xs font-black uppercase text-white"
                    onClick={() => {
                      setOpen(false);
                      setMobileMenu(null);
                      setMobileResourcesDownloadsOpen(false);
                    }}
                  >
                    Get A Quote
                  </Link>
                </nav>
              </div>
            </aside>
          </div>
        ) : null}
      </div>
    </header>
  );
}
