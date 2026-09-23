// Only applied for production builds (GitHub Pages export) so `pnpm dev`
// keeps serving at the plain localhost root.
export const BASE_PATH = process.env.NODE_ENV === "production" ? "/polygon" : "";

export function withBasePath(path: string): string {
  return `${BASE_PATH}${path}`;
}
