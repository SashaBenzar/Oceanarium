import * as scroll from "./modules/scroll.js";
import * as animation from "./modules/animated_text.js";

let btn = document.querySelector('.main__button');
btn.addEventListener('click', () => scroll.ScrollToBlock('.about'));

let blocks = document.querySelectorAll("section"); 
let ulBlocks = document.querySelectorAll(".header__list li");

for (let index = 0; index < ulBlocks.length; index++) {
    ulBlocks[index].addEventListener('click', () => scroll.ScrollToBlock("." + blocks[index].className));
}

/******************************************************************************************************/
const icon = document.querySelector(".header__icon");
const menuBody = document.querySelector(".header__menu");
const headerItem = document.querySelectorAll(".header__list li");

icon.addEventListener("click", function (e) {
    document.body.classList.toggle("_lock");
    icon.classList.toggle("_active");
    menuBody.classList.toggle("_active");
});

headerItem.forEach(headerItem => {
    headerItem.addEventListener("click", function (e) {
        if (icon.classList.contains("_active")) {
            document.body.classList.remove("_lock");
            icon.classList.remove("_active");
            menuBody.classList.remove("_active");
        }
    });
});

/******************************************************************************************************/

let header = document.querySelector(".header");

console.log()
addEventListener("scroll", function() {
    if (window.pageYOffset > "100"){
        header.style.background = "rgba(26, 26, 26, 1)";
    }else{
        header.style.background = "rgba(26, 26, 26, 0.8)";
    }
});

/******************************************************************************************************/

const animItems = document.querySelectorAll('._anim-items');
window.addEventListener('scroll', () => animation.animOnScroll(animItems));

setTimeout(() => {
    animation.animOnScroll(animItems);
}, 300);
