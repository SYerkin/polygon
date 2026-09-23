import type { Product } from "./types";
import { withBasePath } from "@/shared/config/base-path";

// Placeholder until GET /products is wired up per almurt_architecture.md.
export const homeWearProducts: Product[] = [
  {
    slug: "jurek",
    name: "Jürek",
    category: "Шоппер",
    priceTenge: 9990,
    image: {
      src: withBasePath("/media/products/bag.png"),
      width: 716,
      height: 716,
      alt: "Шоппер Jürek",
    },
  },
  {
    slug: "basymdy-qatyrma",
    name: "Basymdy Qatyrma",
    category: "Кепка",
    priceTenge: 8990,
    image: {
      src: withBasePath("/media/products/cap.png"),
      width: 716,
      height: 716,
      alt: "Кепка Basymdy Qatyrma",
    },
  },
  {
    slug: "termokruzhka",
    name: "Термокружки",
    category: "Термокружка",
    priceTenge: 5990,
    image: {
      src: withBasePath("/media/products/tumbler.png"),
      width: 716,
      height: 716,
      alt: "Термокружки",
    },
  },
];

export function formatTenge(amount: number): string {
  return `${new Intl.NumberFormat("ru-RU").format(amount)} ₸`;
}
