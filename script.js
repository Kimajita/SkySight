window.onload = function () {
    getImages();
    fillGallery();
}

const gallery = {
    element: document.getElementById("myGallery"),
    source: 'imgs/',
    images: [],
    length: 35,
}

let images = new Array(gallery.length);
function getImages() {

    for (let i = 1; i < gallery.length; i++) {
        let nums = [0, 0, 0];
        let arr = Array.from(String(i, Number));
        arr.reverse();

        for (let i = 0; i < 3; i++) { nums[i] = i < arr.length ? arr[i] : 0; }
        nums.reverse();

        images[i] = nums.toString().replace(/\D/g,"") + ".jpg";
    }

    gallery.images = images;
}

function fillGallery() {
    for (let i = 1; i < gallery.length; i++) {
        let img = document.createElement("img");
        let src = "imgs/";
        img.src = src + images[i];
        gallery.element.appendChild(img);
    }
}
