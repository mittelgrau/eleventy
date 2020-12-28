const htmlmin = require("html-minifier");
const ErrorOverlay = require("eleventy-plugin-error-overlay");
const Image = require("@11ty/eleventy-img");

module.exports = function (config) {
    // Add a filter using the Config API
    config.addLiquidFilter("makeUppercase", function (value) {});
    config.addPassthroughCopy("static");

    config.addPlugin(ErrorOverlay);

    config.addTransform("htmlmin", function (content, outputPath) {
        console.log("this is the outputPath" + outputPath)
        if (outputPath.endsWith(".html")) {
            let minified = htmlmin.minify(content, {
                useShortDoctype: true,
                removeComments: true,
                collapseWhitespace: true
            });
            return minified;
        }

        return content;
    });

    // {% responsiveimage "./src/images/cat.jpg", "photo of my cat", "(min-width: 30em) 50vw, 100vw" %}

    config.addNunjucksAsyncShortcode("responsiveimage", async function(src, alt, sizes = "100vw") {
    if(alt === undefined) {
      // You bet we throw an error on missing alt (alt="" works okay)
      throw new Error(`Missing \`alt\` on responsiveimage from: ${src}`);
    }

    let metadata = await Image(src, {
      widths: [300, 600,800],
      formats: ['webp', 'jpeg', 'avif']
    });

    let lowsrc = metadata.jpeg[0];

    return `<picture>
      ${Object.values(metadata).map(imageFormat => {
        return `  <source type="image/${imageFormat[0].format}" srcset="${imageFormat.map(entry => entry.srcset).join(", ")}" sizes="${sizes}">`;
      }).join("\n")}
        <img
          src="${lowsrc.url}"
          width="${lowsrc.width}"
          height="${lowsrc.height}"
          alt="${alt}">
      </picture>`;
    });


};
