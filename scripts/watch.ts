import esbuild from "$esbuild";
import config from "../esbuild.config.mts";

(async () => {
  try {
    const ctx = await esbuild.context(config);
    await ctx.watch();
  } catch (_error) {
    Deno.exit(1);
  }
})();
