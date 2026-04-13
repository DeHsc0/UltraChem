import Link from "next/link";

export default function NotFoundPage() {
  return (
    <section className="container-shell py-24 text-center">
      <p className="section-kicker">404</p>
      <h1 className="mt-4 text-5xl font-black uppercase">Page Not Found</h1>
      <p className="mt-4 text-safety-gray">
        The page you requested does not exist.
      </p>
      <Link
        href="/"
        className="mt-6 inline-block bg-safety-yellow px-5 py-3 text-sm font-black uppercase text-white hover:bg-safety-black hover:text-safety-yellow"
      >
        Back To Home
      </Link>
    </section>
  );
}
