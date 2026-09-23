import type { NextConfig } from "next";
import { BASE_PATH } from "./src/shared/config/base-path";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: "export",
  basePath: BASE_PATH,
  assetPrefix: `${BASE_PATH}/`,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
