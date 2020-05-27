const htmlmin = require("html-minifier");
const ErrorOverlay = require("eleventy-plugin-error-overlay");
const typesetPlugin = require('eleventy-plugin-typeset')

module.exports = function (config) {
    // Add a filter using the Config API
    config.addLiquidFilter("makeUppercase", function (value) {});
    config.addPassthroughCopy("static");
    
    config.addPlugin(typesetPlugin());
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
};
