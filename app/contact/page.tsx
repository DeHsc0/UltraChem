import { Clock3, Mail, MapPin, Phone } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { GsapReveal } from "@/components/gsap-reveal";
import { companyInfo } from "@/lib/site-data";

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Contact Us"
        subtitle="Speak with UltraChem for product recommendations, technical guidance, and project-specific support."
        accent="Get In Touch"
        imageIndex={11}
      />

      <section className="container-shell py-10 sm:py-14">
        <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          <GsapReveal>
            <article className="panel border-l-4 border-safety-yellow p-7">
              <h2 className="text-3xl font-black uppercase">Contact Details</h2>
              <div className="mt-6 space-y-4 text-sm">
                <p className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-4 w-4 text-safety-yellow" />
                  {companyInfo.location}
                </p>
                <p className="flex items-start gap-3">
                  <Phone className="mt-0.5 h-4 w-4 text-safety-yellow" />
                  {companyInfo.phone}
                </p>
                <p className="flex items-start gap-3">
                  <Mail className="mt-0.5 h-4 w-4 text-safety-yellow" />
                  {companyInfo.email}
                </p>
                <p className="flex items-start gap-3">
                  <Clock3 className="mt-0.5 h-4 w-4 text-safety-yellow" />
                  {companyInfo.hours}
                </p>
              </div>

              <div className="mt-6 min-h-[220px] border border-black/10 bg-safety-light p-4">
                <p className="text-xs font-black uppercase tracking-[0.2em] text-safety-gray">
                  Map Placeholder
                </p>
                <p className="mt-2 text-sm text-safety-gray">
                  Embed Google Maps location here in production deployment.
                </p>
              </div>
            </article>
          </GsapReveal>

          <GsapReveal delay={0.15}>
            <article className="panel p-7">
              <h2 className="text-3xl font-black uppercase">Send Inquiry</h2>
              <form className="mt-6 grid gap-4 sm:grid-cols-2">
                <label className="text-sm font-semibold uppercase tracking-wide text-safety-gray">
                  Name
                  <input
                    type="text"
                    className="mt-2 w-full border border-black/20 px-3 py-2 outline-none transition focus:border-safety-yellow"
                    placeholder="Your name"
                  />
                </label>
                <label className="text-sm font-semibold uppercase tracking-wide text-safety-gray">
                  Phone
                  <input
                    type="tel"
                    className="mt-2 w-full border border-black/20 px-3 py-2 outline-none transition focus:border-safety-yellow"
                    placeholder="+91"
                  />
                </label>
                <label className="sm:col-span-2 text-sm font-semibold uppercase tracking-wide text-safety-gray">
                  Email
                  <input
                    type="email"
                    className="mt-2 w-full border border-black/20 px-3 py-2 outline-none transition focus:border-safety-yellow"
                    placeholder="name@company.com"
                  />
                </label>
                <label className="sm:col-span-2 text-sm font-semibold uppercase tracking-wide text-safety-gray">
                  Requirement
                  <textarea
                    rows={6}
                    className="mt-2 w-full border border-black/20 px-3 py-2 outline-none transition focus:border-safety-yellow"
                    placeholder="Share your project details and product requirements."
                  />
                </label>
                <button
                  type="submit"
                  className="sm:col-span-2 w-fit bg-safety-yellow px-5 py-3 text-sm font-black uppercase text-white hover:bg-safety-black hover:text-safety-yellow"
                >
                  Submit Inquiry
                </button>
              </form>
            </article>
          </GsapReveal>
        </div>
      </section>
    </>
  );
}
