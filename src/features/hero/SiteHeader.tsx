import Link from "next/link";

export function SiteHeader({ cartCount = 2 }: { cartCount?: number }) {
  return (
    <header className="flex items-center gap-4 px-[22px] py-3.5">
      <Link
        href="/"
        className="flex-1 font-logo text-[17px] font-extrabold tracking-[0.14em] text-ink"
      >
        ALMURT
      </Link>

      <button
        type="button"
        aria-label="Переключить язык"
        className="flex h-7 items-center rounded-full border border-ink/[0.18] px-[11px] font-ui text-xs font-semibold tracking-[0.06em] text-ink"
      >
        RU
      </button>

      <Link
        href="/cart"
        aria-label={`Корзина, товаров: ${cartCount}`}
        className="relative flex h-6 w-[22px] items-center justify-center"
      >
        <svg width="22" height="24" viewBox="0 0 22 24" fill="none" aria-hidden>
          <path
            d="M3 7.5H19L18 22H4Z"
            stroke="#141210"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
          <path
            d="M7.5 7.5V6A3.5 3.5 0 0 1 14.5 6V7.5"
            stroke="#141210"
            strokeWidth="1.6"
          />
        </svg>
        {cartCount > 0 && (
          <span className="absolute -right-[9px] -top-2 flex h-[17px] w-[17px] items-center justify-center rounded-full bg-badge-pink font-ui text-[10px] font-bold text-ink">
            {cartCount}
          </span>
        )}
      </Link>

      <button
        type="button"
        aria-label="Открыть меню"
        className="ml-1.5 flex w-4 flex-col gap-[5px]"
      >
        <span className="h-[1.6px] w-full bg-ink" />
        <span className="h-[1.6px] w-full bg-ink" />
      </button>
    </header>
  );
}
