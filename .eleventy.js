module.exports = function (eleventyConfig) {
    // Add a filter using the Config API
    eleventyConfig.addLiquidFilter("makeUppercase", function (value) {});
    eleventyConfig.addPassthroughCopy("assets");
    eleventyConfig.addPassthroughCopy("media");

};
