# Алмұрт — стек и версии библиотек

**Срез: 23.09.2026.** Конкретная отправная точка для frontend-проекта. Архитектура — в `almurt_architecture.md`. После установки коммитить `pnpm-lock.yaml`, зависимости обновлять отдельными изменениями с проверкой сборки.

## Выбранный стек

**Next.js App Router + React + TypeScript + Tailwind CSS + Motion + next-intl.** Корзина — Zustand. Если в hero нужна настоящая 3D-сцена, подключить Three.js через React Three Fiber только на главной. Для векторного маскота сначала использовать SVG и Motion.

## Среда

| Инструмент | Версия | Почему |
| --- | --- | --- |
| Node.js | 24.x LTS | Зафиксировать точный патч в `.nvmrc` и CI при создании репозитория; Next.js 16 требует Node ≥20.9. |
| pnpm | `12.6.0` | Указать `packageManager` в `package.json` и коммитить lockfile. |
| TypeScript | `5.9.3` | Консервативный выбор на старте. Выпущенный 7.0.2 проверить отдельным обновлением с линтером и сборкой. |

## Основные пакеты

| Пакет | Версия | Назначение |
| --- | --- | --- |
| `next` | `16.3.6` | App Router, серверные страницы, маршруты и изображения. |
| `react`, `react-dom` | `19.3.0` | Компоненты и рендеринг. |
| `next-intl` | `4.14.6` | Маршруты и словари RU/KZ. |
| `motion` | `13.4.2` | UI-переходы и анимация SVG; импорт из `motion/react`. |
| `zustand` | `5.0.15` | Небольшое клиентское состояние корзины. |
| `zod` | `4.6.5` | Проверка форм и внешних API-данных. |
| `lucide-react` | `1.47.0` | Иконки; можно убрать, если хватит фирменного SVG-набора. |
| `tailwindcss`, `@tailwindcss/postcss` | `4.3.3` | Стили и PostCSS-интеграция. |

## Разработка и типы

| Пакет | Версия | Назначение |
| --- | --- | --- |
| `typescript` | `5.9.3` | Строгая типизация. |
| `@types/node` | `24.13.6` | Типы выбранной ветки Node. |
| `@types/react`, `@types/react-dom` | `19.3.0` | Типы React. |
| `eslint` | `9.39.5` | Проверка кода на ветке 9. |
| `eslint-config-next` | `16.3.6` | Правила Next.js той же версии, что и `next`. |
| `@playwright/test` | `1.63.0` | Тест критического мобильного пути покупки. |

## Пакеты для 3D — только после прототипа

| Пакет | Версия | Назначение |
| --- | --- | --- |
| `three` | `0.186.0` | WebGL-сцена и GLB. |
| `@react-three/fiber` | `9.8.0` | React-рендерер Three.js; peer-диапазон включает React 19.3. |
| `@react-three/drei` | `10.7.8` | Готовые 3D-компоненты, если они действительно понадобятся. |
| `@types/three` | `0.186.0` | Типы той же ревизии Three.js. |

Для одного плоского SVG-маскота эти пакеты не требуются. 3D загружать только из `features/hero` динамическим импортом и предусмотреть статичный постер. Не импортировать `three` из общего layout, каталога и товарной страницы.

## Пример `package.json`

```json
{
  "name": "almurt-storefront",
  "private": true,
  "version": "0.1.0",
  "packageManager": "pnpm@12.6.0",
  "engines": { "node": "^24.0.0" },
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "eslint .",
    "typecheck": "tsc --noEmit",
    "test:e2e": "playwright test"
  },
  "dependencies": {
    "next": "16.3.6",
    "react": "19.3.0",
    "react-dom": "19.3.0",
    "next-intl": "4.14.6",
    "motion": "13.4.2",
    "zustand": "5.0.15",
    "zod": "4.6.5",
    "lucide-react": "1.47.0"
  },
  "devDependencies": {
    "tailwindcss": "4.3.3",
    "@tailwindcss/postcss": "4.3.3",
    "typescript": "5.9.3",
    "@types/node": "24.13.6",
    "@types/react": "19.3.0",
    "@types/react-dom": "19.3.0",
    "eslint": "9.39.5",
    "eslint-config-next": "16.3.6",
    "@playwright/test": "1.63.0"
  }
}
```

Добавление 3D позже:

```bash
pnpm add -E three@0.186.0 @react-three/fiber@9.8.0 @react-three/drei@10.7.8
pnpm add -DE @types/three@0.186.0
```

Проверенные опубликованные версии и peer-ограничения ещё не означают успешную сборку готового проекта. При создании репозитория настроить PostCSS и ESLint для App Router, затем выполнить `pnpm install`, `pnpm lint`, `pnpm typecheck`, `pnpm build` и Playwright на мобильном viewport.

## Что не добавлять без потребности

- Redux, TanStack Query и Axios: серверному каталогу достаточно `fetch`, а небольшой корзине — Zustand.
- GSAP: Motion и CSS закрывают обычные UI-переходы; GSAP подключать при сложной постановочной анимации.
- Rive: нужен только если будет подготовленный `.riv`-файл и несколько интерактивных состояний персонажа.
- Монорепозиторий, микрофронтенды и платёжный SDK в браузере: на старте они не нужны; платежи и секреты остаются на сервере.

## Источники версий и совместимости

Проверено по npm registry 23.09.2026: [Next.js](https://www.npmjs.com/package/next), [React](https://www.npmjs.com/package/react), [Tailwind](https://www.npmjs.com/package/tailwindcss), [Motion](https://www.npmjs.com/package/motion), [React Three Fiber](https://www.npmjs.com/package/@react-three/fiber), [Three.js](https://www.npmjs.com/package/three), [next-intl](https://www.npmjs.com/package/next-intl). Документация: [Next.js App Router](https://nextjs.org/docs/app), [производительность React Three Fiber](https://r3f.docs.pmnd.rs/advanced/scaling-performance).
