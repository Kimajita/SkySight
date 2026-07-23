import fs from 'fs';
const fs = require('fs');

window.onload = function () {
    getImages();
    fillGallery();
}

const gallery = {
    elem : getElementById("myGallery"),
    images: [],

}

function getImages() {
    let images = fs.readdirSync('./imgs');
    console.log(images);
}

function fillGallery() {
}
