/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_GITHUB_TOTAL_CONTRIBUTIONS: number;
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
