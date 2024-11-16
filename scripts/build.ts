import * as esbuild from "$esbuild";
import config from "../esbuild.config.mts";

esbuild.build(config).catch(() => Deno.exit(1));
