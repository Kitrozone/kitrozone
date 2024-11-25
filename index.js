const header = document.getElementById("header");
const hals = document.querySelectorAll(".hal");
const colors = ['#ff9999', '#99ff99', '#9999ff', '#ffff99'];

window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY + window.innerHeight / 2;

    hals.forEach((hal, index) => {
        const halTop = hal.offsetTop;
        const halHeight = hal.offsetHeight;

        if (scrollPosition >= halTop && scrollPosition < halTop + halHeight) {
            header.style.backgroundColor = colors[index];
        }
    });
});

'use strict';

const penunjukNav = document.querySelector('.penunjuk-nav');
const penunjukToggleBtn = document.querySelector('.nav-toggle-btn');


penunjukToggleBtn.addEventListener('click', function () {

  penunjukNav.classList.toggle('active');
  this.classList.toggle('active');

});