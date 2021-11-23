const burger = document.querySelector(".c-navigation__burger");
const navigationList = document.querySelector(".c-navigation__list");
const navigationLinks = document.querySelectorAll(".c-navigation__item");
navigationList.classList.add("h-hide");

const slideNavigation = () => {
  burger.addEventListener("click", () => {
    navigationList.classList.toggle("h-hide");
    burger.classList.toggle("toggle");
  });
};

slideNavigation();

const calculatorSection = document.querySelector(".l-section__calculator");
const buttonHideCalculator = document.querySelector(".c-btn__back");
buttonHideCalculator.addEventListener("click", () => {
  calculatorSection.classList.toggle("h-hide");
});

const buttonsPrice = document.querySelectorAll(".l-section-price a");

buttonsPrice.forEach((button) => {
  button.addEventListener("click", (e) => {
    calculatorSection.classList.toggle("h-hide");
  });
});
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

const packageBox = document.querySelector(".c-summary__package__box");
const choosePackageInput = document.querySelector(".select");
const packageCalculate = document.querySelector(".c-package__calculate");
const packagePrice = document.querySelector(".c-package__price");

const inputAccounting = document.querySelector(".checkbox-accounting");
const accountingBox = document.querySelector(".c-summary__accounting__box");
const accountingPrice = document.querySelector(".c-accounting__price");

const inputRental = document.querySelector(".checkbox-rental");
const terminalBox = document.querySelector(".c-summary__terminal__box");
const terminalPrice = document.querySelector(".c-terminal__price");

const totalPrice = document.querySelector(".c-total__price");

const totalPriceObject = {
  productsSummaryPrice: 0,
  ordersSummaryPrice: 0,
  packageSummaryPrice: 0,
  accountingSummaryPrice: 0,
  terminalSummaryPrice: 0,
};
quantityProducts.addEventListener("change", (e) => {
  if (e.target.value < 0 || e.target.value % 1 != 0) {
    e.target.nextElementSibling.style.display = "block";
    showQuantityProducts(e.target);
  } else {
    e.target.nextElementSibling.style.display = "none";
    showQuantityProducts(e.target);
  }
});

quantityOrders.addEventListener("change", (e) => {
  if (e.target.value < 0 || e.target.value % 1 != 0) {
    e.target.nextElementSibling.style.display = "block";
    showQuantityOrders(e.target);
  } else {
    e.target.nextElementSibling.style.display = "none";
    showQuantityOrders(e.target);
  }
});
const showQuantityProducts = (products) => {
  let productsValue = parseFloat(products.value);
  if (productsValue <= 0 || productsValue % 1 != 0) {
    productsBox.style.display = "none";
    totalPriceObject.productsSummaryPrice = productsValue;
  } else {
    productsBox.style.display = "flex";
    productsCalculate.innerHTML = `${productsValue} * $0.5`;
    let productsSummaryPrice = productsValue * 0.5;
    productsPrice.innerHTML = `$${productsSummaryPrice}`;
    totalPriceObject.productsSummaryPrice = productsSummaryPrice;
  }
  totalPriceCalculator();
};

const showQuantityOrders = (orders) => {
  let ordersValue = parseFloat(orders.value);
  if (ordersValue <= 0 || ordersValue % 1 != 0) {
    ordersBox.style.display = "none";
    totalPriceObject.ordersSummaryPrice = ordersValue;
  } else {
    ordersBox.style.display = "flex";
    ordersCalculate.innerHTML = `${ordersValue} * $0.5`;
    let ordersSummaryPrice = ordersValue * 0.25;
    ordersPrice.innerHTML = `$${ordersSummaryPrice}`;
    totalPriceObject.ordersSummaryPrice = ordersSummaryPrice;
  }
  totalPriceCalculator();
};

choosePackageInput.addEventListener("change", (e) => {
  if (e.target.value.lengt != "") {
    showPackage(e.target);
  }
});
const showPackage = (package) => {
  let packageValue = package.value;
  let packageSummaryPrice = 0;
  if (package.value.length == "") {
    packageBox.style.display = "none";
    totalPriceObject.packageSummaryPrice = 0;
  } else {
    packageBox.style.display = "flex";
    packageCalculate.innerHTML = packageValue;
  }
  if (package.value == "Basic") {
    packageSummaryPrice = 10;
    packagePrice.innerHTML = `$${packageSummaryPrice}`;
    totalPriceObject.packageSummaryPrice = packageSummaryPrice;
  }
  if (package.value == "Professional") {
    packageSummaryPrice = 20;
    packagePrice.innerHTML = `$${packageSummaryPrice}`;
    totalPriceObject.packageSummaryPrice = packageSummaryPrice;
  }
  if (package.value == "Premium") {
    packageSummaryPrice = 30;
    packagePrice.innerHTML = `$${packageSummaryPrice}`;
    totalPriceObject.packageSummaryPrice = packageSummaryPrice;
  }
  totalPriceCalculator();
};

inputAccounting.addEventListener("change", (e) => {
  let accountingSummaryPrice = 0;
  if (e.target.checked) {
    accountingBox.style.display = "flex";
    accountingSummaryPrice = 20;
    accountingPrice.innerHTML = `$${accountingSummaryPrice}`;
  } else {
    accountingBox.style.display = "none";
  }
  totalPriceObject.accountingSummaryPrice = accountingSummaryPrice;
  totalPriceCalculator();
});

inputRental.addEventListener("change", (e) => {
  let terminalSummaryPrice = 0;
  if (e.target.checked) {
    terminalBox.style.display = "flex";
    terminalSummaryPrice = 20;
    terminalPrice.innerHTML = `$${terminalSummaryPrice}`;
  } else {
    terminalBox.style.display = "none";
  }
  totalPriceObject.terminalSummaryPrice = terminalSummaryPrice;
  totalPriceCalculator();
});

const totalPriceCalculator = () => {
  let totalSummary = 0;
  totalSummary =
    totalPriceObject.productsSummaryPrice +
    totalPriceObject.ordersSummaryPrice +
    totalPriceObject.packageSummaryPrice +
    totalPriceObject.accountingSummaryPrice +
    totalPriceObject.terminalSummaryPrice;
  totalPrice.innerHTML = totalSummary;
  return totalSummary;
};
totalPriceCalculator();

const buttonSubmit = document.querySelector(".c-btn__send");
buttonSubmit.addEventListener("click", (e) => {
  e.preventDefault();
});
