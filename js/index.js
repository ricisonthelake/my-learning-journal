const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.nav');
const viewMoreEl = document.getElementsByClassName("view-more")[0];
const viewLessEl = document.getElementsByClassName("view-less")[0];

navToggle.addEventListener('click', () => {
    nav.classList.toggle('nav--visible');
})

viewMoreEl.addEventListener('click', () => {

    document.getElementById("section2").style.display = "grid"
    document.getElementById("view-less").style.display = "block"
    document.getElementById("view-more").style.display = "none"


});

viewLessEl.addEventListener('click', () => {

    document.getElementById("section2").style.display = "none"
    document.getElementById("view-less").style.display = "none"
    document.getElementById("view-more").style.display = "inline"

});

