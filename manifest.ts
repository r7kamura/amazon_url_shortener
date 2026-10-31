import { defineManifest } from "@crxjs/vite-plugin";

const matches = [
  "https://smile.amazon.co.uk/*",
  "https://smile.amazon.de/*",
  "https://smile.amazon.com/*",
  "https://www.amazon.ae/*",
  "https://www.amazon.au/*",
  "https://www.amazon.ca/*",
  "https://www.amazon.cn/*",
  "https://www.amazon.co.jp/*",
  "https://www.amazon.co.uk/*",
  "https://www.amazon.com/*",
  "https://www.amazon.com.au/*",
  "https://www.amazon.com.be/*",
  "https://www.amazon.com.br/*",
  "https://www.amazon.com.mx/*",
  "https://www.amazon.com.tr/*",
  "https://www.amazon.de/*",
  "https://www.amazon.eg/*",
  "https://www.amazon.es/*",
  "https://www.amazon.fr/*",
  "https://www.amazon.ie/*",
  "https://www.amazon.in/*",
  "https://www.amazon.it/*",
  "https://www.amazon.nl/*",
  "https://www.amazon.pl/*",
  "https://www.amazon.sa/*",
  "https://www.amazon.se/*",
  "https://www.amazon.sg/*",
];

export const manifest = defineManifest({
  manifest_version: 3,
  name: "Amazon URL Shortener",
  description: "Automatically shorten Amazon product URL.",
  version: "1.6.0",
  icons: {
    "16": "images/icon16.png",
    "48": "images/icon48.png",
    "128": "images/icon128.png",
  },
  content_scripts: [
    {
      matches,
      run_at: "document_end",
      js: ["src/main.ts"],
    },
    {
      matches,
      run_at: "document_start",
      js: ["src/history_guard.ts"],
      // @ts-expect-error crxjs types do not include world yet.
      world: "MAIN",
    },
  ],
});
