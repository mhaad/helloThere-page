let iconeElement = document.querySelector("header .links");
iconeElement.onclick = function () {
    this.classList.toggle("active");
};

let topElement = document.querySelector(".top");
window.onscroll = function () {
    if (window.scrollY >= 600) {
        topElement.style.display = "block";
    } else {
        topElement.style.display = "none";
    }
};