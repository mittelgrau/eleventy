module.exports = function (eleventyConfig) {
    // Add a filter using the Config API
    eleventyConfig.addLiquidFilter("makeUppercase", function (value) {});
    eleventyConfig.addPassthroughCopy("assets");
    eleventyConfig.addPassthroughCopy("media");
    // You can return your Config object (optional).
};
