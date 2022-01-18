const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
    const navLink = document.querySelectorAll(".nav-link");

    navLink.forEach(n => n.addEventListener("click", closeMenu));

    function closeMenu() {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
    }
}


$(function ($) {
    let url = window.location.href;
    $('li a').each(function () {
        if (this.href === url) {
            $(this).closest('li').addClass('activa');
        }
    });
});

$('.nav-item').click(function () {
    $('.nav-item').removeClass('actives');   // it remove all the active links
    $(this).addClass('actives');    // it adds active class to the current link you have opened
})