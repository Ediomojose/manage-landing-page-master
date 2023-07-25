const navigationHead = document.querySelector(".webpage__head");
const navLinks = document.querySelector(".navigation");
const menuToggleBtn = document.querySelector(".hambugger__menu");
const webPageBody = document.querySelector("body");

menuToggleBtn.addEventListener("click", () => {
  const menuVisibility = navLinks.getAttribute("data-visible");

  if (menuVisibility === "false") {
    navLinks.setAttribute("data-visible", true);
    menuToggleBtn.setAttribute("aria-expanded", true);
    // webPageBody.classList.add("scroll__body__fixed");
    // navigationHead.classList.remove("scroll__nav__sticky");
  }else if(menuVisibility === 'true'){
    navLinks.setAttribute("data-visible", false);
    menuToggleBtn.setAttribute("aria-expanded", false);
    // webPageBody.classList.remove("scroll__body__fixed");
    // navigationHead.classList.add("scroll__nav__sticky");
  }
});

document.querySelectorAll(".carousel").forEach((carousel) => {
  const items = carousel.querySelectorAll(".carousel__item");
  const buttonHtml = Array.from(items, () => {
    return `<span class="carousel__btn"></span>`;
  });
  carousel.insertAdjacentHTML(
    "beforeend",
    `<div class="carousel__nav">${buttonHtml.join("")}</div>`
  );

  const carouselBtns = carousel.querySelectorAll(".carousel__btn");

  carouselBtns.forEach((carouselBtn, i) => {
    carouselBtn.addEventListener("click", () => {
      // un-select all the items
      items.forEach((item) =>
        item.classList.remove("carousel__item--selected")
      );
      carouselBtns.forEach((carouselBtn) =>
        carouselBtn.classList.remove("carousel__btn--selected")
      );

      items[i].classList.add("carousel__item--selected");
      carouselBtn.classList.add("carousel__btn--selected");
    });
  });
});
