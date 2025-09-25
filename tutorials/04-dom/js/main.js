let img0 = document.querySelector("#img-0");
let img1 = document.querySelector("#img-1");
let img2 = document.querySelector("#img-2");
let img3 = document.querySelector("#img-3");
let img4 = document.querySelector("#img-4");
let img5 = document.querySelector("#img-5");
let img6 = document.querySelector("#img-6");
let img7 = document.querySelector("#img-7");
let img8 = document.querySelector("#img-8");




img0.addEventListener('click', () => {
    img3.classList.remove("hidden");
});


img3.addEventListener('click', () => {
    img7.classList.remove("hidden");
});


img7.addEventListener('click', () => {
    img2.classList.remove("hidden");
});

img2.addEventListener('click', () => {
    img8.classList.remove("hidden");
});

img8.addEventListener('click', () => {
    img1.classList.remove("hidden");
});

img1.addEventListener('click', () => {
    img4.classList.remove("hidden");
});

img4.addEventListener('click', () => {
    img6.classList.remove("hidden");
});

img6.addEventListener('click', () => {
    img5.classList.remove("hidden");
});



