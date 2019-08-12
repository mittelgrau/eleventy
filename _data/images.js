const fg = require('fast-glob');
const rename = require('rename');


const images = fg.sync(['./static/*.png', './static/*.jpg', './static/*.mp4']);

const sizes = {
    lazyload: 100,
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1200
};

const imgArr = [];
const isVideo = filename => filename.endsWith('.mp4');

images.forEach((img) => {

    let imgObject = {
        normal: img,
        video: isVideo(img),
    }
    for (let size in sizes) {

        let imageName = rename(img, {
            dirname: '',
            suffix: `@${sizes[size]}`
        });


        imgObject[`${size}`] = `static/resized/${imageName}`;
    }
    imgArr.push(imgObject);
});

module.exports = imgArr;
