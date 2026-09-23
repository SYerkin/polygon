const MESSAGE = "ТЕГІН ЖЕТКІЗУ";
const MESSAGE_RU = "БЕСПЛАТНАЯ ДОСТАВКА НА ВСЕ ЗАКАЗЫ";

function MarqueeContent() {
  return (
    <div className="flex shrink-0 items-center gap-4 pr-4">
      <span className="whitespace-nowrap text-[11px] font-semibold tracking-[0.12em]">
        {MESSAGE}
      </span>
      <span aria-hidden className="text-[11px]">
        ✦
      </span>
      <span className="whitespace-nowrap text-[11px] font-semibold tracking-[0.12em]">
        {MESSAGE_RU}
      </span>
      <span aria-hidden className="text-[11px]">
        ✦
      </span>
    </div>
  );
}

export function MarqueeBar() {
  return (
    <div
      role="marquee"
      aria-label={`${MESSAGE}. ${MESSAGE_RU}.`}
      className="flex h-7 items-center overflow-hidden bg-header text-header-fg font-ui"
    >
      <div className="flex w-max animate-marquee">
        <MarqueeContent />
        <MarqueeContent />
      </div>
    </div>
  );
}
