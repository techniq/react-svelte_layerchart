import path from "path";
import { sveltePreprocess } from "svelte-preprocess";

export default {
  webpack(config, { isServer }) {
    // Add Svelte loader configuration
    config.module.rules.push({
      test: /\.svelte$/,
      use: [
        {
          loader: "svelte-loader",
          options: {
            preprocess: sveltePreprocess(),
            emitCss: !isServer, // Don't emit CSS for server-side rendering
          },
        },
      ],
    });

    // config.module.rules.push({
    //   // required to prevent errors from Svelte on Webpack 5+, omit on Webpack 4
    //   test: /node_modules\/svelte\/.*\.mjs$/,
    //   resolve: {
    //     fullySpecified: false
    //   }
    // });

    // Resolve svelte imports correctly (including internal paths)
    // Ensure svelte/internal is resolved correctly
    config.resolve.alias = {
      ...config.resolve.alias,
      svelte: path.resolve("node_modules", "svelte/src/runtime"),
      // layerchart: path.resolve('node_modules', 'layerchart'),
      // '@layerstack/utils': path.resolve('node_modules', '@layerstack/utils'),
      // '@layerstack/tailwind': path.resolve('node_modules', '@layerstack/tailwind')
    };

    // Ensure that `.svelte` extension is handled by Webpack
    config.resolve.extensions.push(".svelte");

    // config.resolve.mainFields = ["svelte", "browser", "...", "module", "main"];
    // config.resolve.conditionNames = ["svelte", "browser", "...", "import", "require", "default"];

    return config;
  },
};
