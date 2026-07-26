const page = document.querySelector("#body");
const titleImg = document.querySelector(".my-picture");
window.onload = function () {

    let theme = "light";
    if (localStorage.getItem("theme") != null) {
        theme = localStorage.getItem("theme");
    }

    page.setAttribute("data-theme", theme);

    titleImg.id = "002";
    setTitleImg(titleImg.id);

    getImages();
    fillGallery();
}

function setTitleImg(id) {
    let background = "background-image: url('imgs/webp/" + id + ".webp')";
    titleImg.setAttribute("style", background);
}


const nextBtn = document.querySelector("#nav-1");
const lastBtn = document.querySelector("#nav-0");
nextBtn.addEventListener("click", function () { nextTitleImg(); });
lastBtn.addEventListener("click", function () { lastTitleImg(); });
function nextTitleImg() {
    let index = parseInt(titleImg.id);

    index += 1;
    if (index < gallery.length) { titleImg.id = gallery.images[index]; }
    else { titleImg.id = "001"; }
    setTitleImg(titleImg.id);
}
function lastTitleImg() {
    let index = parseInt(titleImg.id);
    index -= 1;

    if (index == 0) { titleImg.id = images[gallery.length - 1]; }
    else { titleImg.id = gallery.images[index]; }
    setTitleImg(titleImg.id);
}

const gallery = {
    element: document.querySelector("#myGallery"),
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

function display(elem) { elem.style.display = "block"; }
function hide(elem) { elem.style.display = "none"; }

const themeSwitch = document.querySelector("#switch");
themeSwitch.addEventListener("click", function () { toggleTheme(); });
function toggleTheme() {
    let theme = page.getAttribute("data-theme");

    if (theme == "dark") { theme = "light"; }
    else if (theme == "light") { theme = "dark"; }

    page.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
}
