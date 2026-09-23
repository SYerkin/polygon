import { MarqueeBar } from "@/features/hero/MarqueeBar";
import { SiteHeader } from "@/features/hero/SiteHeader";
import { HeroSection } from "@/features/hero/HeroSection";
import { WearSection } from "@/features/catalog/WearSection";
import { DeliveryBanner } from "@/shared/ui/DeliveryBanner";

export default function HomePage() {
  return (
    <div className="min-h-dvh w-full overflow-x-clip bg-cream">
      <MarqueeBar />
      <SiteHeader />
      <HeroSection />
      <WearSection />
      <DeliveryBanner />
    </div>
  );
}
