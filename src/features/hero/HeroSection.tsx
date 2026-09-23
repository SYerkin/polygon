import Image from "next/image";
import Link from "next/link";
import { Mascot } from "./Mascot";
import { withBasePath } from "@/shared/config/base-path";

export function HeroSection() {
  return (
    <section
      aria-label="Almurt Collection 2026"
      className="relative aspect-[393/474] w-full overflow-hidden"
    >
      {/* Background gradient */}
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-[99%]"
        style={{
          background:
            "linear-gradient(180deg, var(--color-hero-top) 0%, var(--color-hero-mid) 45%, var(--color-hero-bottom) 100%)",
        }}
      />

      {/* Almaty skyline photo */}
      <div
        aria-hidden
        className="absolute inset-x-0 top-[17.9%] h-[72.8%] overflow-hidden opacity-85"
        style={{
          maskImage: "linear-gradient(180deg, transparent 0, #000 90px)",
          WebkitMaskImage: "linear-gradient(180deg, transparent 0, #000 90px)",
        }}
      >
        <Image
          src={withBasePath("/media/hero/almaty.png")}
          alt="Панорама Алматы"
          fill
          priority
          sizes="(max-width: 430px) 130vw, 560px"
          className="object-cover object-top"
        />
      </div>
      <div
        aria-hidden
        className="absolute inset-x-0 top-[17.9%] h-[25.3%]"
        style={{
          background:
            "linear-gradient(180deg, var(--color-hero-bottom) 0%, color-mix(in srgb, var(--color-hero-bottom) 60%, transparent) 40%, transparent 100%)",
        }}
      />
      <div aria-hidden className="absolute inset-x-0 top-[17.9%] h-[72.8%] bg-cream/40" />
      <div
        aria-hidden
        className="absolute inset-x-0 top-[67.5%] h-[33.8%]"
        style={{
          background:
            "linear-gradient(180deg, transparent 0%, color-mix(in srgb, var(--color-cream) 85%, transparent) 45%, var(--color-cream) 68%)",
        }}
      />

      {/* Pink tagline */}
      <p className="absolute left-[5.6%] top-[2.5%] font-sans text-xs font-bold leading-[13px] tracking-[-0.02em] text-pink">
        Қарапайым заттарда
        <br />
        үлкен мәдениет
      </p>
      <div aria-hidden className="absolute left-[5.6%] top-[9.3%] h-px w-[15px] bg-pink" />

      {/* Hero title */}
      <h1 className="absolute left-[5.3%] top-[11%] whitespace-nowrap font-display text-[clamp(34px,10.5vw,42px)] uppercase leading-[0.88] tracking-[-0.04em] text-ink">
        ALMURT
        <br />
        COLLECTION
        <br />
        2026
      </h1>

      {/* Side text */}
      <p className="absolute right-[2%] top-[27.8%] hidden max-w-[28%] font-sans text-[9px] font-medium uppercase leading-[12px] tracking-[0.08em] text-muted xs:block">
        Kazakh
        <br />
        traditions
        <br />
        in a contemporary
        <br />
        form.
      </p>

      <Mascot />

      {/* Handwritten notes */}
      <div className="absolute left-[5.6%] top-[32.1%] hidden w-[23%] -rotate-[12deg] xs:block">
        <p className="font-script text-2xl leading-[25px] text-pink">
          Good
          <br />
          &nbsp;Culture
          <br />
          Better
          <br />
          &nbsp;People
        </p>
        <div aria-hidden className="mt-2.5 ml-1.5 h-px w-10 rounded bg-pink" />
      </div>

      {/* CTA */}
      <Link
        href="#objects-to-wear"
        aria-label="Смотреть коллекцию"
        className="absolute right-[5.6%] top-[85%] flex h-11 w-11 items-center justify-center rounded-full bg-pink shadow-[0_6px_16px_rgba(211,101,152,0.35)] transition-colors hover:bg-pink-hover"
      >
        <svg width="16" height="12" viewBox="0 0 16 12" fill="none" aria-hidden>
          <path
            d="M1 6H15M10 1L15 6L10 11"
            stroke="white"
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </Link>

      {/* Pagination */}
      <div className="absolute left-[5.6%] top-[90.1%] flex gap-[11px]">
        {["01", "02", "03"].map((n, i) => (
          <div key={n} className="flex w-[19px] flex-col gap-1.5">
            <span
              className={`font-sans text-[8px] leading-[11px] ${
                i === 0 ? "font-semibold text-ink" : "font-medium text-hairline"
              }`}
            >
              {n}
            </span>
            <div className={i === 0 ? "h-[1.5px] bg-ink" : "h-px bg-hairline"} />
          </div>
        ))}
      </div>
    </section>
  );
}
