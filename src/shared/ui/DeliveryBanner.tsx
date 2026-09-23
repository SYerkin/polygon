import Link from "next/link";

export function DeliveryBanner() {
  return (
    <Link
      href="/delivery"
      className="mx-[22px] mt-8 mb-10 flex h-[30px] items-center gap-3 rounded-lg bg-banner px-3"
    >
      <svg width="17" height="12" viewBox="0 0 17 12" fill="none" aria-hidden className="shrink-0">
        <rect x="0" y="1" width="10" height="7.5" rx="1.2" fill="#D36598" />
        <path d="M10.5 3.5H13.5L16 6.3V8.5H10.5Z" fill="#D36598" />
        <circle cx="3.5" cy="9.8" r="1.8" fill="#D36598" stroke="#E7E1DA" strokeWidth="1" />
        <circle cx="13" cy="9.8" r="1.8" fill="#D36598" stroke="#E7E1DA" strokeWidth="1" />
      </svg>
      <span className="flex-1 font-sans text-[10px] leading-[14px] text-muted">
        Барлық тапсырыстар бойынша тегін жеткізу
      </span>
      <svg width="10" height="9" viewBox="0 0 10 9" fill="none" aria-hidden className="shrink-0">
        <path
          d="M0.5 4.5H9M5.5 1L9 4.5L5.5 8"
          stroke="#5F5A53"
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </Link>
  );
}
