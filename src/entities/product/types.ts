export type Product = {
  slug: string;
  name: string;
  category: string;
  priceTenge: number;
  image: {
    src: string;
    width: number;
    height: number;
    alt: string;
  };
};
