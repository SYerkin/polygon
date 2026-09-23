import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/entities/product/types";
import { formatTenge } from "@/entities/product/data";

export function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={`/product/${product.slug}`}
      className="flex w-24 shrink-0 snap-start flex-col gap-1.5 xs:w-28"
    >
      <div className="relative aspect-square w-full">
        <Image
          src={product.image.src}
          alt={product.image.alt}
          fill
          sizes="120px"
          className="object-contain"
        />
      </div>
      <span className="truncate font-sans text-[9px] font-semibold leading-[10px] tracking-[-0.02em] text-ink">
        {product.name}
      </span>
      <span className="font-sans text-[9px] leading-3 text-muted-2">
        {formatTenge(product.priceTenge)}
      </span>
    </Link>
  );
}
