const ts = document.querySelector('input[type="checkbox"]');
const nav = document.getElementById("nav");
const ti = document.getElementById("toogle-icon");
const img1 = document.getElementById("image1");
const img2 = document.getElementById("image2");
const img3 = document.getElementById("image3");
const tb = document.getElementById("text-box");

function imgmode(color) {
    img1.src = `img/undraw_conceptual_idea_${color}.svg`;
    img2.src = `img/undraw_feeling_proud_${color}.svg`;
    img3.src = `img/undraw_proud_coder_${color}.svg`;
}

function dm() {
    nav.style.backgroundColor = "rgb(0 0 0 / 50%)";
    tb.style.backgroundColor = "rgb(255 255 255 / 50%)";

    console.log(ti.children);

    ti.children[0].textContent = "Dark Mode";

    ti.children[1].classList.replace("fa-sun", "fa-moon");

    imgmode("dark");
}

function lm() {
    nav.style.backgroundColor = "rgb(255 255 255 / 50%)";
    tb.style.backgroundColor = "rgb(0 0 0 / 50%)";

    console.log(ti.children);

    ti.children[0].textContent = "Light Mode";

    ti.children[1].classList.replace("fa-moon", "fa-sun");

    imgmode("light");
}

function switchth(event) {
    if (event.target.checked) {
        document.documentElement.setAttribute("data-theme", "dark");
        localStorage.setItem('theme', 'dark');
        dm();
    } else {
        document.documentElement.setAttribute("data-theme", "ligh");
        localStorage.setItem('theme', 'light');
        lm();
    }
}







// ye theme ke value store krta user ke browser pe

const ths = localStorage.getItem('theme');

if (ths) {
    document.documentElement.setAttribute("data-theme", ths);


    if (ths === 'dark') {

        ts.checked = true;
        dm();
    }
}

ts.addEventListener("change", switchth);