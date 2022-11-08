// hamburger button
const main = document.querySelector('main');
const menuToggle = document.getElementById('menu-toggle');
const closeBtn = document.getElementById('close-toggle');
const linkBtns = document.querySelectorAll('.nav__list-mobile a');

menuToggle.addEventListener('click', function (event) {
    document.querySelector('.navigation').style.top = '0';
});
closeBtn.addEventListener('click', function (event) {
    document.querySelector('.navigation').style.top = '-100%';
});
main.addEventListener('click', function (event) {
    const top = document.querySelector('.navigation').style.top;

    if (top == '0px') {
        document.querySelector('.navigation').style.top = '-100%';
    }
});
