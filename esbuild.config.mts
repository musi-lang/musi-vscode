import type { BuildOptions } from "$esbuild";

const config: BuildOptions = {
  entryPoints: ["src/extension.ts"],
  bundle: true,
  platform: "node",
  target: "es2022",
  outdir: "out",
  outbase: "src",
  outExtension: {
    ".js": ".cjs",
  },
  format: "cjs",
  external: ["@narumincho/vscode"],
  loader: {
    ".ts": "ts",
    ".js": "js",
  },
  logLevel: "info",
};

export default config;
