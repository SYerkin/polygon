import Link from "next/link";
import { homeWearProducts } from "@/entities/product/data";
import { ProductCard } from "./ProductCard";

export function WearSection() {
  return (
    <section id="objects-to-wear">
      <div className="flex items-start justify-between gap-3 px-[22px]">
        <div className="min-w-0">
          <p className="font-sans text-[8px] font-medium uppercase leading-[11px] tracking-[0.14em] text-muted">
            01 / WEAR
          </p>
          <h2 className="font-display text-[clamp(21px,7vw,27px)] uppercase leading-[1.08] tracking-[-0.03em] text-ink">
            OBJECTS TO WEAR
          </h2>
        </div>
        <Link
          href="/catalog"
          className="mt-0.5 flex shrink-0 items-center gap-2 font-sans text-[8px] uppercase leading-[11px] tracking-[0.1em] text-muted"
        >
          VIEW ALL
          <svg width="9" height="8" viewBox="0 0 9 8" fill="none" aria-hidden>
            <path
              d="M0.5 4H8M5 1L8 4L5 7"
              stroke="#5F5A53"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>
      </div>

      <ul className="no-scrollbar mt-6 flex snap-x snap-mandatory gap-6 overflow-x-auto border-t border-hairline px-[22px] pt-4">
        {homeWearProducts.map((product) => (
          <li key={product.slug}>
            <ProductCard product={product} />
          </li>
        ))}
      </ul>
    </section>
  );
}
