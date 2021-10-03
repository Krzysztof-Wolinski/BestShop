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
const productsCalculate = document.querySelector(".c-products__calculate");
const quantityProducts = document.querySelector(".c-form__numbers__quantity");
const error = document.querySelector(".h-error__products-text");
const productsPrice = document.querySelector(".c-products__price");


const ordersBox = document.querySelector(".c-summary__orders__box");
const quantityOrders = document.querySelector(".c-form__numbers__orders");
const ordersCalculate = document.querySelector(".c-orders__calculate");
const ordersPrice = document.querySelector(".c-orders__price");

const inputsTypeNumber = document.querySelectorAll(".c-form__numbers");

const packageBox = document.querySelector(".c-summary__package__box")
const choosePackageInput = document.querySelector(".select");
const packageCalculate = document.querySelector(".c-package__calculate");
const packagePrice = document.querySelector(".c-package__price");


const inputAccounting = document.querySelector(".checkbox-accounting")
const accountingBox  = document.querySelector(".c-summary__accounting__box")
const accountingPrice = document.querySelector(".c-accounting__price")



const inputRental = document.querySelector(".checkbox-rental")
const terminalBox= document.querySelector(".c-summary__terminal__box")
const terminalPrice = document.querySelector(".c-terminal__price")
console.log(inputAccounting);

const totalPrice = document.querySelector(".c-total__price")

const order = {
  fn: () => {
    let sum = ((this.accountingSummaryPrice))
    
    // + this.ordersSummaryPrice + this.packageSummaryPrice + this.productsSummaryPrice + this.terminalSummaryPrice);
    console.log(sum)
    totalPrice.innerHTML = parseFloat(sum);
    return sum
  }
}

quantityProducts.addEventListener("change", (e) => {
  if (e.target.value < 0 || e.target.value % 1 != 0) {
    e.target.nextElementSibling.style.display = "block";
  } else {
    e.target.nextElementSibling.style.display = "none";
    showQuantityProducts(e.target);
  }
})

const showQuantityProducts = (products) => {
  let productsValue = products.value
  if (productsValue < 0 || productsValue % 1 != 0) {
    productsBox.style.display = "none";
  } else {
    productsBox.style.display = "flex";
    productsCalculate.innerHTML = `${productsValue} * $0.5`;
    let productsSummaryPrice = productsValue * 0.5;
    productsPrice.innerHTML = `$${productsSummaryPrice}`;
    totalPriceCalculator()
    return order.productsSummaryPrice = productsSummaryPrice;
  }
}
// order.prototype.producstsValue = "10";
const showQuantityOrders = (orders) => {
  let ordersValue = orders.value
  if (ordersValue < 0 || ordersValue % 1 != 0) {
    ordersBox.style.display = "none";
  } else {
    ordersBox.style.display = "flex";
    ordersCalculate.innerHTML = `${ordersValue} * $0.5`;
    let ordersSummaryPrice = ordersValue * 0.5;
    ordersPrice.innerHTML = `$${ordersSummaryPrice}`;
    totalPriceCalculator();
    return order.ordersSummaryPrice = ordersSummaryPrice;
  }
}

quantityOrders.addEventListener("change", (e) => {
  if (e.target.value < 0 || e.target.value % 1 != 0) {
    e.target.nextElementSibling.style.display = "block";
  } else {
    e.target.nextElementSibling.style.display = "none";
    showQuantityOrders(e.target);
    
  }
})

const showPackage = (package) => {
  console.log(package.value)
  let packageValue = package.value
  let packageSummaryPrice = 0;
  if (package.value.lengt == "") {
    packageBox.style.display = "none";
  } else {
    packageBox.style.display = "flex";
    packageCalculate.innerHTML = packageValue;
  }
  if (package.value == "Basic") {
    packageSummaryPrice = 10;
    packagePrice.innerHTML = `$${packageSummaryPrice}`;
  }
  if (package.value == "Professional") {
    packageSummaryPrice = 20;
    packagePrice.innerHTML = `$${packageSummaryPrice}`;
  }
  if (package.value == "Premium") {
    packageSummaryPrice = 30;
    packagePrice.innerHTML = `$${packageSummaryPrice}`;
  }
  totalPriceCalculator()
  return order.packageSummaryPrice = packageSummaryPrice;
}

choosePackageInput.addEventListener("change", (e)=> {
  if (e.target.value.lengt != "") {
    showPackage(e.target);
  }
})


inputAccounting.addEventListener("change", (e) => {
  let accountingSummaryPrice = 0;
  if (e.target.checked) {
    accountingBox.style.display = "flex"
    accountingSummaryPrice = 20;
    accountingPrice.innerHTML = `$${accountingSummaryPrice}`
  } else {
    accountingBox.style.display = "none"
  }
  totalPriceCalculator()
  return order.accountingSummaryPrice = accountingSummaryPrice;
})


inputRental.addEventListener("change", (e)=> {
  let terminalSummaryPrice = 0;
  if (e.target.checked) {
    terminalBox.style.display = "flex"
    terminalSummaryPrice = 20;
    terminalPrice.innerHTML = `$${terminalSummaryPrice}`
 
  } else {
    terminalBox.style.display = "none"
  }
  totalPriceCalculator()
  return order.terminalSummaryPrice = terminalSummaryPrice;
})

console.log(order);

const totalPriceCalculator = () => { 
  order["fn"]()
}

// totalPriceCalculator()