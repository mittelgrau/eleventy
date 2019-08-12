module.exports = {
    content: ["./_site/**/*.html", "./_site/*.html"],
    css: ['./static/*.css'],
    //whitelistPatterns: [/red$/],
    extractors: [{
        extractor: class {
            static extract(content) {
                return content.match(/[A-z0-9-:\/]+/g) || []
            }
        },
        extensions: ["html"]
    }]
};
