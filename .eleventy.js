const pluginLocalRespimg = require('eleventy-plugin-local-respimg');
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

    config.addPlugin(pluginLocalRespimg) {
        folders: {
            source: 'src',
            output: 'public',
        },
        images: {
            resize: {
                min: 250,
                max: 1500,
                step: 150
            },
            sizes: 100 vw,
            lazy: true,
            additional: [
                'images/icons/**/*'
            ],
            watch: {
                src: 'images/**/*',
            },
            pngquant: {

            },
            mozjpeg: {

            },
            svgo {

            },
            gifresize: {

            },
            webp: {},
            gifwebp: {}
        }

    }
};
