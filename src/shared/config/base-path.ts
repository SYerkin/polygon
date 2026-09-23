export const BASE_PATH = "/polygon";

export function withBasePath(path: string): string {
  return `${BASE_PATH}${path}`;
}
