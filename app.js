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

const productsBox = document.querySelector(".c-summary__products__box");

const totalPriceCalculator = () => {};

const productsPriceCalculator = () => {
  const quantityProducts = document.querySelector(".c-form__text__quantity");
  const productsCalculate = document.querySelector(".c-products__calculate");
  const productsPrice = document.querySelector(".c-products__price");
  productsBox.style.display = "none";
  console.log(quantityProducts.value);

  /*










  
*/
  quantityProducts.addEventListener("change", () => {
    console.log(typeof parseInt(quantityProducts.value));
    if (typeof quantityProducts.value != "string") {
      productsBox.style.display = "flex";
    }
    // productsBox.style.display = "flex";
    productsCalculate.innerHTML = `${quantityProducts.value} * $${0.5}`;
    productsPrice.innerHTML = quantityProducts.value * 0.5;
  });
  return productsPrice;
};

console.log(productsPriceCalculator());
/*
















*/
const ordersPriceCalculator = () => {
  const ordersProducts = document.querySelector(".c-form__text__orders");
  const ordersCalculator = document.querySelector(".c-orders__calculate");
  const ordersPrice = document.querySelector(".c-orders__price");
  ordersProducts.addEventListener("keyup", () => {
    ordersCalculator.innerHTML = `${ordersProducts.value} * $${0.25}`;
    ordersPrice.innerHTML = `$${ordersProducts.value * 0.25}`;
  });
};

ordersPriceCalculator();
