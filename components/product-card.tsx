import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { getAsset, type Product } from "@/lib/site-data";

type ProductCardProps = {
  product: Product;
  imageIndex: number;
};

export function ProductCard({ product, imageIndex }: ProductCardProps) {
  return (
    <article className="group flex h-full flex-col overflow-hidden border border-black/10 bg-white shadow-panel">
      <div className="relative h-48 overflow-hidden">
        <Image
          src={getAsset(imageIndex)}
          alt={product.name}
          fill
          className="object-cover transition duration-500 group-hover:scale-110"
        />
      </div>

      <div className="flex flex-1 flex-col p-6">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-safety-gray">
          {product.category}
        </p>
        <h3 className="mt-2 text-2xl font-black uppercase text-safety-black">
          {product.name}
        </h3>
        <p className="mt-3 text-sm text-safety-gray">{product.subtitle}</p>
        <Link
          href={`/products/${product.slug}`}
          className="mt-auto pt-5 inline-flex items-center gap-2 border-b-2 border-safety-yellow pb-1 text-sm font-black uppercase text-safety-black hover:text-safety-yellow"
        >
          View Details
          <ArrowUpRight className="h-4 w-4" />
        </Link>
      </div>
    </article>
  );
}
