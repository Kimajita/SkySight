const page = document.getElementById("body");
window.onload = function () {
    getImages();
    fillGallery();
}

const gallery = {
    element: document.getElementById("myGallery"),
    source: "imgs/webp/",
    suffix: ".webp",
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

        images[i] = nums.toString().replace(/\D/g,"");
    }
    gallery.images = images;
}

function fillGallery() {
    for (let i = 1; i < gallery.length; i++) {
        let id = images[i];

        const container = document.createElement("div");
        const overlay = document.createElement("div");
        const button = document.createElement("button");
        const popup = document.createElement("img");
        const item = document.createElement("img");

        container.setAttribute("class", "container");
        overlay.setAttribute("class", "overlay");
        button.setAttribute("class", "popBtn");
        popup.setAttribute("class", "popUp");
        item.setAttribute("class", "item");

        container.id = "container-" + id;
        overlay.id = "overlay-" + id;
        button.id = "button-" + id;
        popup.id = "popup-" + id;
        item.id = "item-" + id;

        item.setAttribute("loading", "lazy");
        item.src = gallery.source + id + gallery.suffix;
        container.appendChild(item);

        popup.setAttribute("popover", "auto");
        popup.src = gallery.source + id + gallery.suffix;
        popup.addEventListener("click", function () { this.togglePopover(); });
        page.appendChild(popup);

        button.innerText = id;
        button.setAttribute("popovertarget", popup.id);
        overlay.appendChild(button);
        container.appendChild(overlay);

        container.addEventListener("mouseover", function () { display(overlay) })
        container.addEventListener("mouseleave", function () { hide(overlay) });

        gallery.element.appendChild(container);
    }
}

function display(elem) { elem.setAttribute("style", "display: block;"); }

function hide(elem) { elem.setAttribute("style", "display: none;"); }
