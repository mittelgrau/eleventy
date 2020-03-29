const fg = require('fast-glob');
const sharp = require('sharp');
const rename = require('rename');

const sizes = {
    lazyload: 100,
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1200
};

const isVideo = filename => filename.endsWith('.mp4');

const images = fg.sync(['./static/images/*.png', './static/images/*.jpg', './static/images/*.mp4']);

images.forEach(image => {
    for (let size in sizes) {
        let screenSize = sizes[size];
        let imageName = rename(image, {
            dirname: '',
            suffix: `@${screenSize}`
        });
        if (!isVideo(image)) {
            sharp(image)
                .resize(screenSize)
                .withMetadata()
                .toFile(`./static/images/resized/${imageName}`);
        }
    }
});
