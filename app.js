const burger = document.querySelector('.c-navigation__burger')
const navigationList = document.querySelector('.c-navigation__list');
const navigationLinks = document.querySelectorAll('.c-navigation__item')
console.log(navigationList);

const slideNavigation = () => {
    burger.addEventListener('click', () => {
        navigationList.classList.toggle("h-hide");
        console.log('kiknąłeś mnie')
    })
}

slideNavigation()
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

