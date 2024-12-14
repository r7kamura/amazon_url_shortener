import { defineConfig } from "vite";
import { crx } from "@crxjs/vite-plugin";
import { manifest } from "./manifest";

export default defineConfig({
  plugins: [crx({ manifest })],
});
