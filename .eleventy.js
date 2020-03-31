const htmlmin = require("html-minifier");

module.exports = function (config) {
    // Add a filter using the Config API
    config.addLiquidFilter("makeUppercase", function (value) {});
    config.addPassthroughCopy("static");

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
