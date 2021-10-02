// const burger = document.querySelector(".c-navigation__burger");
// const navigationList = document.querySelector(".c-navigation__list");
// const navigationLinks = document.querySelectorAll(".c-navigation__item");
// console.log(navigationList);
// navigationList.classList.add("h-hide");

// const slideNavigation = () => {
//   burger.addEventListener("click", () => {
//     navigationList.classList.toggle("h-hide");
//     console.log("kiknąłeś mnie");
//   });
// };

// slideNavigation();
// const slideNavigation = () => {
//     burger.addEventListener('click', ()=> {
//         navigationList.classList.toggle("navigations-active");
//         navigationLinks.forEach((link, index) => {
//             if (link.style.animation) {
//                 link.style.animation = "";
//             }
//             link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.4}s`;
//         });
//         burger.classList.toggle('toggle');
//     })
// }

// slideNavigation();

const quantityProducts = document.querySelector(".c-form__text__quantity");
const productsPrice = document.querySelector(".c-products__price");

console.log(quantityProducts.value);

const productsCalculate = document.querySelector(".c-products__calculate");

quantityProducts.addEventListener("keyup", () => {
  console.log(isNaN(quantityProducts.value));

  console.log(typeof quantityProducts.value);
  if (isNaN(quantityProducts.value)) {
    quantityProducts.style.border = "1px solid red";
  } else {
    productsCalculate.innerHTML = `${quantityProducts.value} *  $${0.5}`;
    productsPrice.innerHTML = quantityProducts.value * 0.5;
  }
});
