import { defineConfig } from "vite";
import { crx, type CrxPlugin } from "@crxjs/vite-plugin";
import { manifest } from "./manifest";

// crxjs wraps content scripts in a loader that uses chrome.runtime,
// which is not available in the MAIN world, so use the chunk directly.
const mainWorldContentScripts = (): CrxPlugin => ({
  name: "main-world-content-scripts",
  enforce: "post",
  renderCrxManifest(manifest, bundle) {
    for (const script of manifest.content_scripts ?? []) {
      if ((script as { world?: string }).world !== "MAIN") {
        continue;
      }
      script.js = script.js?.map((fileName) => {
        const chunk = Object.values(bundle).find(
          (output) =>
            output.type === "chunk" &&
            output.isEntry &&
            fileName.startsWith(`assets/${output.name}-loader-`)
        );
        return chunk ? chunk.fileName : fileName;
      });
    }
    return manifest;
  },
});

export default defineConfig({
  plugins: [crx({ manifest }), mainWorldContentScripts()],
});
