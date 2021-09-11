const burger = document.querySelector('.navigation_burger')
const navigationList = document.querySelector('.navigation_list');
const navigationLinks = document.querySelectorAll('.navigation_list_element')
console.log(navigationLinks)
const slideNavigation = () => {
    burger.addEventListener('click', ()=> {
        navigationList.classList.toggle("navigations-active");
        navigationLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = "";
            }
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.4}s`;
        });
        burger.classList.toggle('toggle');
    })
}

slideNavigation();

