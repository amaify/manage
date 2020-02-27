//CODE FOR THE TESTIMONIAL SLIDE

let slides = document.querySelectorAll(".testimonial__content");
let dots = document.querySelectorAll(".dots__span");
let slideIndex = 0;
let x = window.matchMedia("(min-width: 600px)");

x.matches ? null : showSlides();

function showSlides() {
  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.add("test");
  }
  for (let x = 0; x < dots.length; x++) {
    dots[x].className = dots[x].className.replace(" active", "");
  }
  slideIndex++;

  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].classList.remove("test");
  dots[slideIndex - 1].className += " active";

  setTimeout(showSlides, 5000);
}

//END OF CODE

//CODE FOR OPENING AND CLOSING MOBILE MENU
let menu = document.querySelector(".menu");
let backdrop = document.querySelector(".backdrop");
let mobileNav = document.querySelector(".mobile__nav");

let hamburger = `<img src="./images/icon-hamburger.svg" alt="" class="menu__img">`;
let closeBtn = `<img src="./images/icon-close.svg" alt="" class="menu__img">`;

window.onload = menu.innerHTML = hamburger;

menu.addEventListener("click", () => {
  menu.innerHTML === hamburger ? openNav() : closeNav();
});
backdrop.addEventListener("click", closeNav);

function openNav() {
  backdrop.classList.add("open__backdrop");
  mobileNav.classList.add("open__nav");

  menu.innerHTML === hamburger
    ? (menu.innerHTML = closeBtn)
    : (menu.innerHTML = hamburger);
}

function closeNav() {
  backdrop.classList.remove("open__backdrop");
  mobileNav.classList.remove("open__nav");

  menu.innerHTML === closeBtn
    ? (menu.innerHTML = hamburger)
    : (menu.innerHTML = closeBtn);
}
//END OF CODE

//CODE FOR VALIDATING EMAIL
let input = document.querySelector(".footer__form--field");
let submit = document.querySelector(".footer__form--submit");
let error = document.querySelector(".footer__form--error");

window.onload = input.value = "";

input.addEventListener("blur", validateEmail);
submit.addEventListener("click", (e, validateEmail) => {
  e.preventDefault();
  validateEmail;

  input.value === ""
    ? (error.classList.add("is-invalid"), input.classList.add("is-invalidTwo"))
    : (error.classList.remove("is-invalid"),
      input.classList.remove("is-invalidTwo"));
});

function validateEmail() {
  const re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;

  !re.test(input.value)
    ? (error.classList.add("is-invalid"), input.classList.add("is-invalidTwo"))
    : (error.classList.remove("is-invalid"),
      input.classList.remove("is-invalidTwo"));
}
//END OF CODE
